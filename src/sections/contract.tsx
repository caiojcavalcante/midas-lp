import styled from "styled-components";
import Card from "@/components/Card";
import Check from "@/components/icons/Check";
import { RevealWrapper } from "next-reveal";
import TextWrapper from "@/components/TextWrapper";

const ForgetTheOldWay = () => {
  return (
    <Section id="planos">
      <RevealWrapper delay={200}>
        <TextWrapper>
          <h1>Cresça e se destaque com os nossos planos</h1>
        </TextWrapper>
      </RevealWrapper>
      <Wrapper>
        <RevealWrapper delay={300}>
          <Card maxWidth={1000}>
            <ListWrapper>
              <div>
                <Tag>MAIS ESCOLHIDO</Tag>
                <h2>Completo</h2>
                <p>Uma demanda por vez</p>
              </div>
              <div>
                <h3>
                  <b>R$ 500,00</b> /semana
                </h3>
                <h4>
                  <b>R$ 2.000,00</b> /mês
                </h4>
              </div>
              <ul>
                <li>
                  <div>
                    <Check />
                  </div>
                  <p>Uma entrega de cada vez</p>
                </li>
                <li>
                  <div>
                    <Check />
                  </div>
                  <p>Solicitações ilimitadas</p>
                </li>
                <li>
                  <div>
                    <Check />
                  </div>
                  <p>Revisões ilimitadas</p>
                </li>
                <li>
                  <div>
                    <Check />
                  </div>
                  <p>Marcas ilimitadas</p>
                </li>
                <li>
                  <div>
                    <Check />
                  </div>
                  <p>Membros de equipe ilimitados</p>
                </li>
              </ul>
              <Button>Quero contratar!</Button>
            </ListWrapper>
          </Card>
        </RevealWrapper>
        <RevealWrapper delay={600}>
          <Card maxWidth={1000}>
            <ListWrapper>
              <div>
                <div />
                <h2>Customizado</h2>
                <p>Full-time</p>
              </div>
              <div>
                <h3>
                  <b>Preço personalizado</b>
                </h3>
              </div>
              <ul>
                <li>
                  <div>
                    <Check />
                  </div>
                  Entrega acelerada
                </li>
                <li>
                  <div>
                    <Check />
                  </div>
                  Reuniões semanais (se necessário)
                </li>
                <li>
                  <div>
                    <Check />
                  </div>
                  Várias solicitações ao mesmo tempo
                </li>
                <li>
                  <div>
                    <Check />
                  </div>
                  Solicitações ilimitadas
                </li>
                <li>
                  <div>
                    <Check />
                  </div>
                  Revisões ilimitadas
                </li>
                <li>
                  <div>
                    <Check />
                  </div>
                  Marcas ilimitadas
                </li>
                <li>
                  <div>
                    <Check />
                  </div>
                  Colaboração em tempo real via WhatsApp / Slack / Discord
                </li>
              </ul>
              <Button>Quero contratar!</Button>
            </ListWrapper>
          </Card>
        </RevealWrapper>
      </Wrapper>
    </Section>
  );
};

const Tag = styled.div`
  background-color: #fd0;
  width: fit-content;
  padding: 5px 10px;
  color: #000;
  border-radius: 5px;
  font-weight: 600;
  font-size: 0.8rem;
`;

const ListWrapper = styled.div`
  
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: space-between;
  height: 100%;
  width: fit-content;
  gap: 40px;
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  h3,
  h4 {
    font-weight: 400;
    font-size: 1rem;
    b {
      font-size: 1.5rem;
    }
  }
  li {
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #fd0;
      width: 18px;
      height: 18px;
      border-radius: 2px;
      svg {
        color: #000;
      }
    }
  }
`;

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

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
  gap: 20px;
  width: 100%;
  max-width: 1000px;
  div {
    display: flex;
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
