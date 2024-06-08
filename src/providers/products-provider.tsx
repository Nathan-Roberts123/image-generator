"use client";
import { Product } from "@/types";
import React, { createContext } from "react";

export const ProductContext = createContext<Product[] | null>(null);

const ProductsProvider = ({
  children,
  products,
}: {
  children: React.ReactNode;
  products: Product[];
}) => {
  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductsProvider;
