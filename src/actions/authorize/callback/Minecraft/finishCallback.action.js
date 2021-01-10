// Importing modules
import axios from "axios";
import config from "../../../../config/api/default.json";

// Exporting default function
export default async (code, token) => {
  console.log("FINISH");

  try {
    let response = await axios.post(`${config.apiURI.internal}/callback/authorize/${code}/${token}`);
    console.log("OKAY");

    return response.data;
  } catch (error) {
    console.log("ERROR");
    console.log(error);
    
    throw new Error(JSON.stringify({ error: "ServerError" }));
  } 
};