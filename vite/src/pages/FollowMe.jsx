import React from "react";
import "../assets/FollowMe.css";
import mainFunctions from "../utils/mainFunctions";
import { useNavigate } from "react-router-dom";
import FollowCard from "../components/FollowCard";
import { useEffect } from "react";

const FollowMe = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const main = document.querySelector("main");
    main.classList.add("fade-in");

    const backBtn = document.querySelector(".back-btn");
    backBtn.classList.add("fade-left");

    backBtn.addEventListener("click", () => {
      main.classList.add("fade-out");
      setTimeout(() => {
        mainFunctions.goBack(navigate, "/");
        main.classList.remove("fade-out");
      }, 600);
    });
  }, [navigate]);

  return (
    <main>
      <button className="back-btn">
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <h1 className="follow-title">
        Follow me on <i className="fa-brands fa-github"></i>
      </h1>
      {mainFunctions.usersToFollow.map((user) => (
        <FollowCard
          key={user.userName}
          userName={user.userName}
          fullName={user.fullName}
        />
      ))}
    </main>
  );
};

export default FollowMe;
