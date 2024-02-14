// Import using consistent casing
import HealthRecord from "../models/HealthRecord.js";

export const createRecord = async (req, res) => {
  try {
    const newRecord = new HealthRecord(req.body);
    const savedRecord = await newRecord.save();
    res.json(savedRecord);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

export const getAllRecords = async (req, res) => {
  try {
    const records = await HealthRecord.find();

    res.json(records);
  } catch (error) {
    console.error("Error fetching records:", error);
    res.status(500).json({ error: error.message });
  }
};

export const updateRecord = async (req, res) => {
  try {
    const updatedRecord = await HealthRecord.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedRecord);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteRecord = async (req, res) => {
  try {
    const deletedRecord = await HealthRecord.findByIdAndDelete(req.params.id);
    res.json(deletedRecord);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message });
  }
};
// Fetch a health record by ID
export const getHealthRecordById = async (req, res) => {
  try {
    const { id } = req.params;
    const healthRecord = await HealthRecord.findById(id);
    if (!healthRecord) {
      return res.status(404).json({ message: "Health record not found" });
    }
    res.status(200).json(healthRecord);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
