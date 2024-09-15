import "../assets/welcome.css";
import MainFunctions from "../utils/mainFunctions.js";
import Button from "../components/Button.jsx";
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
        <Button text="Get Started" classId="start-btn" />
      </main>
      <footer id="footer">
        <p className="copyright">
          © Copyright
          <Button
            text="Tomás Korzusehec"
            classId="portfolio-link"
            onClick={() =>
              MainFunctions.redirectPage("https://myportfoliotk.vercel.app")
            }
          />
        </p>
      </footer>
    </>
  );
};

export default Welcome;
