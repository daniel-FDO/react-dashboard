import React from "react";

import Stat from "../components/Stat";
import Project from "../components/Projects";
import Learningstatus from "../components/Learningstatus";

export const Homepage = () => {
  const name = "Daniel";
  return (
    <div>
      <main id="home">
        <p>Welcome back</p>
        <h1>Hi there, I'm {name} 👋🤞</h1>
        <p>I am learning React and building my development skills.</p>
        <div className="stats">
          <Stat title="Projects" value={2} />
          <Stat title="Weeks completed" value={4} />
          <Stat title="Current focus" value="React" />
        </div>
        <section>
          <h2>My Projects</h2>
          <p>A collection of projects I have built while learning</p>
        </section>
        <div className="projects">
          <Project
            title="Developer portfolio"
            description="A responsive and interactive portfolio showcasing my skills and project"
          />
          <Project
            title="Task tracker"
            description="A persistent browser task application with local storage"
          />
        </div>
        <Learningstatus />
      </main>
    </div>
  );
};
