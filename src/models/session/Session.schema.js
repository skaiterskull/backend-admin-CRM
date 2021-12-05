import mongoose from "mongoose";

const SessionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    token: {
      type: String,
      required: true,
      maxLength: 500,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Session", SessionSchema);
