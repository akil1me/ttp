import { useEffect } from "react";
import "./app.scss";
import {
  AboutUs,
  Category,
  Contacts,
  Footer,
  Header,
  Hero,
  Partners,
  PopularProducts,
  ProdusctsLife,
} from "./components";
import AOS from "aos";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Category />
        <PopularProducts />
        <ProdusctsLife />
        <Partners />
        <Contacts />
      </main>
      <Footer />
    </>
  );
};

export default App;
