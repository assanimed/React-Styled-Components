import React from "react";
import styled from "styled-components";
import Product from "./Product";

const ProductGrid = styled.div`
  padding: 30px 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

const Products = () => {
  return (
    <ProductGrid>
      <Product discount={null} price={80} />
      <Product discount={10} price={20} />
      <Product discount={50} price={50} />
      <Product discount={null} price={40} />
    </ProductGrid>
  );
};

export default Products;
