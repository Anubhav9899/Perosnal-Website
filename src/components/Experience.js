import React from "react";
import "./Experience.css";
import resume from "../resume/Anubhav_Resume_2.pdf"; // Correct relative path to the PDF file

function Experience() {
  const experiences = [
    {
      role: "Web Development Intern",
      company: "Nullclass",
      description:
        "Proposed and maintained responsive web applications using HTML, CSS, and JavaScript, achieving a 90% reduction in load times across multiple pages. Optimized front-end performance with asynchronous JavaScript and minification, enhancing user engagement and compatibility across devices. Collaborated on RESTful API implementation with Node.js and Express, boosting data exchange efficiency by 99% to improve application performance.",
    },
    {
      role: "Machine Learning Intern",
      company: "Encryptix",
      description:
        "Fine-tuned machine learning models using TensorFlow and Scikit-learn, achieving a 90% accuracy improvement across multiple projects. Conducted data preprocessing and feature engineering on large datasets to optimize model training and evaluation. Leveraged hyperparameter tuning and evaluation metrics, enhancing algorithm performance by 10% and demonstrating proficiency in deploying efficient, high-accuracy models.",
    },
  ];

  return (
    <section className="experience">
      <h2 className="experience-heading" data-text="My Experience">
        My Experience
      </h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div className="experience-item" key={index}>
            <h3>{exp.role}</h3>
            <h4>{exp.company}</h4>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
      <a href={resume} download className="resume-button">
        Download My Resume
      </a>
    </section>
  );
}

export default Experience;
