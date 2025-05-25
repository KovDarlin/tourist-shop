import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductForm from "../components/ProductForm";
import ProductEditor from "../components/ProductEditor";
import DeleteButton from "../components/DeleteButton";

const initialProducts = [
  { id: 1, title: "Палатка", price: 5350 },
  { id: 2, title: "Кросівки", price: 1200 },
  { id: 3, title: "Рюкзак", price: 800 },
  { id: 4, title: "Карабін", price: 550 },
  { id: 5, title: "Мотузка", price: 1000 },
  { id: 6, title: "Спальник", price: 2500 },
];

export default function Products() {
  const [products, setProducts] = useState(initialProducts);

  const handleAddProduct = (newProduct: any) => {
    setProducts([...products, { ...newProduct, id: Date.now() }]);
  };

  const handleUpdateProduct = (updatedProduct: any) => {
    setProducts(products.map(p => p.id === updatedProduct.id ? updatedProduct : p));
  };

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div className="container">
      <h2>Список товарів</h2>

      <ProductForm onAdd={handleAddProduct} />
      <ProductEditor onUpdate={handleUpdateProduct} />
      <DeleteButton onDelete={handleDeleteProduct} />

      <div className="product-list">
        {products.map(p => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
}
