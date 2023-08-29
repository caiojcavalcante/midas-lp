import Link from "next/link";
import styled from "styled-components";

type NavLinkProps = {
  to: string;
  children: React.ReactNode;
};

const NavLink = ({ to, children }: NavLinkProps) => {
  return (
    <div>
      <StyledLink  href={to}>{children}</StyledLink>
    </div>
  );
};
const StyledLink = styled(Link)`
  
  font-weight: 500;
  font-size: 1.2rem;
  text-decoration: none;
`;

export default NavLink;
