import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
  title: String,
  description: String,
  name: String,
  creator: String,
  tags: [String],
  imageFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  likeCount: {
    type: Number,
    default: 0,
  },
});

const CardSchema = mongoose.model("Card", cardSchema);

export default CardSchema;
