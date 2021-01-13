// Importing modules
import axios from "axios";

import hash from "hasha";
import moment from "moment";

import randomString from "../../helpers/randomString";

import { query as q } from "faunadb";
import storage from "../../storage";

const api = "https://lococovu.me";

// Exporting function
export default async (id, pincode) => {
  // Let's firstly get this account information
  let response = await axios.get(`${api}/api/profile/${id}`);
  let profile  = response.data;

  // Checking if this profile has configured pincode
  // authorization.
  if (profile.security.pincode) {
    // And now let's check stored hash of
    // our pincode with hash of given pincode
    if (hash(pincode) == profile.security.pincode) {
      // Let's now create new security token
      // and return it
      let token = {
        token: randomString(16),
        id: profile.id,

        type: "AuthorizedPincode",
        authorizationDate: moment().add('1', 'day').unix()
      };

      await storage.query(
        q.Create(
          q.Collection("tokens"), 
          { data: token }
        )
      );

      // And now let's return this token information
      // to user
      return token;
    } else {
      throw new Error(JSON.stringify({ status: 404, error: "WrongPincode" }));
    };
  } else {
    throw new Error(JSON.stringify({ status: 500, error: "PincodeIsNotSet" }));
  };
};