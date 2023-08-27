import Card from "@/components/Card";
import styled from "styled-components";

export default function Phrase() {
  return (
    <Section>
      <Card>
        <h2>Não deixe de fazer o que precisa ser feito por falta de tempo.</h2>
        <p>
          A execução não precisa ser um gargalo na sua empresa, criamos esse
          produto para quem não tem tempo a perder e não quer abrir mão da
          qualidade.
        </p>
      </Card>
    </Section>
  );
}

const Section = styled.section`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 20px;
    h2 {
        font-size: 2rem;
    }
`;