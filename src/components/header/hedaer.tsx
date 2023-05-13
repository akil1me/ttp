import { Container } from "../container";
import { Logo } from "../logo";
import { Nav } from "../nav";

import "./header.scss";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <Container>
        <div className="flex justify-between items-center">
          <Logo />
          <Nav />
        </div>
      </Container>
    </header>
  );
};
