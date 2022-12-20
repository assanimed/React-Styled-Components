import React from "react";
import styled from "styled-components";

import placehoder from "../../../assets/placeholder.png";

const ProductCart = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 10px;
  box-shadow: 2px 3px 4px -3px #040404;
  padding: 20px;
  border-radius: 5px;
  > div {
    flex: 1;
  }
`;

const ProductImage = styled.div`
  width: 100%;
  overflow: hidden;
  max-height: 200px;
`;

const Image = styled.img.attrs(props => ({
  src: (props.thumbnail ?? placehoder),
  alt: "Product Picture",
}))`
  width: 100%;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const ProductTitle = styled.h1`
  font-size: 1.7rem;
  font-weight: bold;
`;

const ProductPrice = styled.p`
  font-size: 1.5rem;
  margin: 0;
`;

const AddToCartButton = styled.button`
  padding: 7px 15px;
  background: transparent;
  font-size: 1.2rem;
  font-style: italic;
  border: 2px solid #c99dc9;
  border-radius: 5px;
  cursor: pointer;

  transition-duration: 0.2s;
  &:hover {
    background: #87a6ed;
    color: #fff;
  }
`;

const ProductSaleFeature = styled.div.attrs({ children: "sale" })`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 2px 10px;
  border-radius: 7px;
  font-family: ROBOTO;
  font-size: 18px;
  background: #191934;
  color: #fff;
`;

const Over = styled.del`
  color: #bdaaaa;
  font-size: 0.8em;
`;

// const

const Product = ({thumbnail, price, discount, title}) => {
  const discountValue = (price * discount) / 100;
  const newPrice = price - discountValue;
  return (
    <ProductCart>
      <ProductImage>
        <Image thumbnail={thumbnail} />
      </ProductImage>
      <ProductInfo>
        <ProductTitle>{title}</ProductTitle>
        <ProductPrice>
          {discount ? (
            <>
              <Over> ${price} </Over> ${newPrice}
            </>
          ) : (
            price
          )}
        </ProductPrice>
        <AddToCartButton>Add to cart</AddToCartButton>
      </ProductInfo>
      {discount && <ProductSaleFeature />}
    </ProductCart>
  );
};

export default Product;
