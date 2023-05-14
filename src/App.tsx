import "./app.scss";
import {
  AboutUs,
  Category,
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
      </main>
    </>
  );
};

export default App;
