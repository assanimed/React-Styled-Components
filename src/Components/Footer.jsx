import styled from "styled-components";

const FooterWrapper = styled.footer`
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  color: #fff;
  background: #5a0639;
  font-size: 1.2rem;
`;

const Link = styled.a`
  color: #e6beeb;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <span>Copyright &copy; Ofppt Shop {new Date().getFullYear()}</span>
      <span>
        Build with 💥
        <Link href="https://styled-components.com/"> styled-components</Link>
      </span>
    </FooterWrapper>
  );
};

export default Footer;
