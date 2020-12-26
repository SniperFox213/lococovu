// Importing and configuring packages 
import express from "express";
const router = express.Router();

// Importing Routers
import IndexRouter from "./routes/index";
router.use('/', IndexRouter);

import TestRouter from "./routes/test";
router.use('/test', TestRouter);

export default router;