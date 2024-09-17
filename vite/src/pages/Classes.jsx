import React from "react";
import ClassCard from "../components/ClassCard.jsx";
import variables from "../utils/variables.js";
import "../assets/classes.css";
import NavbarMenu from "../components/NavbarMenu.jsx";

const Classes = () => {
  return (
    <>
      <NavbarMenu
        items={[
          { item: "Home", url: "/" },
          { item: "Follow Me", url: "/FollowMe" },
        ]}
      />
      <main className="fade-in">
        <h1 className="follow-title">Classes</h1>
        <p className="description">Here you will find all the classes</p>
        <div className="classes-container">
          {variables.classesCards.map((classItem) => (
            <ClassCard
              key={classItem.title}
              title={classItem.title}
              description={classItem.description}
              content={classItem.content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Classes;
