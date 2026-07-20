import {
  FaDribbble,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import "./Footer.css";

function Footer() {
  return (
    <div className="footerWrapper">
      <section
        className="supportTicketSection"
        aria-labelledby="supportTicketTitle"
      >
        <div className="supportTicketContainer">
          <h2
            className="supportTicketTitle"
            id="supportTicketTitle"
          >
            Feel free to open a support ticket with your purchase code if you
            need any further help.
          </h2>

          <a
            className="supportTicketButton"
            href="#supportTicket"
          >
            Support Ticket
          </a>
        </div>
      </section>

      <footer className="footerSection">
        <div className="footerMainContainer">
          <div className="footerMainContent">
            <section className="footerAbout">
              <h2 className="footerHeading">
                About Cariera
              </h2>

              <p className="footerDescription">
                Cariera is a complete Job Board theme for WordPress theme and
                does not require extra plugins.
              </p>
            </section>

            <nav
              className="footerSupportLinks"
              aria-label="Footer support links"
            >
              <h2 className="footerHeading">
                Support Links
              </h2>

              <ul className="footerLinkList">
                <li className="footerLinkItem">
                  <a
                    className="footerLink"
                    href="#liveDemo"
                  >
                    Live Demo
                  </a>
                </li>

                <li className="footerLinkItem">
                  <a
                    className="footerLink"
                    href="#themePage"
                  >
                    Theme Page
                  </a>
                </li>

                <li className="footerLinkItem">
                  <a
                    className="footerLink"
                    href="#supportSite"
                  >
                    Support Site
                  </a>
                </li>

                <li className="footerLinkItem">
                  <a
                    className="footerLink"
                    href="#facebookGroup"
                  >
                    Facebook Group
                  </a>
                </li>
              </ul>
            </nav>

            <section className="footerSocialLinks">
              <h2 className="footerHeading">
                Social Links
              </h2>

              <div className="socialIcons">
                <a
                  className="socialLink"
                  href="#facebook"
                  aria-label="Facebook"
                >
                  <FaFacebookSquare aria-hidden="true" />
                </a>

                <a
                  className="socialLink"
                  href="#linkedin"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn aria-hidden="true" />
                </a>

                <a
                  className="socialLink"
                  href="#instagram"
                  aria-label="Instagram"
                >
                  <FaInstagram aria-hidden="true" />
                </a>

                <a
                  className="socialLink"
                  href="#dribbble"
                  aria-label="Dribbble"
                >
                  <FaDribbble aria-hidden="true" />
                </a>

                <a
                  className="socialLink"
                  href="#youtube"
                  abel="YouTube"aria-l
                >
                  <FaYoutube aria-hidden="true" />
                </a>
              </div>
            </section>
          </div>
        </div>

        <div className="footerBottomSection">
          <div className="footerBottomContainer">
            <p className="footerPolicies">
              <a
                className="footerBottomLink"
                href="#privacyPolicy"
              >
                Privacy Policy
              </a>

              <span className="footerSeparator">
                /
              </span>

              <a
                className="footerBottomLink"
                href="#termsOfUse"
              >
                Terms of use
              </a>
            </p>

            <p className="footerCopyright">
              © 2020 Gnodesign.com. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;