import express from "express";
const router = express.Router();

import Report from "./Report.js";


router.get("/", (req, res) => {
  res.send("API v1 is running...");
});

router.use("/reports",Report );

export default router;