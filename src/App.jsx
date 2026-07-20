
import  Header from "./components/header"
import HeroSection from "./components/heroSection"
import ArticlesSection from "./components/ArticlesSection";
import AdditionalProductsSection from "./components/AdditionalProductsSection"
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import "./App.css";


function App() {
  return (
    <div className="app">
      <header>
        <Header />
      </header>

      <main>
        <HeroSection />
         <ArticlesSection />
         <AdditionalProductsSection />
         <FaqSection />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;