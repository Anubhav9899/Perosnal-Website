/*import React, { useEffect, useRef } from "react";
import "./Skills.css";

function Skills() {
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills fade-in-section" ref={sectionRef}>
      <h2>Skills</h2>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>CSS & Animations</li>
        <li>Node.js</li>
        <li>DSA</li>
      </ul>
    </section>
  );
}

export default Skills;
*/
import React from "react";
import "./Skills.css"; // Ensure you import the updated CSS file

function Skills() {
  const skillsList = [
    "JavaScript",
    "React",
    "Node.js",
    "CSS",
    "HTML",
    "Git",
    "MERN Stack",
    "DSA",
    "Docker",
  ];

  return (
    <section className="skills">
      <h3 className="skills-heading">My Skills</h3>
      <ul>
        {skillsList.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
