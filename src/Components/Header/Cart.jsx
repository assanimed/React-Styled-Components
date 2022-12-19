import React, { useState } from "react";
import styled from "styled-components";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";

const CartButton = styled.button`
  border: 2px solid #818175;
  border-radius: 5px;
  display: flex;
  gap: 5px;
  align-items: center;
  background-color: transparent;
  font-size: 15px;
  font-weight: bold;
  padding: 5px 10px;
  cursor: pointer;
`;

const Counter = styled.div`
  color: #fff;
  background: #000;
  border-radius: 50%;
  padding: 4px 8px;
`;

function Cart() {
  const [empty, Inverse] = useState(true);
  const CartIconStyle = { fontSize: "20px" };
  return (
    <CartButton>
      {empty ? (
        <AiOutlineShoppingCart style={CartIconStyle} />
      ) : (
        <FaShoppingCart style={CartIconStyle} />
      )}
      Cart
      <Counter>0</Counter>
    </CartButton>
  );
}

export default Cart;
