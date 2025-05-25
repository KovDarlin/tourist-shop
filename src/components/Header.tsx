import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export default function Header() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <header>
      <h1>Turist.ua</h1>
      <nav>
        <Link to="/products">Товари</Link>
        <Link to="/cart">Кошик ({cartItems.length})</Link>
        <Link to="/about">Про магазин</Link>
        {!user ? <Link to="/login">Увійти</Link> : <span>👤 {user.username}</span>}
      </nav>
    </header>
  );
}
