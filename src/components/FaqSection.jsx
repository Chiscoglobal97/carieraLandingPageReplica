import FaqItem from "./FaqItem";
import "./FaqSection.css";

function FaqSection() {
  return (
    <section
      className="faqSection"
      aria-labelledby="faqSectionTitle"
    >
      <div className="faqContainer">
        <header className="faqSectionHeader">
          <h2
            className="faqSectionTitle"
            id="faqSectionTitle"
          >
            Frequently Asked Questions
          </h2>
        </header>

        <div className="faqList">
          <FaqItem
            question="Customizations"
            answer="The theme can be customized through its available settings and supported customization options."
          />

          <FaqItem
            question="The theme is missing the styles.css stylesheet"
            answer="This usually happens when the complete download package is uploaded instead of the installable theme file."
          />

          <FaqItem
            question="How many websites can i use the theme on?"
            answer="The number of websites depends on the licence purchased for the theme."
          />

          <FaqItem
            question="Changelog"
            answer="The changelog contains details about theme updates, improvements, fixes and newly added features."
          />
        </div>
      </div>
    </section>
  );
}

export default FaqSection;