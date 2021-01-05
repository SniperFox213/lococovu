// Importing packages
import express from "express";
const router = express.Router();

// Importing functions
import RetrieveSecurityCode from "../functions/codes/RetrieveSecurityCode.func";

router.get('/code/:code', (req, res) => {
  RetrieveSecurityCode(req.params.code)
  .then((response) => {
    res.end(JSON.stringify(response));
  }).catch((error) => {
    try {
      res.status(error.response.data.status == null ? 500 : error.response.data.status).end(JSON.stringify(error.response.data));
    } catch (error) {
      res.status(500).end(JSON.stringify({ error: "ServerError" }));
    }
  });
});

// Exporting router
export default router;