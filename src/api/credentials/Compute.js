// Let's now import needed modules and
// let's create new @google-cloud/compute instance
import Compute from "@google-cloud/compute";

// import fs from "fs";
// import gcc from "./gcc.json";

// And now let's create file, containing authentication
// information.
// fs.writeFile('./gcc-authentication.json', JSON.stringify(gcc), (error) => {});

// And now let's
const compute = new Compute({ projectId: "unfull-cloud", keyFilename: "./gcc-authentication.json" });

// And now let's export this Compute Instance
export default compute;