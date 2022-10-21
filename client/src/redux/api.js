import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const signIn = (formData) => API.post("/users/signin", formData);
export const signUp = (formData) => API.post("/users/signup", formData);
export const googleSignIn = (result) => API.post("/users/googleSignIn", result);

export const createCard = (cardData) => API.post("/card", cardData);
export const getCards = (page) => API.get(`/card?page=${page}`);
export const getCard = (id) => API.get(`/card/${id}`);
export const deleteCard = (id) => API.delete(`/card/${id}`);
export const updateCard = (updatedCardData, id) =>
  API.patch(`/card/${id}`, updatedCardData);
export const getCardsByUser = (userId) => API.get(`/card/userCards/${userId}`);

export const getCardsBySearch = (searchQuery) =>
  API.get(`/cards/search?searchQuery=${searchQuery}`);

export const getTagCards = (tag) => API.get(`/card/tag/${tag}`);
export const getRelatedCards = (tags) => API.post(`/card/relatedCards`, tags);
export const likeCard = (id) => API.patch(`/card/like/${id}`);
