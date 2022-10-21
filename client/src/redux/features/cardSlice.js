import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const createCard = createAsyncThunk(
  "card/createCard",
  async ({ updatedCardData, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.createCard(updatedCardData);
      toast.success("Card Added Successfully");
      navigate("/");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getCards = createAsyncThunk(
  "card/getCards",
  async (page, { rejectWithValue }) => {
    try {
      const response = await api.getCards(page);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getCard = createAsyncThunk(
  "card/getCard",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.getCard(id);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const likeCard = createAsyncThunk(
  "card/likeCard",
  async ({ _id }, { rejectWithValue }) => {
    try {
      const response = await api.likeCard(_id);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getCardsByUser = createAsyncThunk(
  "card/getCardsByUser",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await api.getCardsByUser(userId);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteCard = createAsyncThunk(
  "card/deleteCard",
  async ({ id, toast }, { rejectWithValue }) => {
    try {
      const response = await api.deleteCard(id);
      toast.success("Card Deleted Successfully");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const updateCard = createAsyncThunk(
  "card/updateCard",
  async ({ id, updatedCardData, toast, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.updateCard(updatedCardData, id);
      toast.success("Card Updated Successfully");
      navigate("/");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const searchCards = createAsyncThunk(
  "card/searchCards",
  async (searchQuery, { rejectWithValue }) => {
    try {
      const response = await api.getCardsBySearch(searchQuery);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getCardsByTag = createAsyncThunk(
  "card/getCardsByTag",
  async (tag, { rejectWithValue }) => {
    try {
      const response = await api.getTagCards(tag);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getRelatedCards = createAsyncThunk(
  "card/getRelatedCards",
  async (tags, { rejectWithValue }) => {
    try {
      const response = await api.getRelatedCards(tags);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const cardSlice = createSlice({
  name: "card",
  initialState: {
    card: {},
    cards: [],
    userCards: [],
    tagCards: [],
    relatedCards: [],
    currentPage: 1,
    numberOfPages: null,
    error: "",
    loading: false,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: {
    [createCard.pending]: (state, action) => {
      state.loading = true;
    },
    [createCard.fulfilled]: (state, action) => {
      state.loading = false;
      state.cards = [action.payload];
    },
    [createCard.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getCards.pending]: (state, action) => {
      state.loading = true;
    },
    [getCards.fulfilled]: (state, action) => {
      state.loading = false;
      state.cards = action.payload.data;
      state.numberOfPages = action.payload.numberOfPages;
      state.currentPage = action.payload.currentPage;
    },
    [getCards.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getCard.pending]: (state, action) => {
      state.loading = true;
    },
    [getCard.fulfilled]: (state, action) => {
      state.loading = false;
      state.card = action.payload;
    },
    [getCard.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getCardsByUser.pending]: (state, action) => {
      state.loading = true;
    },
    [getCardsByUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.userCards = action.payload;
    },
    [getCardsByUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [deleteCard.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteCard.fulfilled]: (state, action) => {
      state.loading = false;
      const {
        arg: { id },
      } = action.meta;
      if (id) {
        state.userCards = state.userCards.filter((item) => item._id !== id);
        state.cards = state.cards.filter((item) => item._id !== id);
      }
    },
    [deleteCard.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [updateCard.pending]: (state, action) => {
      state.loading = true;
    },
    [updateCard.fulfilled]: (state, action) => {
      state.loading = false;
      const {
        arg: { id },
      } = action.meta;
      if (id) {
        state.userCards = state.userCards.map((item) =>
          item._id === id ? action.payload : item
        );
        state.cards = state.cards.map((item) =>
          item._id === id ? action.payload : item
        );
      }
    },
    [updateCard.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [likeCard.pending]: (state, action) => {},
    [likeCard.fulfilled]: (state, action) => {
      state.loading = false;
      const {
        arg: { _id },
      } = action.meta;
      if (_id) {
        state.cards = state.cards.map((item) =>
          item._id === _id ? action.payload : item
        );
      }
    },
    [likeCard.rejected]: (state, action) => {
      state.error = action.payload.message;
    },

    [searchCards.pending]: (state, action) => {
      state.loading = true;
    },
    [searchCards.fulfilled]: (state, action) => {
      state.loading = false;
      state.cards = action.payload;
    },
    [searchCards.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getCardsByTag.pending]: (state, action) => {
      state.loading = true;
    },
    [getCardsByTag.fulfilled]: (state, action) => {
      state.loading = false;
      state.tagCards = action.payload;
    },
    [getCardsByTag.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getRelatedCards.pending]: (state, action) => {
      state.loading = true;
    },
    [getRelatedCards.fulfilled]: (state, action) => {
      state.loading = false;
      state.relatedCards = action.payload;
    },
    [getRelatedCards.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export const { setCurrentPage } = cardSlice.actions;

export default cardSlice.reducer;
