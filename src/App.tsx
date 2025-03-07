import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import { useLayoutContext } from "./contexts/selected_layout";
import Footer from "./components/Footer";

function App() {
  const { layout } = useLayoutContext();
  return (
    <>
      <div className="flex min-h-screen flex-col items-center py-10 bg-dark">
        <Header />

        <div className="w-full max-w-[1265px] px-3 lg:px-0">
          {layout === "About" && <About />}
          {layout === "Contact" && <Contact />}
          {layout === "Portfolio" && <Portfolio />}
          {layout === "About" && <Footer />}
        </div>
      </div>
    </>
  );
}

export default App;
