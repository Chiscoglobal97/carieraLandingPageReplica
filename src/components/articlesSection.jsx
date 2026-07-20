import {
  FiBriefcase,
  FiCheckCircle,
  FiLifeBuoy,
  FiMap,
  FiTool,
} from "react-icons/fi";

import {
  FaCog,
  FaRegLightbulb,
} from "react-icons/fa";

import ArticleCard from "./ArticleCard";
import "./ArticlesSection.css";

function ArticlesSection() {
  return (
    <section
      className="articlesSection"
      aria-labelledby="articlesSectionTitle"
    >
      <div className="articlesContainer">
        <header className="articlesSectionHeader">
          <h2
            className="articlesSectionTitle"
            id="articlesSectionTitle"
          >
            Cariera Articles
          </h2>
        </header>

        <div className="articlesColumns">
          <div className="articlesColumn">
            <ArticleCard
              icon={FiCheckCircle}
              cardTitle="Get Started"
              articleOne="Theme Installation"
              articleTwo="Theme Setup & Import"
              articleThree="Manual/Automatic Updates"
              articleFour="Translations"
              articleFive="Main Settings & Options"
              articleSix="Theme Activation"
            />

            <ArticleCard
              icon={FiLifeBuoy}
              cardTitle="Guides"
              articleOne="User Dashboard Menus"
              articleTwo="Change single listing layout"
              articleThree="Update Core Plugins"
              articleFour="Change logo"
              articleFive="Editing the User Extra Menu"
              articleSix="Company Filtering by Active Jobs"
              viewAllCount="7"
            />
          </div>

          <div className="articlesColumn">
            <ArticleCard
              icon={FaCog}
              cardTitle="Cariera Core"
              articleOne="User Login & Registration"
              articleTwo="Core Emails"
              articleThree="reCAPTCHA"
              articleFour="Promotional Packages"
              articleFive="Notifications"
              articleSix="Notification Webhooks"
              viewAllCount="9"
            />

            <ArticleCard
              icon={FiTool}
              cardTitle="Troubleshoot"
              articleOne="Using WPBakery after version 1.4.5?"
              articleTwo="Before Updating to 1.4.8"
              articleThree="Listing Search elements after 1.7.5"
              articleFour="404 Page Not Found"
            />
          </div>

          <div className="articlesColumn">
            <ArticleCard
              icon={FiBriefcase}
              cardTitle="WP Job Manager"
              articleOne="WC Paid Listings"
              articleTwo="Premium Compatible Plugins"
              articleThree="Edit Submission Fields"
              articleFour="Extension Compatibility"
            />

            <ArticleCard
              icon={FiMap}
              cardTitle="Maps"
              articleOne="Maps Providers"
              articleTwo="Creating a Google API Key"
              articleThree="Adding the Google API Key"
              articleFour="Mapbox API"
              articleFive="Listings not shown in Map"
            />

            <ArticleCard
              icon={FaRegLightbulb}
              cardTitle="Other"
              articleOne="Required licenses key for plugins?"
              articleTwo="Theme customizations"
              articleThree="How to change the Sender Name in Outgoing WordPress Emails"
              articleFour="Google Job Search Integration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArticlesSection;