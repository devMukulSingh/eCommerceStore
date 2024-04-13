import { Iproducts } from "@/lib/types";
import CartItem from "@/app/(root)/[storeId]/cart/components/CartItem";
import EmptyCart from "./EmptyCart";

interface CartProps {
  cartProducts: Iproducts[];
}

const Cart: React.FC<CartProps> = ({ cartProducts }) => {
  return (
    <div className="flex flex-col gap-5 min-h-[calc(90vh-27rem)] w-full">
      <h1 className="text-3xl font-semibold">Shopping Cart</h1>
      <hr />
      {cartProducts && cartProducts.length > 0 ? (
        cartProducts &&
        cartProducts.map((cartItem) => (
          <CartItem cartItem={cartItem} key={cartItem.id} />
        ))
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;
