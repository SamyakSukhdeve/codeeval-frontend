import { create } from "zustand";
import API from "../config/apiCilent";

export const useReviewStore = create((set) => ({
  markdownResponse: ``,
  isLoading: false,

  getReview: async (userCode) => {
    try {
      set({ isLoading: true, markdownResponse: "" });
      const response = await API.post("/review", { userCode });
      set({ markdownResponse: response.data, isLoading: false });
    } catch (e) {
      set({ isLoading: false });
      throw e;
    }
  },
}));
