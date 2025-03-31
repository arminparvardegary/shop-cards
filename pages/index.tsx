import Header from "./components/Header";
import React, { useState } from "react";
import Card from "./components/ShopCard";

interface Product {
  id: number;
  image: string;
  title: string;
  quantity?: number;
}

export default function Home() {
  const productsData: Product[] = [
    { id: 1, image: "../image/download-3.jpg", title: "Knurled Spitfire" },
    { id: 2, image: "../image/download-5.jpg", title: "Diamond Cut Spitfire" },
    { id: 3, image: "../image/download-6.jpg", title: "Kingston" },
  ];

  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  const removeCart = (id: number) => {
    setSelectedProducts((prevSelectedProducts) =>
      prevSelectedProducts.filter((item) => item.id !== id)
    );
  };

  const addToCart = (product: Product) => {
    setSelectedProducts((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <div className="bg-white">
      <Header
        selectedData={selectedProducts.map((product) => ({
          id: product.id,
          title: product.title,
          image: product.image,
          quantity: product.quantity || 1, // Ensure quantity is always defined
        }))}
        onRemoveCart={removeCart}
      />
      <main className="flex justify-center items-center flex-wrap gap-1 mt-10 mb-10">
        {productsData.map((product) => (
          <Card
            key={product.id}
            image={product.image}
            title={product.title}
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </main>
    </div>
  );
}
