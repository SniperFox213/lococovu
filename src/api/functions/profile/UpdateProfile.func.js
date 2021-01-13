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

    nickname: profile.nickname || undefined,
    wallet: profile.wallet || undefined,
    level: profile.level || undefined,

    security: {
      pincode: profile.security == null ? undefined : profile.security.pincode || undefined
    }
  };

  // Okay, so now let's check if this object even exists
  try {
    let response = await storage.query(q.Get(q.Match(q.Index("SearchUserById"), id)));

    // We need to update this object
    let profile = await storage.query(q.Update(response.ref, { data: account }));

    return profile.data;
  } catch {
    // Let's create new profile object
    try {
      let response = await storage.query(q.Create(q.Collection("users"), { data: account }));

      return response.data;
    } catch {
      throw new Error(JSON.stringify({ error: "ServerError" }));
    };
  };
};