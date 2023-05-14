type IconsType = {
  img: string;
  link: string;
};

type IconsProps = {
  icons: IconsType[];
};

export const Icons: React.FC<IconsProps> = ({ icons }) => {
  return (
    <ul className="contacts__icons icons">
      {icons.map((icon, index) => (
        <li className="icons__item" key={index}>
          <a className="icons__link" href={icon.link}>
            <img className="icons__img" src={icon.img} alt={icon.link} />
          </a>
        </li>
      ))}
    </ul>
  );
};
