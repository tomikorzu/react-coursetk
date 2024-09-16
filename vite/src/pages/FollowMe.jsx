import React, { useEffect, useState } from "react";
import "../assets/FollowMe.css";
import mainFunctions from "../utils/mainFunctions";
import { useNavigate } from "react-router-dom";
import FollowCard from "../components/FollowCard";
import axios from "axios";

const FollowMe = () => {
  const navigate = useNavigate();
  const [userToken, setUserToken] = useState(null);

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

    // Obtén el token de las cookies
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("github_token="))
      ?.split("=")[1];

    if (token) {
      setUserToken(token);

      // Puedes usar el token para hacer peticiones a la API de GitHub si es necesario
      // Por ejemplo, obtener información del usuario autenticado
      axios
        .get("https://api.github.com/user", {
          headers: { Authorization: `token ${token}` },
        })
        .then((response) => {
          console.log(response.data);
          // Puedes actualizar el estado o manejar la información del usuario aquí
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
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
          isFollowing={user.isFollowing}
        />
      ))}
    </main>
  );
};

export default FollowMe;
