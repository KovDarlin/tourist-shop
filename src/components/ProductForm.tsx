import React, { useState } from "react";
import axios from "axios";

export default function ProductForm({ onAdd }: any) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios.post("https://fakestoreapi.com/products", {
      title,
      price
    }).then(res => {
      onAdd(res.data);
      alert("Товар додано!");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Додати товар</h4>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Назва" />
      <input value={price} onChange={e => setPrice(e.target.value)} placeholder="Ціна" type="number" />
      <button type="submit">Додати</button>
    </form>
  );
}
