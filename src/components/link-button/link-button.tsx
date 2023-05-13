import { Link } from "react-scroll";

import "./link-button.scss";

interface LinkButtonProps {
  link: string;
  children: React.ReactNode;
  className?: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  link,
  children,
  className,
}) => {
  return (
    <Link
      className={`link-button ${className}`}
      to={`${link}`}
      spy={true}
      smooth={true}
      offset={50}
      duration={1000}
    >
      <span className="link-button__text">{children}</span>
    </Link>
  );
};
