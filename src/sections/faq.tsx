import styled from "styled-components";
import Accordion from "@/components/Accordion";
import { useState } from "react";
import { RevealWrapper } from "next-reveal";
import TextWrapper from "@/components/TextWrapper";

const questions = [
  {
    title: "Como a MIDAS pode me ajudar a crescer online?",
    content:
      "Nós somos especialistas em transformar presença digital em resultados tangíveis. Com estratégias sob medida, desde otimização de SEO até campanhas de redes sociais, nossa abordagem focada no cliente impulsiona o crescimento de forma consistente e duradoura.",
  },
  {
    title: "Por que devo escolher a MIDAS em vez de outras agências?",
    content:
      "Na MIDAS nós temos um lema “Seu sucesso é nosso trabalho!”, por isso vamos além do óbvio. Nossa equipe apaixonada por marketing digital está sempre à frente das últimas tendências, garantindo que suas estratégias sejam inovadoras e eficazes. Não entregamos apenas resultados, entregamos uma parceria que se traduz em sucesso.",
  },
  {
    title: "Qual é a diferença entre o Plano Ouro e o Plano Ouro VIP?",
    content:
      "Enquanto o Plano Ouro oferece uma base sólida de serviços essenciais, o Plano Ouro VIP é a experiência definitiva para quem busca uma presença online exuberante. Com gestão personalizada, acesso a tendências e suporte prioritário, você estará no topo do mercado digital.",
  },
  {
    title:
      "Como posso saber se os serviços da MIDAS estão funcionando para o meu negócio?",
    content:
      "A MIDAS é transparente e mensurável. Com o acesso ao dashboard, relatórios detalhados e monitoramento contínuo, você verá os resultados se transformarem em números reais. Nossa abordagem interativa significa que ajustamos as estratégias conforme necessário, garantindo que você alcance o sucesso desejado.",
  },
];

const Faq = () => {
  const [currentAccordion, setCurrentAccordion] = useState<number | null>(null);
  return (
    <Section id="faq">
      <RevealWrapper delay={300}>
        <TextWrapper>
          <h1>Dúvidas frequentes</h1>
        </TextWrapper>
      </RevealWrapper>
      <Wrapper>
        {questions.map((question, index) => (
          <RevealWrapper key={index} delay={index * 100 + 300}>
            <Accordion
              key={index}
              title={question.title}
              content={question.content}
              isOpen={currentAccordion === index}
              onClickAccordion={() => {
                if (currentAccordion !== index) setCurrentAccordion(index);
                else setCurrentAccordion(null);
              }}
            />
          </RevealWrapper>
        ))}
      </Wrapper>
    </Section>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 0px;
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
  justify-content: center;
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
export default Faq;
