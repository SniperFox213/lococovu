// Importing packages
import express from "express";
const router = express.Router();

import hash from "hasha";

// Functions
import RetrieveProfile from "../functions/profile/RetrieveProfile.func.js";

router.get('/:id', (req, res) => {
  // And now let's call
  // RetrieveProfile function
  RetrieveProfile(req.params.id)
  .then((response) => {
    res.end(JSON.stringify(response));
  }).catch((error) => {
    try {
      res.status(error.response.data.status == null ? 500 : error.response.data.status).end(JSON.stringify(error.response.data));
    } catch (error) {
      console.log(error);
      res.status(500).end(JSON.stringify({ error: "ServerError" }));
    }
  });
});

// Authorize Pincode
import AuthorizePincode from "../functions/codes/AuthorizeSecurityCode.func";

router.get('/:id/authorize/:pincode', (req, res) => {
  // Let's call
  // AuthorizePincode function
  AuthorizePincode(req.params.id, req.params.pincode)
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

// Change Profile Information
import ChangeInformation from "../functions/profile/ChangeInformation.func";

// Account Information
router.post('/:token/information', (req, res) => {
  ChangeInformation(req.params.token, 
    { 
      nickname: req.body.nickname,
      description: req.body.description || null 
    })
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

// Install pincode
router.post('/:token/pincode', (req, res) => {
  ChangeInformation(req.params.token,
    {
      security: {
        pincode: hash(req.body.pincode)
      }
    })
  .then((response) => {
    // And now let's authorize user using
    // his new pincode and return a Security Code
    setTimeout(() => {
      AuthorizePincode(response.id, req.body.pincode) 
      .then((response) => {
        res.end(JSON.stringify(response));
      });
    }, 1000);
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