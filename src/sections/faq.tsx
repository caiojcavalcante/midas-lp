import styled from "styled-components";
import Card from "@/components/Card";
import Logo from "@/components/Logo";
import Check from "@/components/icons/Check";
import Block from "@/components/icons/Block";
import Accordion from "@/components/Accordion";
import { useState } from "react";

const questions = [
  {
    title: "Não seria melhor eu contratar um web designer CLT?",
    content:
      "Você já deve ter notado que está cada vez mais difícil encontrar bons profissionais de nível sênior que querem trabalhar como CLT. Além disso, existe toda aquela burocracia e riscos trabalhistas. De acordo com o Glassdor, o salário médio de um designer sênior hoje é de R$ 9.300 /mês. Por isso, nós somos uma excelente solução para empresas que querem ter um web designer sênior disponível, por um preço justo e sem burocracias, com apenas alguns cliques. Experimente.",
  },
  {
    title: "Como funciona o limite de requisições?",
    content:
      "Você pode pedir quantas demandas quiser enquanto a sua assinatura estiver ativa. A única regra é que nós iremos trabalhar em uma de cada vez.",
  },
  {
    title: "Qual é o prazo de entrega dos projetos?",
    content:
      "O prazo varia de acordo com tipo de projeto, briefing e complexidade. Projetos maiores, que exigem mais tempo, serão divididos em pequenas entregas. Exemplo: uma estrutura completa de landing pages para um lançamento será dividida em etapas menores. Você receberá uma atualização ou entrega de acordo com o avanço.",
  },
  {
    title: "Quem são os designers?",
    content:
      "Você pode ficar surpreso com isso, mas somos uma agência de uma pessoa só. Isso significa que você trabalhará direto comigo, o fundador.",
  },
//   {
//     title: "",
//     content: "",
//   },
];

const Faq = () => {
  const [currentAccordion, setCurrentAccordion] = useState<number | null>(null);
  return (
    <Section>
      <h1>Dúvidas frequentes</h1>
      <Wrapper>
        {questions.map((question, index) => (
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
