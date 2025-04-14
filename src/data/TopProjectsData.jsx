import detailing from "../images/detailing.png";
import socialmedia from "../images/socialmedia.png";
import testingtool from "../images/testingtool.png";

const TopProjectsData = [
  {
    img: detailing,
    title: "Freelance Detailing Website",
    description:
      "A local detailing company needed to expand their business online, so I created a website for them. Using HTML, JavaScript, and CSS, I developed a solution featuring EmailJS for quote requests and an embedded map to display their location. The website is hosted with a custom domain.",
    githubURL: "https://github.com/vlomeli/ddsm-front-end",
  },
  {
    img: socialmedia,
    title: "Full-stack Social Media",
    description:
      "During my time at BVT, my team and I developed a full-stack social media application using React, Bulma, MongoDB, and Express.js. This platform enables users to share text-based posts and express themselves, fostering engagement and interaction among the community.",
    //githubURL: "https://github.com/vlomeli/ddsm-front-end", "https://github.com/vlomeli/ddsm-back-end",
  },
  {
    img: testingtool,
    title: "Python Testing Tool",
    description:
      "My team and I developed a Python testing tool designed to rigorously stress test our social media application's endpoints. Leveraging pytest for testing and faker for generating dummy data, this mini project aimed to cover a wide range of scenarios and edge cases, ensuring robust performance and reliability.",
    //githubURL: "https://github.com/vlomeli/ddsm-backend-testing-tool",
  },
];

export default TopProjectsData;
