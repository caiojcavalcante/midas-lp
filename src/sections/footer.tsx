import DarkLogo from "@/components/DarkLogo";
import styled from "styled-components";

const Footer = () => {
  return (
    <Section>
      <DarkLogo />
      <p>Telefone: (82)99954-2481 | E-mail: contato@midasltda.co</p>
      <p>© 2023 Midas. Todos os direitos reservados.</p>
    </Section>
  );
};

const Section = styled.section`
  /* font-family: "Gotham", sans-serif; */
  color: #000;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fd0;
  /* background-color: #faf6f7; */

  gap: 20px;
  padding: 50px 20px;
  box-sizing: border-box;
  text-align: center;

  p {
    font-weight: 600;
  }
`;
export default Footer;
