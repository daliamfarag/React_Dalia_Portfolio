import React, { useState } from "react";
import {
  FaGithubAlt,
  FaLinkedinIn,
  FaSlack,
  FaMobileAlt,
} from "react-icons/fa";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { validateEmail } from "../../utils/helpers";
import { Row, Col } from "react-bootstrap";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log("Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
  };

  const [showText, setShowText] = useState(false);
  const handleMouseEnter = (e) => {
    // e.target.style.background = "grey";
    setShowText(true);
  };
  const handleMouseLeave = (e) => {
    // e.target.style.background = "maroon";
    setShowText(false);
  };

  const [showText1, setShowText1] = useState(false);
  const handleMouseEnter1 = (e) => {
    // e.target.style.background = "grey";
    setShowText1(true);
  };
  const handleMouseLeave1 = (e) => {
    // e.target.style.background = "maroon";
    setShowText1(false);
  };

  return (
    <section id="contact-me">
       <Row className="row">
       <Col lg={2} md={12} sm={12}>
        <h1 id="contact-title">Contact me</h1>
      </Col>
      <Col lg={7} md={10} sm={12}>
      <div id="form">
        <form id="contact-form" onSubmit={handleSubmit}>
          <div>
            <label className="contact-label" htmlFor="name">
              Name:
            </label>
            <input
              id="input"
              type="text"
              name="name"
              defaultValue={name}
              onBlur={handleChange}
              placeholder="first and last name"
            />
          </div>
          <div>
            <label className="contact-label" htmlFor="email">
              Email address:
            </label>
            <input
              id="input"
              type="email"
              name="email"
              defaultValue={email}
              onBlur={handleChange}
              placeholder="email address"
            />
          </div>
          <div>
            <label className="contact-label" htmlFor="message">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              defaultValue={message}
              onBlur={handleChange}
              placeholder="your message"
            />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button id="button" type="submit">
            Submit
          </button>
        </form>
      </div>
      </Col>

      <Col lg={3} md={12} sm={12}>
        <div id="phone">
        <a
          onMouseEnter={handleMouseEnter1}
          onMouseLeave={handleMouseLeave1}
          className="button"
        >
          <a href="#contact">
            <BsFillEnvelopeFill size="50" />
          </a>
        </a>
        {showText1 && <p id="message2">daliaf@gmail.com</p>}

        <a
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="button"
        >
          <a href="#contact">
            <FaMobileAlt size="50" />
          </a>
        </a>
        {showText && <p id="message2">+1-123-45678</p>}
        </div>
      </Col>
      </Row>
    </section>
  );
}

export default ContactForm;
