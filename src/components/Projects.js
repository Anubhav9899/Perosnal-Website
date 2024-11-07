import React, { useState } from "react";
import "./Projects.css"; // Ensure you import the updated CSS file
import netflixGif from "../image/netflix.gif";
import project2Gif from "../image/project2.gif";
import logoColor from "../image/logo-color.png";
import Project4 from "../image/Project4.jpg";

function Projects() {
  // State to track which project description is expanded
  const [expandedProject, setExpandedProject] = useState(null);

  const projectsList = [
    {
      title: "Netflix Clone",
      description:
        "A Netflix Clone project showcasing advanced web development skills, including responsive design, user authentication, and efficient content streaming. Built with HTML, CSS, REACT and RESTful APIs to create a seamless, engaging user experience.",
      fullDescription:
        "Built a Netflix clone using HTML, CSS, JavaScript, and React to replicate the popular streaming service’s user interface with precision and attention to detail. The application features a dynamic movie carousel powered by real-time data, a fully responsive design, and interactive elements such as hover effects, search functionality, and filtering options for a seamless viewing experience. Integrated React for efficient component management and state handling, using React Router for smooth page transitions and navigation. This project showcases my ability to implement complex UI/UX patterns, optimize performance, and handle real-world challenges in building scalable, data-driven web applications with modern technologies.",
      image: netflixGif, // Update with the correct path to the image or GIF
    },
    {
      title: "Personal Wesite",
      description:
        "Developed a responsive web application using HTML, CSS, JavaScript, and React and Docker with a modern design and interactive components.",
      fullDescription:
        "Built a dynamic web application using HTML, CSS, JavaScript, and React, featuring a modern, responsive design with interactive elements to enhance user experience. Designed a clean, intuitive interface for seamless navigation, optimized load times, and ensured accessibility across devices. Integrated React hooks for state management and used modular components to support scalability and maintainability. This project highlights my front-end development expertise, responsive design skills, and ability to create scalable, engaging applications that perform smoothly on both desktop and mobile platforms.",
      image: project2Gif,
    },
    {
      title: "Codeclarify",
      description:
        "Developed CodeClarify, a MERN-based Q&A platform for programming discussions, with features like JWT authentication, real-time notifications, and a voting system.",
      fullDescription:
        "Created CodeClarify using the MERN stack (MongoDB, Express, React, and Node.js). The platform enables users to ask programming-related questions, provide answers, comment, and upvote or downvote content. It includes a reputation system based on user activity, profile management, real-time notifications, and content moderation through an admin panel. Key features include JWT-based authentication, structured discussions with markdown support for code formatting, badges, and a search functionality via tags. This project highlights my expertise in full-stack development, user engagement, and secure, scalable application design.",
      image: logoColor,
    },
    {
      title: "Image Classifier",
      description:
        "Developed an image classifier using CNNs with TensorFlow and Keras to distinguish between dogs and cats with high accuracy.",
      fullDescription:
        "Built an image classifier leveraging Convolutional Neural Networks (CNN) with TensorFlow and Keras, achieving precise differentiation between dogs and cats. Applied data augmentation techniques like rotation, flipping, and zooming to enhance the dataset and prevent overfitting. Utilized Pandas and NumPy for efficient data handling and preprocessing, ensuring robust model training and evaluation. Techniques such as early stopping and dropout layers were implemented to optimize performance, showcasing my skills in machine learning, deep learning, and the deployment of accurate classification models.",
      image: Project4,
    },
  ];

  const toggleReadMore = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section className="projects">
      <h2 className="projects-heading">My Projects</h2>
      <div className="project-cards-container">
        {projectsList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <p>
              {project.description}
              {expandedProject === index && (
                <span className="full-description">
                  {project.fullDescription}
                </span>
              )}
            </p>
            <button
              className="toggle-button"
              onClick={() => toggleReadMore(index)}
            >
              {expandedProject === index ? "Read Less" : "Read More"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
