import {useContext} from "react";
import styled from "styled-components";
import Product from "./Product";
import Context from "../../../Context/ProductContext";


const ProductGrid = styled.div`
  padding: 30px 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

const Products = () => {

  const {products} = useContext(Context);



  return (
    <>
    <ProductGrid>
      {
        products.map(product => <Product {...product} />)
      }
    </ProductGrid>
    </>
  );
};

export default Products;
