import styled from "styled-components";
import Card from "@/components/Card";
import Logo from "@/components/Logo";
import Check from "@/components/icons/Check";
import Block from "@/components/icons/Block";
import { RevealWrapper } from "next-reveal";
import TextWrapper from "@/components/TextWrapper";

const ForgetTheOldWay = () => {
  return (
    <Section>
      <RevealWrapper delay={500}>
        <TextWrapper>
          <h1>Esqueça a forma antiga e burocrática de contratar</h1>
          <p>
            É tão bom que você não vai querer procurar serviços de web design em
            outro lugar.
          </p>
        </TextWrapper>
      </RevealWrapper>
      <Wrapper>
        <RevealWrapper delay={600}>
          <Card>
            <Logo />
            <h3>Midas Web Design</h3>
            <ul>
              <li>
                <Check />
                <p>Escolha um plano e assine rapidamente.</p>
              </li>
              <li>
                <Check />
                <p>Peça quantos jobs quiser.</p>
              </li>
              <li>
                <Check />
                <p>Trabalharemos em um de cada vez.</p>
              </li>
              <li>
                <Check />
                <p>Acompanhe o progresso através de um app interno.</p>
              </li>
              <li>
                <Check />
                <p>Receba seus jobs no prazo e com uma entrega ultra rápida.</p>
              </li>
              <li>
                <Check />
                <p>Sem multas ou acordos trabalhistas.</p>
              </li>
            </ul>
          </Card>
        </RevealWrapper>
        <RevealWrapper delay={900}>
          <Card borderless>
            <Block />
            <h3>Freelancer/CLT</h3>
            <ul>
              <li>
                <Block />
                <p>Burocracias para contratar.</p>
              </li>
              <li>
                <Block />
                <p>Falta de compromisso e qualidade nas entregas.</p>
              </li>
              <li>
                <Block />
                <p>Reuniões diárias e/ou semanais para explicar.</p>
              </li>
              <li>
                <Block />
                <p>Difícil de encontrar bons profissionais.</p>
              </li>
              <li>
                <Block />
                <p>FGTS, INSS, 13º, férias e provisões.</p>
              </li>
              <li>
                <Block />
                <p>Riscos trabalhistas.</p>
              </li>
              <li>
                <Block />
                <p>Burocracia para demitir.</p>
              </li>
            </ul>
          </Card>
        </RevealWrapper>
      </Wrapper>
    </Section>
  );
};

const Wrapper = styled.div`
  display: flex;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const Section = styled.section`
  color: #faf6f7;
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
      font-size: 2.5rem;
      width: 100%;
    }
  }
`;
export default ForgetTheOldWay;
