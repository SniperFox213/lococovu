// Importing modules
import fauna from "faunadb";

const client = new fauna.Client({ secret: process.env.STORAGE_TOKEN });

// And now let's export our datastorage
// instance 
export default client;