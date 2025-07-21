import { create } from "zustand";
import API_URL from "../src/api";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  fetchProducts: async () => {
    const res = await fetch(`${API_URL}/api/products`);

    const data = await res.json();
    console.log(data);
    set({ products: data.products });
  },
}));
