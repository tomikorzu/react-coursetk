import React from "react";

const ClassCard = ({ title, description, content }) => {
  return (
    <article className="article-class">
      <div className="class">
        <h2 className="title-class">{title}</h2>
        <p className="description-class">{description}</p>
        <ul className="content-container-class">
          {content}
        </ul>
      </div>
      <button
        className='class-btn'
      >
        Go to class
      </button>
    </article>
  );
};

export default ClassCard;
