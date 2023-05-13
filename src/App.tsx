import "./app.scss";
import { AboutUs, Category, Header, Hero } from "./components";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Category />
      </main>
    </>
  );
};

export default App;
