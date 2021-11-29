import mongoose from "mongoose";

const AdminUserSchema = new mongoose.Schema(
  {
    status: {
      type: Boolean,
      required: true,
      default: true,
    },
    fName: {
      type: String,
      required: true,
      maxLength: 30,
    },
    lName: {
      type: String,
      required: true,
      maxLength: 30,
    },
    email: {
      type: String,
      required: true,
      maxLength: 100,
      indexes: 1,
      unique: true,
    },
    phone: {
      type: String,
      maxLength: 15,
    },
    password: {
      type: String,
      required: true,
      maxLength: 500,
    },
    role: {
      type: String,
      required: true,
      maxLength: 30,
      default: "developer", //admin, developer, customerService,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Admin_User", AdminUserSchema);
