const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TipsSchema = new Schema({
  tips: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Tips = mongoose.model("Tips", TipsSchema);

module.exports = Tips;