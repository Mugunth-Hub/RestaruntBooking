import express from "express";
import {
  getAllProperties,
  getSingleProperty,
  addProperty,
} from "../controllers/propertyController.js";

const router = express.Router();

router.get("/", getAllProperties);
router.get("/:id", getSingleProperty);
router.post("/", addProperty);

export default router;