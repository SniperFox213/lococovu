// Importing modules
import storage from "../../storage";
import { query as q } from "faunadb";

// Exporting function
export default async (id, profile) => {
  // Let's firstly check this token
  // information
  
  // Let's firstly build our profile object
  let account = {
    id: id,

    nickname: profile.nickname || null,
    wallet: profile.wallet || null,
    level: profile.level || null,

    security: {
      pincode: profile.security == null ? null : profile.security.pincode || null
    }
  };

  // Okay, so now let's check if this object even exists
  storage.query(
    q.Get(q.Match(q.Index("SearchUserById"), id))
  ).then((response) => {
    // We need to update this object
    storage.query(
      q.Update(response.ref, { data: account })
    ).then((response) => {
      return response.data;
    }).catch((error) => {
      console.log("ERROR #2");
      console.log(error);

      throw new Error(JSON.stringify({ status: 500, error: "ServerError" }));
    });
  }).catch(() => {
    // We need to create this object
    storage.query(
      q.Create(q.Collection("users"), { data: account })
    ).then((response) => {
      return response.data;
    }).catch((error) => {
      console.log("ERROR #2");
      console.log(error);

      throw new Error(JSON.stringify({ status: 500, error: "ServerError" }));
    });
  });
};