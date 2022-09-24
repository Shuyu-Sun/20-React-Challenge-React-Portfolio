import React from "react";
import projects from "../../projects.json";

function Projects(props) {
  <section>
  <div className="center">
    <h1 className="page-header">My Portfolio</h1>
  </div>
  <div>
    <ul className="flex-row mobile-row">
      <li className="padding">
        <Projects projects={projects[0]}></Projects>
      </li>
      <li className="padding">
        <Projects projects={projects[1]}></Projects>
      </li>
    </ul>
    <ul className="flex-row mobile-row">
      <li className="padding">
        <Projects projects={projects[2]}></Projects>
      </li>
      </ul>
      </div>
</section>

}
  
  export default Projects;