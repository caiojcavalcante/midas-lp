import { useRouter } from "next/router";
import styled from "styled-components";
import { RevealWrapper } from "next-reveal";

const Banner = () => {
  const Router = useRouter();
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
        <RevealWrapper delay={600}>
          <Button onClick={() => Router.push("/new-page#planos")}>
            Ver planos
          </Button>
        </RevealWrapper>
      </TextWrapper>
    </Section>
  );
};

const Button = styled.button`
  color: #000;
  background-color: #fd0;
  padding: 20px 60px;
  border-radius: 7px;
  border: none;
  font-weight: 700;
  font-size: 1.2rem;
  z-index: 100;
  &:hover {
    cursor: pointer;
    will-change: transform;
    transform: scale(1.1);
  }
`;

const TextWrapper = styled.div`
  
  z-index: 2;
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  gap: 20px;
  h1 {
    font-size: 3.5rem;
    margin: 0;
    b {
      color: ${(p) => p.theme.alt};
    }
  }
`;

const Section = styled.section`
  background: radial-gradient(circle at 1.96% 83.05%, #f09819, transparent 33%),
    radial-gradient(circle at 88.6% 27.82%, #ffdd00, transparent 47%),
    radial-gradient(circle at 34.52% 17.94%, #ffce2e, transparent 49%),
    radial-gradient(circle at 55.89% 79.8%, #4a400b, transparent 55%),
    radial-gradient(circle at 50% 50%, #030201, #030201 100%);
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
  height: 65vh;
  display: flex;
  align-items: center;
  justify-content: center;

  

  &:before {
    content: "";
    z-index: 1;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(3, 2, 1, 1) 0%,
      rgba(3, 2, 1, 0) 100%
    );
  }
`;
export default Banner;
