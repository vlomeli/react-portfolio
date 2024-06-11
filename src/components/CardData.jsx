import journal from "../images/fs-journal.png";
import tictactoe from "../images/tictactoe.png";
import emailtemp from "../images/emailtemp.png";
import multiplication from "../images/multiplication.png";
import weatherapp from "../images/weatherapp.png";
import loginui from "../images/loginui.png";
import reactweatherapp from "../images/reactweatherapp.png";
import testingtool from "../images/testingtool.png";
import socialmedia from "../images/socialmedia.png";



const CardData = [
  {
    img: socialmedia,
    title: "Full-stack Social Media",
    description:
      "During my time at BVT, my team and I developed a full-stack social media application using React, Bulma, MongoDB, and Express.js. This platform enables users to share text-based posts and express themselves, fostering engagement and interaction among the community.",
    //githubURL: "https://github.com/FrancescaImmediato/dev-duckies-sm-proj-front", "https://github.com/JJeshua/ddsm-back-end",
  },
  {
    img: testingtool,
    title: "Python Testing Tool",
    description:
      "My team and I developed a Python testing tool designed to rigorously stress test our social media application's endpoints. Leveraging pytest for testing and faker for generating dummy data, this mini project aimed to cover a wide range of scenarios and edge cases, ensuring robust performance and reliability.",
    //githubURL: "https://github.com/JJeshua/ddsm-backend-testing-tool",
  },
  {
    img: journal,
    title: "Full-stack Journal",
    description:
      "Crafted my inaugural full-stack endeavor: a journal equipped with mood tracking and an interactive calendar. Leveraging React, CSS, Express.js, and SQL, the goal was to put into practice all the skills I have acquired.",
    //githubURL: "https://github.com/vlomeli/journal-frontend",
  },
  {
    img: tictactoe,
    title: "Tic-Tac-Toe",
    description:
      "Worked on improving a Tic Tac Toe game by adding win tracking and a reset feature. This project was all about getting better at JavaScript through hands-on practice.",
    //githubURL: "",
  },
  {
    img: emailtemp,
    title: "Email Template",
    description:
      "One of my first projects at Bay Valley Tech was to get comfortable with a CSS framework. I used Bootstrap to create and refine a responsive grid layout, replicating an email template.",
    //githubURL: "https://github.com/vlomeli/Bootstrap-Email-vlomeli",
  },
  {
    img: multiplication,
    title: "Multiplication Sheet",
    description:
      "Created a multiplication practice project to enhance my JavaScript skills. It generates two random numbers between 1 and 10 for each problem, allowing you to practice multiplication and track your correct answers out of 24 problems. ",
    //githubURL: "https://github.com/vlomeli/multiplication-sheet",
  },
  {
    img: loginui,
    title: "Login Page",
    description:
      "Designed a login page for BVT to hone my CSS and HTML skills, adopting a straightforward approach while aligning with their existing design taste.",
    //githubURL: "https://github.com/vlomeli/login-ui-vlomeli",
  },
  {
    img: weatherapp,
    title: "Weather App (Code Along)",
    description:
      "First ever API project. Just a simple website that retrieves weather data from openweatherapi",
    //githubURL: "https://github.com/vlomeli/multiplication-sheet",
  },
  {
    img: reactweatherapp,
    title: "React Weather App (Code Along)",
    description:
      "Second project working with an api, but taking my skill to a new level with react.",
    //githubURL: "https://github.com/vlomeli/react-weather-app",
  },
];

export default CardData;
