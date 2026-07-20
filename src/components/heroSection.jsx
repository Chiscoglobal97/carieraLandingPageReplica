import heroBackground from "../assets/heroBackground.jpeg";
import "./HeroSection.css";

function Hero() {
  function handleSearch(event) {
    event.preventDefault();
  }

  return (
    <section
      className="heroSection"
      id="home"
      aria-labelledby="heroTitle"
      style={{
        backgroundImage: `linear-gradient(
          rgba(24, 22, 45, 0.7),
          rgba(24, 22, 45, 0.7)
        ), url(${heroBackground})`,
      }}
    >
      <div className="heroContent">
        <h1 className="heroTitle" id="heroTitle">
          Cariera Documentation
        </h1>

        <p className="heroDescription">
         Search through our knowledge base or submit a ticket to get the answers you need.
        </p>

        <form
          className="heroSearchForm"
          role="search"
          onSubmit={handleSearch}
        >
          <label
            className="visuallyHidden"
            htmlFor="documentationSearch"
          >
            Search...
          </label>

          <input
            className="heroSearchInput"
            id="documentationSearch"
            name="search"
            type="search"
            placeholder="Search..."
          />

        </form>

        
      </div>
    </section>
  );
}

export default Hero;