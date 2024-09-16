import React from "react";
import ClassCard from "../components/ClassCard.jsx";
import variables from "../utils/variables.js";
import "../assets/classes.css";

const Classes = () => {
  return (
    <main>
      <h1 className="follow-title">Classes</h1>
      <p className="description">Here you will find all the classes</p>
      <div className="classes-container">
        {Array.isArray(variables.classesCards) && variables.classesCards.length > 0 ? (
          variables.classesCards.map((classItem) => (
            <ClassCard
              key={classItem.title}
              title={classItem.title}
              description={classItem.description}
              content={classItem.content.map((item, index) => (
                <li key={index}>{item}</li>
              ))
              }
            />
          ))
        ) : (
          <p>No classes available</p>
        )}
      </div>
    </main>
  );
};

export default Classes;
