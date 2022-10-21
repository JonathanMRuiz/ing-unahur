import CardModal from "../models/card.js";
import mongoose from "mongoose";

export const createCard = async (req, res) => {
  const card = req.body;
  const newCard = new CardModal({
    ...card,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newCard.save();
    res.status(201).json(newCard);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const getCards = async (req, res) => {
  const { page } = req.query;
  try {
    const limit = 6;
    const startIndex = (Number(page) - 1) * limit;
    const total = await CardModal.countDocuments({});
    const cards = await CardModal.find().limit(limit).skip(startIndex);
    res.json({
      data: cards,
      currentPage: Number(page),
      totalCards: total,
      numberOfPages: Math.ceil(total / limit),
    });
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const getCard = async (req, res) => {
  const { id } = req.params;
  try {
    const card = await CardModal.findById(id);
    res.status(200).json(card);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const getCardsByUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "User doesn't exist" });
  }
  const userCards = await CardModal.find({ creator: id });
  res.status(200).json(userCards);
};

export const deleteCard = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: `No card exist with id: ${id}` });
    }
    await CardModal.findByIdAndRemove(id);
    res.json({ message: "Card deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const updateCard = async (req, res) => {
  const { id } = req.params;
  const { title, description, creator, imageFile, tags } = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: `No card exist with id: ${id}` });
    }

    const updatedCard = {
      creator,
      title,
      description,
      tags,
      imageFile,
      _id: id,
    };
    await CardModal.findByIdAndUpdate(id, updatedCard, { new: true });
    res.json(updatedCard);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const getCardsBySearch = async (req, res) => {
  const { searchQuery } = req.query;
  try {
    const title = new RegExp(searchQuery, "i");
    const cards = await CardModal.find({ title });
    res.json(cards);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const getCardsByTag = async (req, res) => {
  const { tag } = req.params;
  try {
    const cards = await CardModal.find({ tags: { $in: tag } });
    res.json(cards);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const getRelatedCards = async (req, res) => {
  const tags = req.body;
  try {
    const cards = await CardModal.find({ tags: { $in: tags } });
    res.json(cards);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const likeCard = async (req, res) => {
  const { id } = req.params;
  try {
    if (!req.userId) {
      return res.json({ message: "User is not authenticated" });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: `No card exist with id: ${id}` });
    }

    const card = await CardModal.findById(id);

    const index = card.likes.findIndex((id) => id === String(req.userId));

    if (index === -1) {
      card.likes.push(req.userId);
    } else {
      card.likes = card.likes.filter((id) => id !== String(req.userId));
    }

    const updatedCard = await CardModal.findByIdAndUpdate(id, card, {
      new: true,
    });

    res.status(200).json(updatedCard);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
