import React, { useState } from "react";
import { checkPassword, validateEmail } from "../../utils/helper";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email) || !name) {
      setErrorMessage("Email or username is invalid");
      return;
    }
    if (!checkPassword(message)) {
      setErrorMessage(`Thank you for getting in touch! : ${name}`);
      return;
    }
    alert(`Hello ${name}`);

    setName("");
    setMessage("");
    setEmail("");
  };

  return (
    <section>
      <div className="center">
        <h2 className="page-header">Contact Me</h2>
      </div>
      <div>
        <form id="contact-form">
          <div>
            <label htmlFor="Name">Name:</label>
            <br></br>
            <input
              type="text"
              defaultValue={name}
              onBlur={handleInputChange}
              name="Name"
            />
          </div>
          <div>
            <label htmlFor="email">Email address:</label>
            <br></br>
            <input
              type="email"
              defaultValue={email}
              name="email"
              onBlur={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="Message">Message:</label>
            <br></br>
            <textarea
              name="Message"
              defaultValue={message}
              onBlur={handleInputChange}
              rows="5"
            />
          </div>
          <button type="submit" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;
