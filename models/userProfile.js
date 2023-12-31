const mongoose=require('mongoose');
const UserSchema = mongoose.Schema({
  username: { type: String, required: true, min: 4, unique: true },
  firstName: {
    type: String,
    required: [true, "First name is required"],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
  },
  email: {
    type: String,
    required: [true, "Email address is required"],
    // unique: true,
    // match: [
    //   /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/,
    //   "Please enter a valid email address",
    // ],
  },
  phone: {
    type: Number,
    required: [true, "Phone number is required"],
    // unique: true,
    // match: [/^\d{10}$/, "Please enter a valid 10-digit phone number"],
  },
  highestQualification: {
    type: String,
    enum: [
      "High School",
      "Bachelor's Degree",
      "Master's Degree",
      "Doctorate",
      "None",
    ],
    default: "None",
  },
  courseStudied: {
    type: String,
    enum: ["FSD", "DSA", "ML-AI","RPA","ST","CSA", "None"],
    default: "None",
  },
  batchDetails: {
    type: String,
    enum: ["KKEM", "NORKA", "KDISC", "None"],
    default: "None"},
  placementStatus: {
    type: String,
    enum: ["Placed", "Job-Seeking", "None"],
    default: "None",
  },
  companyName: {
    type: String,
    default: "None",
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
});
const User = mongoose.model("JobCollection", UserSchema);
module.exports = User;