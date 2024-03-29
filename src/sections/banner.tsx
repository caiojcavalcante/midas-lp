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
            Seu sucesso começa aqui e agora com a <b>MIDAS!</b>
          </h1>
        </RevealWrapper>
        <RevealWrapper delay={400}>
          <p>Vamos além do ouro 🚀</p>
        </RevealWrapper>
        <RevealWrapper delay={600}>
          <Button onClick={() => Router.push("/#planos")}>Ver planos</Button>
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
    @media (max-width: 900px) {
      font-size: 3rem;
    }
    margin: 0;
    b {
      color: ${(p) => p.theme.alt};
    }
  }
  p {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

const Section = styled.section`
  background: radial-gradient(circle at 1.96% 83.05%, #f09819, transparent 33%),
    radial-gradient(circle at 88.6% 27.82%, #ffaa00, transparent 47%),
    radial-gradient(circle at 34.52% 17.94%, #ffaa2e, transparent 49%),
    radial-gradient(circle at 55.89% 79.8%, #4a300b, transparent 55%),
    radial-gradient(circle at 50% 50%, #030201, #030201 100%);

  //animate background
  background-size: 3000px 3000px;

  animation: identifier 20s ease infinite;

  @keyframes identifier {
    0% {
      background-position: 0% 0%;
    }
    20% {
      background-position: 0% 100%;
    }
    40% {
      background-position: 100% 0%;
    }
    60% {
      background-position: 100% 100%;
    }
    100% {
      background-position: 0% 0%;
    }
  }

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
