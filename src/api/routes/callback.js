// Importing packages
import express from "express";
const router = express.Router();

import cache from "apicache";

// Importing functions and processing
// with routes

// @route /api/callback/code/:code
// @function GetCallback.func

import GetCallback from "../functions/profile/callback/GetCallback.func";

router.get('/code/:code', cache.middleware("5 minutes"), (req, res) => {
  req.apicacheGroup = `callbackCode/${req.params.code}`;
  
  GetCallback(req.params.code)
  .then((response) => {
    res.end(JSON.stringify(response));
  }).catch(() => {
    res.status(500).end(JSON.stringify({ error: "ServerError" }));
  });
});

// @route /api/callback/authorize/:code/:token
// @function AuthorizeCallback.func

import AuthorizeCallback from "../functions/profile/callback/AuthorizeCallback.func";

router.post('/authorize/:code/:token', (req, res) => {
  AuthorizeCallback(req.params.code, req.params.token)
  .then((response) => {
    res.end(JSON.stringify(response));
  }).catch(() => {
    res.status(500).end(JSON.stringify({ error: "ServerError" }));
  });
});


// Exporting router
export default router;