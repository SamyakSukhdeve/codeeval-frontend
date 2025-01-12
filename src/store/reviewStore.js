import { create } from "zustand";
import API from "../config/apiCilent";

export const useReviewStore = create((set) => ({
  markdownResponse: ``,
  isLoading: false,
  error: "",

  getReview: async (userCode) => {
    try {
      set({ isLoading: true });
      const response = await API.post("/review", { userCode });
      set({ markdownResponse: response.data, isLoading: false });
    } catch (error) {
      set({ error: error, isLoading: false });
      console.log(error);
    }
  },
}));
