import { FiBriefcase } from "react-icons/fi";
import ArticleCard from "./ArticleCard";
import "./AdditionalProductsSection.css";

function AdditionalProductsSection() {
  return (
    <section
      className="additionalProductsSection"
      aria-labelledby="additionalProductsTitle"
    >
      <div className="additionalProductsContainer">
        <header className="additionalProductsHeader">
          <h2
            className="additionalProductsTitle"
            id="additionalProductsTitle"
          >
            Additional Products
          </h2>
        </header>

        <div className="additionalProductsGrid">
          <ArticleCard
            icon={FiBriefcase}
            cardTitle="Cariera Events"
            articleOne="Plugin Intro"
            articleTwo="Getting Started"
            articleThree="Main Settings"
          />

          <ArticleCard
            icon={FiBriefcase}
            cardTitle="Essentials for WPJM"
            articleOne="LinkedIn Applications"
            articleTwo="Invite Candidate to Apply"
            articleThree="Twitter Applications"
            articleFour="Plugin Activation"
          />
        </div>
      </div>
    </section>
  );
}

export default AdditionalProductsSection;