import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import mainFunctions from "../utils/mainFunctions";

const FollowCard = ({ userName, fullName }) => {
  const navigate = useNavigate();
  const [isFollowing, setIsFollowing] = useState(false);


  const handleFollowClick = () => {
    setIsFollowing((prevState) => !prevState);
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
