// Importing and configuring packages 
import express from "express";
const router = express.Router();

// Importing Routers
import IndexRouter from "./routes/index";
router.use('/', IndexRouter);

// Profile-related Routes
import ProfileRouter from "./routes/profile";
router.use('/profile', ProfileRouter);

// Securit-related Routes
import SecurityRouter from "./routes/security";
router.use('/security', SecurityRouter);

// Callback-related Route
import CallbackRoute from "./routes/callback";
router.use('/callback', CallbackRoute);

export default router;