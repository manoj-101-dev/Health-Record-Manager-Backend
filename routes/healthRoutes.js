import express from "express";
import {
  createRecord,
  deleteRecord,
  getAllRecords,
  getHealthRecordById,
  updateRecord,
} from "../controllers/healthController.js";

const router = express.Router();

router.post("/create", createRecord);
router.get("/getAll", getAllRecords);
router.put("/update/:id", updateRecord);
router.delete("/delete/:id", deleteRecord);
router.get("/:id", getHealthRecordById);

export default router;
