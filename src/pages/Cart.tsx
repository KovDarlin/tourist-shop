import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { removeFromCart } from '../store/cartSlice';

export default function Cart() {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h2>Ваш кошик</h2>
      {items.length === 0 ? (
        <p>Кошик порожній</p>
      ) : (
        items.map(item => (
          <div key={item.id}>
            {item.title} — {item.price} грн
            <button onClick={() => dispatch(removeFromCart(item.id))}>❌</button>
          </div>
        ))
      )}
    </div>
  );
}
