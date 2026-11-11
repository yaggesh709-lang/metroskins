
import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartItem = {
  id: string;
  productId: string;
  name: string;
  price: number;
};

type CartStore = {
  items: CartItem[];

  addItem: (item: CartItem) => void;

  removeItem: (id: string) => void;

  removeAllByProduct: (
    productId: string
  ) => void;
};

export const useCart = create<CartStore>()(
  persist(
    (set) => ({
      items: [],

      addItem: (item) =>
        set((state) => ({
          items: [...state.items, item],
        })),

      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter(
            (item) => item.id !== id
          ),
        })),

      removeAllByProduct: (productId) =>
        set((state) => ({
          items: state.items.filter(
            (item) =>
              item.productId !== productId
          ),
        })),
    }),
    {
      name: "metroskins-cart",
    }
  )
);
