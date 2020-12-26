// Importing packages
import express from "express";
const router = express.Router();

router.get('/', (req, res) => {
  res.end(JSON.stringify({ hello: "world" }));
});

// Exporting router
export default router;