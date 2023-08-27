import Router from "next/router";
import styled from "styled-components";
import { RevealWrapper } from "next-reveal";

const Banner = () => {
  return (
    <Section>
      <TextWrapper>
        <RevealWrapper delay={200}>
          <h1>
            Uma fábrica de Landing pages de <b>alta conversão</b>
          </h1>
        </RevealWrapper>
        <RevealWrapper delay={400}>
          <p>Marketing na era digital on-demmand</p>
        </RevealWrapper>
      </TextWrapper>
      <RevealWrapper delay={600}>
        <Button>Ver planos</Button>
      </RevealWrapper>
    </Section>
  );
};

const Button = styled.button`
  color: #000;
  background-color: ${(p) => p.theme.alt};
  padding: 20px 60px;
  border-radius: 7px;
  border: none;
  font-weight: 700;
  font-size: 1.2rem;
  &:hover {
    cursor: pointer;
    will-change: transform;
    transform: scale(1.1);
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  h1 {
    font-size: 3.5rem;
    margin: 0;
    b {
      color: ${(p) => p.theme.alt};
    }
  }
`;

const Section = styled.section`
  color: #faf6f7;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: start;
  text-align: center;
  padding: 200px 0;
  @media (max-width: 900px) {
    padding: 100px 0;
  }

  font-family: "Montserrat", sans-serif;

  /* background: radial-gradient(circle at 2.01% 20.98%, #ff8008, transparent 100%),
    radial-gradient(circle at 97.99% 53.05%, #ffc837, transparent 100%),
    radial-gradient(circle at 50% 50%, #ffe817, #ffe817 100%); */
`;
export default Banner;
