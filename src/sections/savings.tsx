import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import CountUp from "react-countup";
import { RevealWrapper } from "next-reveal";
import { useMediaQuery } from "@/components/useMediaQuery";

const Savings = () => {
  const [counterOn, setCounterOn] = useState(false);

  const [counter, setCounter] = useState(0);

  const precoDesigner = 2508.43;
  const precoCopy = 3556.62;
  const precoGestor = 2583.85;
  const precoFront = 9094.35;
  const precoTotal = precoDesigner + precoCopy + precoGestor + precoFront;

  const [font, setFont] = useState(false);

  const isNonMobileScreen = useMediaQuery(1000);

  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCounterOn(true);
        } else {
          setCounterOn(false);
          setCounter(0);
        }
      });
    });
    ref.current && observer.observe(ref.current); //oh god how I hate html elements
    return () => (ref.current && observer.unobserve(ref.current)) || undefined;
  }, []);

  return (
    <Section id="economia" ref={ref} isNonMobileScreen={isNonMobileScreen}>
      <RevealWrapper>
        <h2>
          Com a midas, você <mark>ECONOMIZA</mark>
        </h2>
        <div>
          {counterOn && (
            <h2>
              <mark>
                <>
                  R${" "}
                  <CountUp
                    delay={0}
                    duration={1.2}
                    start={0}
                    end={precoDesigner}
                    decimals={2}
                    decimal=","
                    separator=" "
                    onEnd={() => setCounter(counter + 1)}
                    onStart={() => setFont(false)}
                  />
                </>
              </mark>
              {" um designer"}
            </h2>
          )}
          {counter > 0 && (
            <h2>
              <mark>
                {counterOn && (
                  <>
                    R${" "}
                    <CountUp
                      delay={0}
                      duration={1.2}
                      start={0}
                      end={precoCopy}
                      decimals={2}
                      decimal=","
                      separator=" "
                      onEnd={() => setCounter(counter + 1)}
                    />
                  </>
                )}
              </mark>
              {" um copywritter"}
            </h2>
          )}
          {counter > 1 && (
            <h2>
              <mark>
                {counterOn && (
                  <>
                    R${" "}
                    <CountUp
                      delay={0}
                      duration={1.2}
                      start={0}
                      end={precoGestor}
                      decimals={2}
                      decimal=","
                      separator=" "
                      onEnd={() => setCounter(counter + 1)}
                    />
                  </>
                )}
              </mark>
              {" um gestor de tráfego"}
            </h2>
          )}
          {counter > 2 && (
            <h2>
              <mark>
                {counterOn && (
                  <>
                    R${" "}
                    <CountUp
                      delay={0}
                      duration={1.2}
                      start={0}
                      end={precoFront}
                      decimals={2}
                      decimal=","
                      separator=" "
                      onEnd={() => setCounter(counter + 1)}
                    />
                  </>
                )}
              </mark>
              {" um desenvolvedor de software front-end"}
            </h2>
          )}
          {counterOn && (
            <Price>
              <mark>
                {"R$ "}
                <CountUp
                  delay={0}
                  duration={4.8}
                  start={0}
                  end={precoTotal}
                  decimals={2}
                  decimal=","
                  separator=" "
                  onEnd={() => setFont(true)}
                />
              </mark>
              {font && isNonMobileScreen && <p>por mês</p>}
            </Price>
          )}
          {font && <h3>(fonte: Glassdoor)</h3>}
        </div>
      </RevealWrapper>
    </Section>
  );
};
const Section = styled.section<{ isNonMobileScreen: boolean }>`
  
  background-color: ${(p) => p.theme.primary};
  height: 680px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  mark {
    background-color: ${(p) => p.theme.primary};
    color: ${(p) => p.theme.alt};
  }
  h1 {
    margin: 0;
    font-size: ${(p) => (p.isNonMobileScreen ? "7rem" : "13vw")};
    color: ${(p) => p.theme.text};
  }
  h2 {
    font-size: 1.4rem;
    margin: 1rem 0 1rem 0;
    color: ${(p) => p.theme.text};
  }
  div {
    width: 100%;
    max-width: 50rem;
    padding: 4rem 0 4rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    text-align: left;
  }
  h3 {
    margin: 0;
    color: ${(p) => p.theme.main};
  }
  p {
    font-size: 1rem;
    margin-top: 6rem;
  }
`;
const Price = styled.h1`
  display: flex;
`;

export default Savings;
