import styled from "styled-components";
import Card from "@/components/Card";
import Check from "@/components/icons/Check";
import { RevealWrapper } from "next-reveal";
import TextWrapper from "@/components/TextWrapper";

const list = [
  [
    "Gestão de tráfego pago",
    "Criação de estratégias de marketing personalizadas especificamente para você",
    "Copys e roteiros validados e personalizados para cada um dos nossos cliente",
    "Landing pages de venda",
    "Páginas de captura",
  ],
  [
    "Páginas de obrigado",
    "Lojas virtuais",
    "Sites institucionais",
    "Manutenção, correção e backups de sites",
  ],
];

const ForgetTheOldWay = () => {
  return (
    <Section>
      <RevealWrapper delay={200}>
        <TextWrapper>
          <h1>
            Gestão dos seus anúncios, Copies, Roteiros de vendas, Sites e muito
            mais
          </h1>
        </TextWrapper>
      </RevealWrapper>
      <Wrapper>
        <Card maxWidth={1100}>
          <ListWrapper>
            {list.map((item, index) => (
              <ul key={index}>
                {item.map((item, index) => (
                  <li key={index}>
                    <RevealWrapper key={index} delay={100}>
                      <Check />
                      {item}
                    </RevealWrapper>
                  </li>
                ))}
              </ul>
            ))}
          </ListWrapper>
        </Card>
      </Wrapper>
    </Section>
  );
};

const ListWrapper = styled.div`
  display: grid;
  box-sizing: border-box;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
  gap: 30px;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
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
