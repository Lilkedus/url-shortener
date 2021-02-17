import mongoose from "mongoose";
import shortid from "shortid";

const urlSchema = new mongoose.Schema({
  original: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
    default: shortid.generate
  }
});

const url = mongoose.model("Url", urlSchema);
export default url;
