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
  requestProduct: async (id) => {
    const res = await fetch(`${API_URL}/api/products/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    set((state) => ({
      products: state.products.map((product) =>
        product._id === id ? data.data : product
      ),
    }));
    return { success: true, message: "Successfully requested the product" };
  },
  clients: [],
  setClients: (clients) => set({ clients }),
  addClient: async (id, newClient) => {
    if (
      !newClient.firstName ||
      !newClient.lastName ||
      !newClient.mobile ||
      !newClient.dateNeeded
    ) {
      return {
        success: false,
        message: "incomplete fields",
      };
    }
    const resAddClient = await fetch(`${API_URL}/api/clients/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newClient),
    });
    const clientData = await resAddClient.json();
    set((state) => ({ clients: [...state.clients, clientData.data] }));
    return { success: true, message: "Successfully saved new client" };
  },
}));
