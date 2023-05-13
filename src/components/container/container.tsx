import "./container.scss";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
}) => {
  return <div className={`container-custom ${className}`}>{children}</div>;
};
