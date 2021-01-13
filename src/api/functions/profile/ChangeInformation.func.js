// Importing modules
import axios from "axios";

import UpdateProfile from "./UpdateProfile.func";

const api = "https://lococovu.me/api";

// Exporting function
export default async (token, data) => {
  // Let's firstly check this token
  // information
  let response;
  let type = "token";
  
  if (token.includes("-")) {
    token = token.replace("-", "");
    type  = "code";

    let responseToken = await axios.get(`${api}/security/code/${token}`);
    response = await axios.get(`${api}/profile/${responseToken.data.id}`);
  } else {
    response = await axios.get(`${api}/profile/${token}`);
  };

  response = response.data || {};

  // Checking information
  if (response.security.pincode && type != "code") throw new Error(JSON.stringify({ status: 400, error: "Unauthorized" }));

  // Let's update this account
  try {
    let profile = await UpdateProfile(response.id, data);

    return profile;
  } catch {
    throw new Error(JSON.stringify({ status: 500, error: "ServerError" }));
  }
};