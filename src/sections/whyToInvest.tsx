import styled from "styled-components";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const WhyToInvest = () => {
  const graphPath = "/graph.svg";
  const displaySize = useMediaQuery("(min-width: 768px)");
  const ref = useRef(null);

  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsShown(true);
        } else {
          setIsShown(false);
        }
      });
    });
    ref.current && observer.observe(ref.current); //oh god how I hate html elements
    return () =>
      (ref.current && observer.unobserve(ref.current)) || console.log("fail");
  }, []);
  return (
    <Wrapper displaySize={displaySize}>
      <h1>Crescimento</h1>
      <div>
        <Image fill src={graphPath} alt={""} />
        {isShown && <div ref={ref} />}
        <h2>Cresça o faturamento de sua empresa junto de quem sabe.</h2>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div<{ displaySize: boolean }>`
  padding: 2rem 0 2rem 0;
  scroll-snap-align: start;
  height: 50rem;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: ${(p) => p.theme.primary};
  h1 {
    color: ${(p) => p.theme.alt};
  }
  h2 {
    color: ${(p) => p.theme.secondary};
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    position: relative;
    background-color: ${(p) => p.theme.primary};
    width: 100%;
    height: 40rem;
    margin: 2rem;
    div {
      background-color: ${(p) => p.theme.primary};
      animation: slideIn 5s ease-in-out infinite;
      @keyframes slideIn {
        0% {
          width: 100%;
        }
        100% {
          width: 0%;
        }
      }
    }
  }
`;

export default WhyToInvest;
