import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import mainFunctions from "../utils/mainFunctions";

const FollowCard = ({
  userName,
  fullName,
}) => { 
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
        className={`follow-btn`}
        onClick={() => mainFunctions.redirectToExternalPage('https://github.com/' + userName)}
      >
        Follow
      </button>
    </article>
  );
};

export default FollowCard;
