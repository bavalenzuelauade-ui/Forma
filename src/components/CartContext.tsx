'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';

interface CartContextType {
  items: string[];
  add: (item: string) => void;
  remove: (item: string) => void;
  has: (item: string) => boolean;
  clear: () => void;
}

const CartContext = createContext<CartContextType>({
  items: [],
  add: () => {},
  remove: () => {},
  has: () => false,
  clear: () => {},
});

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<string[]>([]);

  function add(item: string) {
    setItems(prev => prev.includes(item) ? prev : [...prev, item]);
  }

  function remove(item: string) {
    setItems(prev => prev.filter(i => i !== item));
  }

  function has(item: string) {
    return items.includes(item);
  }

  function clear() {
    setItems([]);
  }

  return (
    <CartContext.Provider value={{ items, add, remove, has, clear }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
