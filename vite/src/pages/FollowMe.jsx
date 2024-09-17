import React, { useEffect } from "react";
import "../assets/FollowMe.css";
import variables from "../utils/variables";
import mainFunctions from "../utils/mainFunctions";
import { useNavigate } from "react-router-dom";
import FollowCard from "../components/FollowCard";
import BackButton from "../components/BackButton";

const FollowMe = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const main = document.querySelector("main");
    main.classList.add("fade-in");
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
      if (continueBtn) {
        continueBtn.removeEventListener("click", handleContinueClick);
      }
    };
  }, [navigate]);

  return (
    <main>
      <BackButton url="/" />
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
      <button className="start-btn" id="continue-btn">
        Continue
      </button>
    </main>
  );
};

export default FollowMe;
