// Importing modules
import storage from "../../../storage";
import { query as q } from "faunadb";

import cache from "apicache";

// Importing functions
import RetrieveProfile from "../RetrieveProfile.func";

// Exporting default function
export default async (code, token) => {
  // Let's firstly retrieve profile
  // with this token.
  RetrieveProfile(token)
  .then(async (profile ) => {
    if (profile.isToken) {
      
      // And now let's just create this new
      // Callback Code
      let callbackCode = {
        code: code,
        token: token,

        pid: profile.id
      };

      try {
        let response = await storage.query(q.Create(q.Collection("callbackCodes"), { data: callbackCode })).catch((error) => console.log(error));

        cache.clear(`callbackCode/${code}`);
        return response.data;
      } catch {
        throw new Error(JSON.stringify({ status: 500, error: "ServerError" }));
      };
    } else {
      throw new Error(JSON.stringify({ status: 500, error: "InvalidToken" }));
    };
  }).catch(() => {
    throw new Error(JSON.stringify({ status: 404, error: "ProfileNotFound" }));
  })
};