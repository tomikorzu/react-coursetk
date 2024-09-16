import React, { useEffect } from "react";
import "../assets/FollowMe.css";
import variables from "../utils/variables";
import { useNavigate } from "react-router-dom";
import FollowCard from "../components/FollowCard";

const FollowMe = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const main = document.querySelector("main");
    main.classList.add("fade-in");

    const backBtn = document.querySelector(".back-btn");
    backBtn.classList.add("fade-left");

    const handleBackClick = () => {
      main.classList.add("fade-out");
      setTimeout(() => {
        mainFunctions.goBack(navigate, "/");
        main.classList.remove("fade-out");
      }, 600);
    };

    backBtn.addEventListener("click", handleBackClick);

    const continueBtn = document.getElementById("continue-btn");
    const handleContinueClick = () => {
      main.classList.add("fade-out");
      setTimeout(() => {
        navigate("/Classes");
        main.classList.remove("fade-out");
      }, 600);
    };

    if (continueBtn) {
      continueBtn.addEventListener("click", handleContinueClick);
    }

    return () => {
      backBtn.removeEventListener("click", handleBackClick);
      if (continueBtn) {
        continueBtn.removeEventListener("click", handleContinueClick);
      }
    };
  }, [navigate]);

  return (
    <main>
      <button className="back-btn">
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <h1 className="follow-title">
        Follow me on <i className="fa-brands fa-github"></i>
      </h1>
      {variables.usersToFollow.map((user) => (
        <FollowCard
          key={user.userName}
          userName={user.userName}
          fullName={user.fullName}
          isFollowing={user.isFollowing}
        />
      ))}
      <button className="start-btn" id="continue-btn">Continue</button>
    </main>
  );
};

export default FollowMe;
