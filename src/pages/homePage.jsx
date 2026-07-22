import Header from "../components/header";
import HeroSection from "../components/heroSection";
import ArticlesSection from "../components/articlesSection";
import AdditionalProductsSection from "../components/AdditionalProductsSection";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div className="app">
      <Header />

      <main>
        <HeroSection />
        <ArticlesSection />
        <AdditionalProductsSection />
        <FaqSection />
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;