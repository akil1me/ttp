import { contacts } from "../contacts/contacts-data";

type ContactProps = {
  className?: string;
};

import "./contact.scss";

export const Contact: React.FC<ContactProps> = ({ className = "" }) => {
  return (
    <ul className={`contacts__list ${className}`}>
      {contacts.map((contact, index) => (
        <li className="contacts__contact contact" key={index}>
          <h4 className="contact__title">{contact.title}</h4>
          <a className="contact__link" href={contact.link} target="_blank">
            {contact.text}
          </a>
        </li>
      ))}
    </ul>
  );
};
