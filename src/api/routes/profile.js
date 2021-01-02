// Importing packages
import express from "express";
const router = express.Router();

// Functions
import RetrieveProfile from "../functions/profile/RetrieveProfile.func.js";

router.get('/:id', (req, res) => {

  // And now let's call
  // RetrieveProfile function
  RetrieveProfile(req.params.id)
  .then((response) => {
    res.end(JSON.stringify(response));
  }).catch((error) => {
    console.log("ERROR");
    console.log(error);
    try {
      res.status(error.response.data.status == null ? 500 : error.response.data.status).end(JSON.stringify(error.response.data));
    } catch (error) {
      res.status(500).end(JSON.stringify({ error: "ServerError" }));
    }
  });
});

// Exporting router
export default router;