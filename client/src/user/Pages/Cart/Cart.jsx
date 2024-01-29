import "./Cart.css";
import { TiTick } from "react-icons/ti";
import { ImCancelCircle } from "react-icons/im";
import { useState } from "react";

const img =
  "https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3Jpc3R3YXRjaHxlbnwwfHwwfHx8MA%3D%3D";
const Cart = () => {
  let [quantity, setQuantity] = useState(1);
  if (quantity <= 0) {
    setQuantity(1);
  }

  return (
    <>
      <div className="cart-container">
        <div className="cart-part-1">
          <div className="cart-part-1-card">
            <div className="cart-part-1-card-img">
              <img src={img} alt="cart-img" height="180px" width="100%" />
            </div>
            <div className="cart-part-1-card-details">
              <ImCancelCircle className="cart-cancel" />

              <h1>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dignissimos suscipit hujgv oibvg
              </h1>
              <div>
                <p>Ref 1699925</p>
                <p>
                  {" "}
                  <TiTick color="green" fontSize="1.8rem" />
                  Click & collect
                </p>
                <p>
                  {" "}
                  <TiTick color="green" fontSize="1.8rem" /> Home delivery
                </p>
              </div>
              <div className="cart-quantity-handler">
                <span style={{ fontSize: "1.5rem", fontWeight: "700" }}>
                  Qty :{" "}
                </span>
                <h1>
                  <span
                    style={{ borderRight: "1px solid black" }}
                    onClick={() => {
                      setQuantity(quantity--);
                    }}
                  >
                    -
                  </span>{" "}
                  {quantity}{" "}
                  <span
                    style={{ borderLeft: "1px solid black " }}
                    onClick={() => {
                      setQuantity(quantity++);
                    }}
                  >
                    +
                  </span>
                </h1>
                <p style={{ color: "red", textDecoration: "line-through" }}>
                  {" "}
                  $ 45500
                </p>
                <p style={{ color: "green" }}> $ 856655</p>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-part-2">
          <div className="cart-part-2-container">
            <div className="cart-part-2-item">
              <p>Bag Total</p>
              <p>$60051</p>
            </div>
            <div className="cart-part-2-item">
              <p>Processing Fee</p>
              <p>FREE</p>
            </div>
            <div className="cart-part-2-item">
              <p>Bag Subtotal</p>
              <p>$546565</p>
            </div>
            <div className="cart-part-2-item">
              <p>Product Discount</p>
              <p>$546565</p>
            </div>
            <div className="cart-part-2-item cart-total">
              <h1>
                Total <br /> $63783{" "}
              </h1>
              <button>Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
