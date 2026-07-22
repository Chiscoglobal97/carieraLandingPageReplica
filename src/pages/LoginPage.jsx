import { useState } from "react";
import {
  Link,
  useNavigate,
} from "react-router";

import { FaUserCircle } from "react-icons/fa";

import {
  FiEye,
  FiEyeOff,
} from "react-icons/fi";

import "./Auth.css";

function LoginPage() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [formError, setFormError] = useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  function handleInputChange(event) {
    const { name, value } = event.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });

    setFormError("");
  }

  function handleLogin(event) {
    event.preventDefault();

    const savedUser = localStorage.getItem(
      "registeredUser"
    );

    if (!savedUser) {
      setFormError(
        "No registered account was found. Please create an account first."
      );

      return;
    }

    let registeredUser;

    try {
      registeredUser = JSON.parse(savedUser);
    } catch {
      setFormError(
        "Your saved account information could not be read. Please sign up again."
      );

      return;
    }

    const enteredEmail = loginData.email
      .trim()
      .toLowerCase();

    const registeredEmail = registeredUser.email
      .trim()
      .toLowerCase();

    const emailMatches =
      enteredEmail === registeredEmail;

    const passwordMatches =
      loginData.password === registeredUser.password;

    if (!emailMatches || !passwordMatches) {
      setFormError(
        "The email address or password you entered is incorrect."
      );

      return;
    }

    const loggedInUser = {
      name: registeredUser.name,
      email: registeredUser.email,
    };

    localStorage.setItem(
      "loggedInUser",
      JSON.stringify(loggedInUser)
    );

    setFormError("");

    navigate("/dashboard");
  }

  return (
    <main className="authPage loginPage">
      <section
        className="authSection loginSection"
        aria-labelledby="loginTitle"
      >
        <div
          className="userIconContainer"
          aria-hidden="true"
        >
          <FaUserCircle className="userIcon" />
        </div>

        <header className="authHeader">
          <p className="authTag">
            Welcome back
          </p>

          <h1 id="loginTitle">
            Sign in to your account
          </h1>

          <p className="authDescription">
            Enter the email address and password you used
            when creating your account.
          </p>
        </header>

        {formError ? (
          <p
            className="formError"
            role="alert"
          >
            {formError}
          </p>
        ) : null}

        <form
          className="authForm"
          onSubmit={handleLogin}
        >
          <div className="formGroup">
            <label htmlFor="loginEmail">
              Email address
            </label>

            <input
              id="loginEmail"
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleInputChange}
              placeholder="Enter your email address"
              autoComplete="email"
              required
            />
          </div>

          <div className="formGroup">
            <label htmlFor="loginPassword">
              Password
            </label>

            <div className="passwordInputWrapper">
              <input
                id="loginPassword"
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                value={loginData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                autoComplete="current-password"
                required
              />

              <button
                className="passwordToggleButton"
                type="button"
                aria-label={
                  showPassword
                    ? "Hide password"
                    : "Show password"
                }
                aria-pressed={showPassword}
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? (
                  <FiEyeOff aria-hidden="true" />
                ) : (
                  <FiEye aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          <button
            className="authButton"
            type="submit"
          >
            Login
          </button>
        </form>

        <p className="authAlternative">
          Don&apos;t have an account?{" "}
          <Link to="/signup">
            Sign up
          </Link>
        </p>

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

export default LoginPage;