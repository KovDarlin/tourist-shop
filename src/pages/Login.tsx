import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim()) {
      dispatch(login({ username }));
      navigate("/products");
    }
  };

  return (
    <div className="container">
      <h2>Вхід</h2>
      <input
        type="text"
        placeholder="Введіть ім’я"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Увійти</button>
    </div>
  );
}
