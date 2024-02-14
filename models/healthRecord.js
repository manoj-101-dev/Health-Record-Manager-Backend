import mongoose from "mongoose";

const healthRecordSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  weight: Number,
  exercise: String,
  notes: String,
});

const HealthRecord = mongoose.model("HealthRecord", healthRecordSchema);

export default HealthRecord;
