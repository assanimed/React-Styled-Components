import React from "react";
import styled from "styled-components";

const Navigation = styled.nav`
  display: flex;
  gap: 30px;
  align-items: center;
`;

const HyperLink = styled.a`
  text-decoration: none;
`;

const BrandLink = styled(HyperLink).attrs({ href: "/" })`
  font-size: 25px;
`;

const UList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 15px;
  & > li {
    float: left;
    & > a {
      padding: 5px;
    }
  }
`;

function NavBar() {
  return (
    <Navigation>
      <BrandLink>Start Boostrap</BrandLink>
      <UList>
        <li>
          <HyperLink href="">Home</HyperLink>
        </li>
        <li>
          <HyperLink href="">About</HyperLink>
        </li>
        <li>
          <HyperLink href="">Shop</HyperLink>
        </li>
      </UList>
    </Navigation>
  );
}

export default NavBar;
