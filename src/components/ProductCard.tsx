import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

interface ProductProps {
  id: number;
  title: string;
  price: number;
}

export default function ProductCard({ id, title, price }: ProductProps) {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <h3>{title}</h3>
      <p>Ціна: {price} грн</p>
      <button onClick={() => dispatch(addToCart({ id, title, price }))}>
        Додати до кошика
      </button>
    </div>
  );
}
