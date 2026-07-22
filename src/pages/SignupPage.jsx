import { useState } from "react";
import {
  Link,
  useNavigate,
} from "react-router";
import "./Auth.css";

function SignupPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    state: "",
    country: "",
    age: "",
    postalCode: "",
    sex: "",
    password: "",
    confirmPassword: "",
  });

  const [formError, setFormError] = useState("");

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setFormError("");
  }

  function handleSignup(event) {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setFormError(
        "The passwords you entered do not match."
      );

      return;
    }

    if (formData.password.length < 6) {
      setFormError(
        "Your password must contain at least 6 characters."
      );

      return;
    }

    const accountDetails = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      state: formData.state,
      country: formData.country,
      age: formData.age,
      postalCode: formData.postalCode,
      sex: formData.sex,
      password: formData.password,
    };

    localStorage.setItem(
      "registeredUser",
      JSON.stringify(accountDetails)
    );

    navigate("/welcome");
  }

  return (
    <main className="authPage">
      <section
        className="authSection signupSection"
        aria-labelledby="signupTitle"
      >
        <header className="authHeader">
          <p className="authTag">
            Create an account
          </p>

          <h1 id="signupTitle">
            Sign up to continue
          </h1>

          <p className="authDescription">
            Enter your personal information to create your
            account.
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
          className="authForm signupForm"
          onSubmit={handleSignup}
        >
          <div className="formGroup">
            <label htmlFor="name">
              Full name
            </label>

            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              autoComplete="name"
              required
            />
          </div>

          <div className="formGroup">
            <label htmlFor="signupEmail">
              Email address
            </label>

            <input
              id="signupEmail"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email address"
              autoComplete="email"
              required
            />
          </div>

          <div className="formGroup">
            <label htmlFor="phone">
              Phone number
            </label>

            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
              autoComplete="tel"
              required
            />
          </div>

          <div className="formGroup">
            <label htmlFor="age">
              Age
            </label>

            <input
              id="age"
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              placeholder="Enter your age"
              min="18"
              max="120"
              required
            />
          </div>

          <div className="formGroup formGroupFull">
            <label htmlFor="address">
              Residential address
            </label>

            <input
              id="address"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Enter your residential address"
              autoComplete="street-address"
              required
            />
          </div>

          <div className="formGroup">
            <label htmlFor="state">
              State
            </label>

            <input
              id="state"
              type="text"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              placeholder="Enter your state"
              autoComplete="address-level1"
              required
            />
          </div>

          <div className="formGroup">
            <label htmlFor="country">
              Country
            </label>

            <input
              id="country"
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              placeholder="Enter your country"
              autoComplete="country-name"
              required
            />
          </div>

          <div className="formGroup">
            <label htmlFor="postalCode">
              Postal code
            </label>

            <input
              id="postalCode"
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleInputChange}
              placeholder="Enter your postal code"
              autoComplete="postal-code"
              required
            />
          </div>

          <div className="formGroup">
            <label htmlFor="sex">
              Sex
            </label>

            <select
              id="sex"
              name="sex"
              value={formData.sex}
              onChange={handleInputChange}
              required
            >
              <option value="">
                Select an option
              </option>

              <option value="Male">
                Male
              </option>

              <option value="Female">
                Female
              </option>

              <option value="Prefer not to say">
                Prefer not to say
              </option>
            </select>
          </div>

          <div className="formGroup">
            <label htmlFor="signupPassword">
              Password
            </label>

            <input
              id="signupPassword"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Create a password"
              autoComplete="new-password"
              minLength="6"
              required
            />
          </div>

          <div className="formGroup">
            <label htmlFor="confirmPassword">
              Confirm password
            </label>

            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Enter your password again"
              autoComplete="new-password"
              minLength="6"
              required
            />
          </div>

          <button
            className="authButton formGroupFull"
            type="submit"
          >
            Sign Up
          </button>
        </form>

        <p className="authAlternative">
          Already have an account?{" "}
          <Link to="/login">
            Sign in
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

export default SignupPage;