import "../assets/welcome.css";
import MainFunctions from "../utils/mainFunctions.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import svgReact from "../assets/img/react.svg";

const Welcome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    const start = () => {
      main.classList.add("fade-out");
      footer.classList.add("fade-out");
      setTimeout(() => {
        navigate("/FollowMe");
      }, 600);
    };
    const startBtn = document.querySelector(".start-btn");
    startBtn.addEventListener("click", start);
    return () => {
      startBtn.removeEventListener("click", start);
    };
  }, [navigate]);
  return (
    <>
      <main className="fade-in-large">
        <img src={svgReact} alt="react image" className="react-image" />
        <h1 className="title">Hello world</h1>
        <h3 className="welcome-title">Welcome to the react class</h3>
        <p className="description">
          Here we will resolve all of your questions
        </p>
        <button className="start-btn">Get Started!</button>
      </main>
      <footer id="footer">
        <p className="copyright">
          © Copyright
          <button
            className="portfolio-link"
            onClick={() =>
              MainFunctions.redirectToExternalPage(
                "https://myportfoliotk.vercel.app"
              )
            }
          >
            Tomás Korzusehec
          </button>
        </p>
      </footer>
    </>
  );
};

export default Welcome;
