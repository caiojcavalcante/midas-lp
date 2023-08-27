import styled from "styled-components";
import Card from "@/components/Card";
import Logo from "@/components/Logo";
import Check from "@/components/icons/Check";
import Block from "@/components/icons/Block";

const ForgetTheOldWay = () => {
  return (
    <Section>
      <h1>Sites, landing pages, lojas virtuais e muito mais</h1>
      <Wrapper>
        <Card maxWidth={1100}>
          <ListWrapper>
            <ul>
              <li>
                <Check />
                <p>Sites institucionais</p>
              </li>
              <li>
                <Check />
                <p>Lojas virtuais</p>
              </li>
              <li>
                <Check />
                <p>Blogs</p>
              </li>
              <li>
                <Check />
                <p>Landing pages de venda</p>
              </li>
              <li>
                <Check />
                <p>Landing pages de captura</p>
              </li>
              <li>
                <Check />
                <p>Landing pages de obrigado</p>
              </li>
            </ul>
            <ul>
              <li>
                <Check />
                <p>Landing pages de serviço</p>
              </li>
              <li>
                <Check />
                <p>UI Design para Apps e SaaS</p>
              </li>
              <li>
                <Check />
                <p>Manutenção, correção e backups de sites</p>
              </li>
              <li>
                <Check />
                <p>Configuração de área de membros</p>
              </li>
              <li>
                <Check />
                <p>Checkout personalizado</p>
              </li>
            </ul>
          </ListWrapper>
        </Card>
      </Wrapper>
    </Section>
  );
};

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
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
