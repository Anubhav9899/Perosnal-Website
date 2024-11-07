import React, { useEffect } from "react";
import "./Cursor.css";

function Cursor() {
  useEffect(() => {
    // Create the custom cursor element
    const cursor = document.createElement("div");
    cursor.id = "cursor";
    document.body.appendChild(cursor);

    // Handle mouse movement to position cursor and trailing elements
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Position the main cursor directly at the mouse position
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;

      // Create a trailing element at the current mouse position
      const trail = document.createElement("div");
      trail.className = "trail";
      trail.style.left = `${mouseX}px`;
      trail.style.top = `${mouseY}px`;
      document.body.appendChild(trail);

      // Fade out and remove the trail element after 500ms
      setTimeout(() => {
        trail.style.opacity = 0;
        trail.style.transform = "scale(0.5)";
        setTimeout(() => {
          if (trail.parentElement) {
            trail.remove();
          }
        }, 800); // Remove after fade-out
      }, 10);
    };

    // Add the mousemove event listener
    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup function to remove the cursor and listener on unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.body.removeChild(cursor);
    };
  }, []);

  return null; // This component doesn't render anything visible directly
}

export default Cursor;
