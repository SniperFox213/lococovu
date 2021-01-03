// Importing modules
import fauna from "faunadb";

const client = new fauna.Client({ secret: "fnAD-lHjyzACASWKQgmuHF4REj2RNMbzibY-fuTE" });

// And now let's export our datastorage
// instance 
export default client;