import styled from "styled-components";
import Card from "@/components/Card";
import Check from "@/components/icons/Check";
import { RevealWrapper } from "next-reveal";
import TextWrapper from "@/components/TextWrapper";

const list = [
  [
    "Sites institucionais",
    "Lojas virtuais",
    "Blogs",
    "Landing pages de venda",
    "Landing pages de captura",
    "Landing pages de obrigado",
  ],
  [
    "Landing pages de serviço",
    "UI Design para Apps e SaaS",
    "Manutenção, correção e backups de sites",
    "Configuração de área de membros",
    "Checkout personalizado",
  ],
];

const ForgetTheOldWay = () => {
  return (
    <Section>
      <RevealWrapper delay={200}>
        <TextWrapper>
          <h1>Sites, landing pages, lojas virtuais e muito mais</h1>
        </TextWrapper>
      </RevealWrapper>
      <Wrapper>
        <Card maxWidth={1100}>
          <ListWrapper>
            {list.map((item, index) => (
              <ul key={index}>
                {item.map((item, index) => (
                  <RevealWrapper key={index} delay={index * 100}>
                    <li key={index}>
                      <Check />
                      {item}
                    </li>
                  </RevealWrapper>
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
  gap: 40px;
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
