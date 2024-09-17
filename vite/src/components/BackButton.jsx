import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const BackButton = (props) => {
  const { url } = props;
  const navigate = useNavigate();
  useEffect(() => {
    const backBtn = document.querySelector(".back-btn");
    const handleBackClick = () => {
      const main = document.querySelector("main");
      main.classList.add("fade-out");
      setTimeout(() => {
        main.classList.remove("fade-out");
        navigate(url);
      }, 600);
    };
    backBtn.addEventListener("click", handleBackClick);
    return () => {
      backBtn.removeEventListener("click", handleBackClick);
    };
  }, [navigate]);

  return (
    <button className="back-btn">
      <i className="fas fa-arrow-left"></i>
    </button>
  );
};

export default BackButton;
