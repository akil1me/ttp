import { Contact } from "../contact";
import { Container } from "../container";
import { Icons } from "../icons/icons";
import { icons } from "./contacts-data";

import "./contacts.scss";

export const Contacts: React.FC = () => {
  return (
    <section className="contacts">
      <Container>
        <h2 className="contacts__title">our contact</h2>

        <div className="contacts__inner">
          <div className="contacts__content" id="contact">
            <h3 className="contacts__content-title">
              LLC "TOSHKENT PLAST POLIMER"
            </h3>

            <Contact />

            <Icons icons={icons} />
          </div>

          <div className="contacts__content">
            <h3 className="contacts__content-title contacts__content-title2">
              Leave us your suggestions and questions and we will get back to
              you
            </h3>
            <form>
              <textarea
                className="contacts__inputs contacts__textarea"
                name="contacts-textarea"
                placeholder="Write your opinion here"
              ></textarea>

              <div className="flex">
                <input
                  className="contacts__inputs contacts__input"
                  type="text"
                  placeholder="Email/Telfon"
                />
                <button className="contacts__button">›</button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};
