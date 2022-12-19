import React from "react";
import styled from "styled-components";

import NavBar from "./NavBar";
import Cart from "./Cart";

const HeaderWrapper = styled.header`
  background-color: #dfdfdf;
  padding: 5px 20px;
  max-height: 50px;
  display: flex;
  justify-content: space-between;
`;

function Header() {
  return (
    <HeaderWrapper>
      <NavBar />
      <Cart />
    </HeaderWrapper>
  );
}

export default Header;
