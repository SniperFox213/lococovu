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
//     credits: "number"                - INTERNAL
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
  try {
    internal = await storage.query(
      q.Get(
        q.Match(
          q.Index("SearchUserById", external.id)
        )
      )
    );
  } catch {
    // Let's now provide default
    // account information.
    internal = {
      nickname: null,

      level: {
        number: 0
      },

      wallet: {
        lambdas: 100,
        credits: 0
      }
    }
  };

  //
  // And now let's create our user profile.
  // 
  const profile = {
    id: external.id,

    isToken: type == "token" ? true : false,

    nickname: internal.nickname,

    avatar: external.photos[0].value,
    internalAvatar: "https://d.facdn.net/art/feve/1499642928/1499642928.feve_doggo.png",

    displayName: external.displayName,
    email: external.emails[0].value,

    level: {
      number: internal.level.number
    },

    wallet: {
      lambdas: internal.wallet.lambdas,
      credits: internal.wallet.credits
    }
  };

  return profile;
};