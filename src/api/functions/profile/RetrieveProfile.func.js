// Importing modules
import storage from "../../storage";
import { query as q } from "faunadb";

import axios from "axios";

const api = "https://authed.unfull.ml/api";

// 
// {
//   id: "id",                        - EXTERNAL
//   nickname: "juiipup",             - INTERNAL
// 
//   displayName: "Марш Джеймсон",    - EXTERNAL
//   email: "soglacen@gmail.com",     - EXTERNAL
// 
//   avatar: "url",                   - EXTERNAL
//   internalAvatar: "url"            - TODO: INTERNAL
// 
//   level: {
//     number: "number"
//   },
// 
//   wallet: {
//     lambdas: "number",             - INTERNAL
//     credits: "number"              - INTERNAL
//   },
// 
//   security: {
//     pincode: "string"              - INTERNAL
//   }
// }

// Exporting function
export default async (id) => {
  // Now let's check this user's
  // information from unfull.authed

  // External Profile (from unfull.authed)
  let type = id.split('').length > 16 ? "user" : "token";
  let external = await axios.get(`${api}/${type}/${id}`);

  // Let's now take out profile information
  if (type == "token") {
    external = external.data.profile;
  } else {
    external = external.data;
  };

  // Internal Profile (from lococovu's database)
  let internal;
  let friends;
  try {
    internal = await storage.query(
      q.Get(
        q.Match(
          q.Index("SearchUserById"), external.id
        )
      )
    );

    internal = internal.data;
  } catch (error) {
    // Let's now provide default
    // account information.
    internal = {
      nickname: null,

      friends: [],

      level: {
        number: 0
      },

      wallet: {
        lambdas: 100,
        credits: 0
      },

      security: {
        pincode: null
      }
    }
  };

  // And now let's try to find
  // all friends of this user
  try {
    friends = await storage.query(
      q.Map(
        q.Paginate(
          q.Match(
            q.Index("SearchFriendsById"), external.id
          )
        ),
        q.Lambda("X", q.Get(q.Var("X")))
      )
    );
    internal.friends = friends.data.map((obj) => {
      return obj.data;
    });
  } catch (error) {
    internal.friends = []
  };

  //
  // And now let's create our user profile.
  // 
  const profile = {
    id: external.id,

    isToken: type == "token" ? true : false,

    nickname: internal.nickname,

    avatar: external.photos[0].value,
    internalAvatar: external.photos[0].value || "https://d.facdn.net/art/feve/1499642928/1499642928.feve_doggo.png",

    displayName: external.displayName,
    email: external.emails[0].value,

    friends: internal.friends || [],

    level: internal.level || { number: 0 },

    wallet: internal.wallet || { lambdas: 100, coins: 0 },
  
    security: internal.security || { pincode: null }
  };

  return profile;
};