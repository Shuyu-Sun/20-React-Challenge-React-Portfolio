import React from "react";

function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/Shuyu-Sun">
        <img
          src={require("../../assets/images/github-logo.png")}
          alt="Github"
          className="logo"
        ></img>
      </a>

      <a href="https://www.linkedin.com/in/stella-sun-40779a103/">
        <img
          src={require("../../assets/images/linkedin-logo.png")}
          alt="LinkedIn"
          className="logo"
        ></img>
      </a>
      <h4>(&copy;) 2022 by Stella Sun</h4>
    </div>
  );
}

export default Footer;
