import React from "react";
import Button from "../components/Button";
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
    if (backBtn) {
      backBtn.classList.add("fade-left");
      backBtn.addEventListener("click", () =>
        mainFunctions.goBack(navigate, "/")
      );

      // Limpieza del efecto
      return () => {
        backBtn.removeEventListener("click", () =>
          mainFunctions.goBack(navigate, "/")
        );
        main.classList.remove("fade-in");
      };
    }
  }, [navigate]);

  return (
    <main>
      <Button
        text={<i className="fa-solid fa-arrow-left"></i>}
        classId={"back-btn"}
      />
      <h1 className="follow-title">
        Follow me on <i className="fa-brands fa-github"></i>
      </h1>
      <FollowCard userName="tomikorzu" fullName="Tomás Korzusehec" />
      <FollowCard userName="react" fullName="React" />
    </main>
  );
};

export default FollowMe;
