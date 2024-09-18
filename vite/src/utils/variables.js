import class1 from "../assets/img/class1.svg";
import class2 from "../assets/img/class2.svg";
import class3 from "../assets/img/class3.svg";
import class4 from "../assets/img/class4.svg";
import class5 from "../assets/img/class5.svg";

const usersToFollow = [
  {
    userName: "tomikorzu",
    fullName: "Tomás Korzusehec",
  },
];

const classesCards = [
  {
    img: class1,
    title: "Introduction to React",
    description:
      "This class introduces the React framework, its main concepts, and its importance in modern web development",
    content: [
      "What is React and why use it.",
      "Initial setup and configuration.",
      "Basic project structure in React.",
    ],
  },
  {
    img: class2,
    title: "Vite",
    description:
      "This framework use react and vite to create a modern web application.",
    content: [
      "How to install it",
      "Why use it.",
      "Basic structure you have to use.",
    ],
  },
  {
    img: class3,
    title: "Components",
    description:
      "This class explains the concept of components in React and how to create them.",
    content: [
      "What is a component.",
      "How to create a component.",
      "How to use a component.",
    ],
  },
  {
    img: class4,
    title: "Props",
    description:
      "This class explains the concept of props in React and how to use them.",
    content: ["What are props.", "How to use props.", "How to pass props."],
  },
  {
    img: class5,
    title: "How to organize the files",
    description:
      "This class explains how to organize the files in a React project.",
    content: [
      "How to organize the files.",
      "How to create a good structure.",
      "How to maintain the files.",
    ],
  },
  
];

export default {
  usersToFollow,
  classesCards,
};
