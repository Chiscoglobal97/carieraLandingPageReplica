import { Link } from "react-router";
import { FaCheck } from "react-icons/fa";
import "./Auth.css";

function WelcomePage() {
  const savedUser = localStorage.getItem(
    "registeredUser"
  );

  const registeredUser = savedUser
    ? JSON.parse(savedUser)
    : null;

  return (
    <main className="authPage">
      <section
        className="authSection welcomeSection"
        aria-labelledby="welcomeTitle"
      >
        <div
          className="welcomeIconContainer"
          aria-hidden="true"
        >
          <FaCheck className="welcomeIcon" />
        </div>

        <header className="authHeader">
          <p className="authTag">
            Registration successful
          </p>

          <h1 id="welcomeTitle">
            Welcome
            {registeredUser
              ? `, ${registeredUser.name}`
              : ""}
          </h1>

          <p className="authDescription">
            Your account has been created successfully.
            Please sign in with your email address and
            password to continue to your dashboard.
          </p>
        </header>

        <Link
          className="authButton authButtonLink"
          to="/login"
        >
          Continue to Login
        </Link>

        <Link
          className="homeLink"
          to="/"
        >
          Return to homepage
        </Link>
      </section>
    </main>
  );
}

export default WelcomePage;