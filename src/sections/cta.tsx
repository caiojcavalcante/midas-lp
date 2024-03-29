import styled from "styled-components";
import Card from "@/components/Card";
import { RevealWrapper } from "next-reveal";

const Cta = () => {
  return (
    <Section>
      <Wrapper>
        <RevealWrapper delay={400}>
          <Card maxWidth={1100}>
            <Container>
              <h1>Preparado para transformar seu negócio de vez?</h1>
              <p>
                Temos confiança que somos o que está faltando para
                trazer o sucesso para a sua empresa!
              </p>
              <Button>Fale com um especialista</Button>
            </Container>
          </Card>
        </RevealWrapper>
      </Wrapper>
    </Section>
  );
};

const Button = styled.button`
  background-color: #fd0;
  color: #000;
  border: none;
  border-radius: 5px;
  padding: 20px 40px;

  font-weight: bolder;
  font-size: 1rem;
  width: fit-content;
  &:hover {
    cursor: pointer;
    will-change: transform;
    transform: scale(1.1);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
  max-width: 800px;
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const Section = styled.section`
  width: 100%;
  padding: 40px;
  @media (max-width: 900px) {
    padding: 15px;
  }
  box-sizing: border-box;
  display: flex;
  gap: 40px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  h1 {
    padding: 0;
    margin: 0;
    font-size: 3rem;
    font-weight: 700;
    width: 70%;
    @media (max-width: 900px) {
      font-size: 2rem;
      width: 100%;
    }
  }
  @media (min-width: 900px) {
    p {
      width: 70%;
    }
  }
`;
export default Cta;
