import styled from "styled-components";
import Router from "next/router";

const Experience = () => {
  return (
    <Section>
      <h1>Nossos Trabalhos</h1>
      <Wrapper>
        <Container>
          <h3>Desenvolvimento de site e landing pages</h3>
          <p>Nutricionista esportivo</p>
          <ImagePlaceholder onClick={() => Router.push("/")} />
        </Container>
        <Container>
          <h3>Desenvolvimento de site institucional</h3>
          <p>Instituto ney simões</p>
          <ImagePlaceholder onClick={() => Router.push("/")} />
        </Container>
        <Container>
          <h3>Desenvolvimento de site institucional</h3>
          <p>Pif</p>
          <ImagePlaceholder onClick={() => Router.push("/")} />
        </Container>
        <Container>
          <h3>Desenvolvimento de site institucional</h3>
          <p>Poupar Investir Frutificar</p>
          <ImagePlaceholder onClick={() => Router.push("/")} />
        </Container>
        <Container>
          <h3>Desenvolvimento de site de e-commerce</h3>
          <p>Lif Brand</p>
          <ImagePlaceholder onClick={() => Router.push("/")} />
        </Container>
        <Container>
          <h3>Desenvolvimento de landing page</h3>
          <p>Mentora e empreendedora Noemy</p>
          <ImagePlaceholder onClick={() => Router.push("/")} />
        </Container>
      </Wrapper>
    </Section>
  );
};

const ImagePlaceholder = styled.div`
  width: 100%;
  aspect-ratio: 1;
  background-color: #fd0;
  box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  border-radius: 15px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  h3,
  p {
    margin: 0;
  }
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Section = styled.section`
  color: #faf6f7;
  width: 100%;
  padding: 40px;
  @media (max-width: 900px) {
    padding: 20px;
  }
  @media (min-width: 1100px) {
    padding: 20px 100px;
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
      font-size: 2.5rem;
      width: 100%;
    }
  }
`;
export default Experience;
