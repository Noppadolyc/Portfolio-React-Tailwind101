import {
    faGithub,
    faMedium,
    faYoutube,
  } from "@fortawesome/free-brands-svg-icons";
  import fashion from "../assets/fashion.png";
  import mobileapp from "../assets/moblieapp.png"
  import website from "../assets/website.jpg"
  
  export const data = [
    {
      date: "2020-2021",
      title: "Full Stack, System Analysis, Tester, It Support",
      link: "https://chatgpt.com/",
      materials: [
        { type: faGithub, link: "https://github.com/" },
        { type: faYoutube, link: "https://www.youtube.com/" },
        { type: faMedium, link: "https://medium.com/" },
      ],
      descriptions: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      ],
      skills: [
        ["React", "Tailwind", "MUI"],
        ["NodeJs", "Express", "MongoDB"],
      ],
     picture: website
    },
  
    {
      date: "2019-2020",
      title: "It Support, Stack Full",
      link: "https://chatgpt.com/",
      materials: [
        { type: faGithub, link: "https://github.com/" },
        { type: faYoutube, link: "https://www.youtube.com/" },
      ],
      descriptions: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      ],
      skills: [["NodeJs", "Express", "MongoDB", "Prisma"]],
      picture: fashion,
    },
  
    {
      date: "2018-2019",
      title: "Mobile Application",
      link: "https://www.youtube.com/",
  
      descriptions: [
       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      ],
      skills: [
        ["React-expo", "Flutter"],
        ["NodeJs", "Express", "MongoDB", "Prisma"],
      ],
      picture: mobileapp,
    },
  ];
  