import React from "react";

function About() {
  return (
    <section>
      <div className="center" id="about">
        <h1 className="page-header">About Me</h1>
      </div>
      <div className="center">
        <img
          src={require("../../assets/images/avatar.png")}
          alt="about-me"
          className="photo"
        />
      </div>
      <div>
        <p>
          I graduated from Parsons School of Design, the first national ranking
          among design schools (QS World Rankings, 2021), with a Masters in
          Fashion Management. Based in New York City. I have enrolled in
          Columbia University's Engineering Coding Boot Camp to transition as a
          Full-Stack Software Engineer. With newly developed skills in
          JavaScript, CSS, React.js, and responsive web design. I am known as an
          innovative problem solver passionate about developing apps, with a
          focus on mobile-first design and development. With each project, my
          aim is to best engage my audience for an impactful user experience. I
          have three years of experience working in fashion advertising. I
          worked for GRAZIA fashion magazine for 2 years, and another year for
          one of China’s most influential fashion influencers. I recently worked
          as an e-commerce intern in New York City. From my work experience, I
          have a solid understanding of advertising and marketing client
          services, PR and/or marketing strategy trend analysis, social media
          engagement, and computer coding languages. I am passionate and
          determined to explore career opportunities in data analytics and
          client service. I am an effective communicator, responsible,
          proactive, detail and results-oriented, willing to solve problems both
          in life and at work! If you have any questions, please feel free to
          contact me at suns216@newschool.edu. Thank you for visiting my
          website!
        </p>
      </div>
    </section>
  );
}

export default About;
