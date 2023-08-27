import styled from "styled-components";
import MailIcon from "@/components/icons/Mail";
import HeartIcon from "@/components/icons/Heart";
import RedoIcon from "@/components/icons/Redo";

const Benefits = () => {
  return (
    <Section>
      <h1>O job que você quer no momento que você precisa</h1>
      <BenefitWrapper>
        <Benefit>
          <MailIcon />
          <p>Assine um de nossos planos e solicite quantas demandas quiser</p>
        </Benefit>
        <Benefit>
          <HeartIcon />
          <p>Entrega finalizada em poucos dias, de segunda a sexta</p>
        </Benefit>
        <Benefit>
          <RedoIcon />
          <p>Revisamos tudo até você ficar 100% satisfeito</p>
        </Benefit>
      </BenefitWrapper>
    </Section>
  );
};

const BenefitWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  gap: 40px;
  @media (max-width: 900px) {
    flex-direction: column;
  }
  margin: 0;
`;

const Benefit = styled.div`
  width: 100%;
  svg {
    width: 50px;
    color: #fd0;
  }
  p {
    font-size: 1.2rem;
    font-weight: 500;
    max-width: 300px;
  }
`;

const Section = styled.section`
  color: #faf6f7;
  width: 100%;
  padding: 130px;
  gap: 80px;
  @media (max-width: 900px) {
    padding: 40px;
  }
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  h1 {
    font-size: 3rem;
    font-weight: 700;
    width: 70%;
    @media (max-width: 900px) {
      font-size: 2.5rem;
      width: 100%;
    }
  }
`;
export default Benefits;
