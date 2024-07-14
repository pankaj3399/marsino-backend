import express from "express";
const router = express.Router();

import { GetReports } from "../controller/Report.js";

router.route("/").get(GetReports)

export default router;