// components/Accordion.tsx
import React, { useState } from "react";
import styled from "styled-components";

interface AccordionProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClickAccordion: () => void;
}

const AccordionItem = styled.div`
  color: #ccc;
  text-align: left;
  border: 1px solid #333;
  border-radius: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  padding: 20px;
  width: 100%;
  max-width: 800px;
  box-sizing: border-box;
`;

const AccordionTitle = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  gap: 10px;
  div {
    width: 15px;
  }
`;

const AccordionContent = styled.div<{ open: boolean }>`
  box-sizing: border-box;
  max-height: ${({ open }) => (open ? "1000px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease; /* Use a transition for smooth animation */
  p {
    padding: 20px;
    @media (max-width: 900px) {
      font-size: 0.8rem;
    }
  }
`;

const Accordion: React.FC<AccordionProps> = ({
  title,
  content,
  isOpen,
  onClickAccordion,
}) => {
  return (
    <AccordionItem onClick={onClickAccordion}>
      <AccordionTitle>
        <div>
          <h2>{isOpen ? "-" : "+"}</h2>
        </div>
        <h3>{title}</h3>
      </AccordionTitle>
      <AccordionContent open={isOpen}>
        <p>{content}</p>
      </AccordionContent>
    </AccordionItem>
  );
};

export default Accordion;
