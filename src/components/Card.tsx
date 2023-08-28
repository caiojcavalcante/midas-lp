import styled from "styled-components";

export default function Card({
  children,
  maxWidth = 400,
  borderless = false,
}: {
  children: React.ReactNode;
  maxWidth?: number;
  borderless?: boolean;
}) {
  return (
    <Container borderless={borderless} maxWidth={maxWidth}>
      {children}
    </Container>
  );
}

const Container = styled.div<{ borderless: boolean; maxWidth: number }>`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
  }

  gap: 40px;

  background-color: #000;
  color: #faf7f6;
  width: 100%;
  ${(p) => `max-width: ${p.maxWidth}px;`}
  box-sizing: border-box;
  border: ${(p) => (p.borderless ? "none" : "1px solid #333;")};
  border-radius: 1rem;
  padding: 30px;
  ${(p) =>
    p.borderless
      ? ""
      : "background: linear-gradient(10deg, #000 0%, #111 100%);"}

  h3 {
    font-size: 1.5rem;
    text-align: left;
  }
  ul {
    display: flex;
    flex-direction: column;
    font-size: 1.1rem;
    padding: 0;
    margin: 0;
    gap: 30px;
    list-style: none;
    text-align: left;
    max-width: 350px;
    svg {
      width: 15px !important;
      height: 15px !important;
      stroke-width: 3;
    }
    li {
      padding: 0;
      margin: 0;
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
  svg {
    color: #fd0;
    ${(p) => (p.borderless ? "color: red;" : "color: #fd0;")}
  }
`;
