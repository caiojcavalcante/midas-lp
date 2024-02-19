import styled from "styled-components";
import { RevealWrapper } from "next-reveal";
import { useRouter } from "next/router";

import Card from "@/components/Card";
import Check from "@/components/icons/Check";
import TextWrapper from "@/components/TextWrapper";

const gold = [
  "Gestão de tráfego pago",
  "Estratégias de anúncios personalizadas",
  "Landing Pages",
  "Otimização de SEO",
  "Reuniões de alinhamento mensais com nossa equipe",
  "Acesso exclusivo ao nosso dashboard ",
  "12 horas de suporte 5 dias na semana",
];

const vip = [
  "Tudo do plano Gold",
  "Estratégias de produção de conteúdo orgânico",
  "Reuniões de alinhamento semanais com nossa equipe",
  "Scripts de venda para sua equipe comercial",
  "Treinamento de vendas mensal para sua equipe",
  "Suporte prioritário 6 dias por semana 24 horas por dia",
];

const ForgetTheOldWay = () => {
  const Router = useRouter();

  const phone = "+5582999542481";
  const text = "Olá, gostaria de assinar o plano Midas Gold.";
  const url = `https://api.whatsapp.com/send?phone=${phone}&text=${text
    .split(" ")
    .join("%20")}`;

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
                <h2>Plano Gold</h2>
                <p>Mudando o jogo com a MIDAS</p>
              </div>
              <div>
                <h3>
                  <b>R$ 1249,99</b> / semana
                </h3>
{/*                 <h4>
                  <b>R$ 7.999,00</b> /mês
                </h4> */}
              </div>
              <ul>
                {gold.map((item, index) => (
                  <li key={index}>
                    <div>
                      <Check />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Button onClick={() => Router.push(url)}>Quero contratar!</Button>
            </ListWrapper>
          </Card>
        </RevealWrapper>
        <RevealWrapper delay={600}>
          <Card maxWidth={1000}>
            <ListWrapper>
              <div>
                <div />
                <h2>Plano Gold VIP</h2>
                <p>Experiência premium para o sucesso</p>
              </div>
              <div>
                <h3>
                  <b>Preço personalizado</b>
                </h3>
              </div>
              <ul>
                {vip.map((item, index) => (
                  <li key={index}>
                    <div>
                      <Check />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Button onClick={() => Router.push(url)}>Quero contratar!</Button>
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
  ul {
    gap: 10px;
  }
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
    p {
      font-size: 1rem;
    }
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
