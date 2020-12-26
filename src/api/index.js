// Importing and configuring packages 
import express from "express";
const router = express.Router();

// Importing Routers
import IndexRouter from "./routes/index";
router.use('/', IndexRouter);

export default router;