import React, { useState } from "react";
import axios from "axios";

export default function DeleteButton({ onDelete }: any) {
  const [id, setId] = useState("");

  const handleDelete = () => {
    axios.delete(`https://fakestoreapi.com/products/${id}`)
      .then(() => {
        onDelete(Number(id));
        alert("Видалено!");
      });
  };

  return (
    <div>
      <h4>Видалити товар</h4>
      <input value={id} onChange={e => setId(e.target.value)} placeholder="ID товару" type="number" />
      <button onClick={handleDelete}>Видалити</button>
    </div>
  );
}
