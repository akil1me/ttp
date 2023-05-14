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

const App = () => {
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
