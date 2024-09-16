import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FollowCard = ({
  userName,
  fullName,
  isFollowing: initialIsFollowing,
}) => {
  const navigate = useNavigate();
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const handleFollowClick = async () => {
    const clientId = "Ov23liW47AA5lCtssvIj";
    const redirectUri = "https://react-coursetk.vercel.app/auth/callback";
    const scope = "user";

    // Redirigir al usuario para autenticación
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
  };

  return (
    <article className="article-follow">
      <img
        src={`https://github.com/${userName}.png`}
        className="userImage"
        alt={`${userName}'s profile`}
      />
      <div className="user">
        <h2 className="user-fullname">{fullName}</h2>
        <p className="user-alias">@{userName}</p>
      </div>
      <button
        className={`follow-btn ${isFollowing ? "unfollow" : ""}`}
        onClick={handleFollowClick}
      >
        {isFollowing ? "Unfollow" : "Follow"}
      </button>
    </article>
  );
};

export default FollowCard;
