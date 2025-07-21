import { create } from "zustand";
import API_URL from "../src/api";

export const useProductStore = create((set) => ({
  products: [],
  fetchProducts: async () => {
    const res = await fetch(`${API_URL}/api/products`);
    const data = res.json();
    set({ products: data.products });
  },
}));
