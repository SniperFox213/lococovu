// Importing and configuring packages 
import express from "express";
const router = express.Router();

// Importing Routers
import IndexRouter from "./routes/index";
router.use('/', IndexRouter);

// Profile-related Routes
import ProfileRouter from "./routes/profile";
router.use('/profile', ProfileRouter);

export default router;