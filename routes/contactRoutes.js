// routes/contactRoutes.js
import express from "express";
import { createContact} from "../controllers/contactControler.js";

const router = express.Router();
router.post("/", createContact);
  

export default router;
