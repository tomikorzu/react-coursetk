import React from "react";

const ClassCard = ({ title, description, content, image }) => {
  return (
    <article className="article-class">
      <img src={image} alt="class image" className="image-class" />
      <div className="class">
        <h2 className="title-class">{title}</h2>
        <p className="description-class">{description}</p>
        <button className="class-btn">Go to class</button>
      </div>
    </article>
  );
};

export default ClassCard;
