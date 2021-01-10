// Importing modules
import moment from "moment";

import storage from "../../../storage";
import { query as q } from "faunadb";

// Importing functions
import RetrieveProfile from "../RetrieveProfile.func";

// Exporting default function
export default async (code, token) => {
  // Let's firstly retrieve profile
  // with this token.
  RetrieveProfile(token)
  .then((profile ) => {
    console.log("PROFILE OKAY");
    if (profile.isToken) {
      // And now let's just create this new
      // Callback Code
      let callbackCode = {
        code: code,
        token: token,

        pid: profile.id
      };

      console.log("CREATE CODE");
      console.log(code);

      try {
        let response = storage.query(q.Create(q.Collection("callbackCodes"), { data: callbackCode }));
        console.log("CREATED!");

        return response.data;
      } catch {
        console.log("ERROR #1");
        throw new Error(JSON.stringify({ status: 500, error: "ServerError" }));
      };
    } else {
      console.log("ERROR #2");
      throw new Error(JSON.stringify({ status: 500, error: "InvalidToken" }));
    };
  }).catch(() => {
    console.log("ERROR #3");
    throw new Error(JSON.stringify({ status: 404, error: "ProfileNotFound" }));
  })
};