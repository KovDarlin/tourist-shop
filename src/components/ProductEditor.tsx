import React, { useState } from "react";
import axios from "axios";

export default function ProductEditor({ onUpdate }: any) {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios.put(`https://fakestoreapi.com/products/${id}`, {
      title,
      price
    }).then(res => {
      onUpdate({ id: Number(id), title, price });
      alert("Оновлено!");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Оновити товар</h4>
      <input value={id} onChange={e => setId(e.target.value)} placeholder="ID товару" type="number" />
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Нова назва" />
      <input value={price} onChange={e => setPrice(e.target.value)} placeholder="Нова ціна" type="number" />
      <button type="submit">Оновити</button>
    </form>
  );
}
