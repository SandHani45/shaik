import React from "react";
import Style from "./About.module.scss";
import Terminal from "./Terminal";
import { Box } from "@mui/material";

export default function About() {
  function aboutMeText() {
    return (
      <>
        <p>
          <span className={Style.pink}>shaik $</span> cat aboutshaik{" "}
        </p>
        <p>
          <span className={Style.pink}>
            aboutshaik <span className={Style.green}>(main)</span> ${" "}
          </span>
          Hello! I'm Shaik, a senior full stack developer from Bangalore. I love
          creating full stack web applications with React, NodeJS and I'm
          currently studying AWS Cloud. I've been working for{" "}
          <a
            target={"_blank"}
            rel={"noreferrer"}
            href={"https://in.pearson.com/"}
          >
            Pearson India
          </a>{" "}
          since March 2020.
        </p>
      </>
    );
  }

  function skillsText() {
    return (
      <>
        <p>
          <span className={Style.pink}>shaik $</span> cd skills/tools
        </p>
        <p>
          <span className={Style.pink}>
            skills/tools <span className={Style.green}>(main)</span> $
          </span>{" "}
          ls
        </p>
        <p className={Style.pink}> Proficient With</p>
        <ul className={Style.skills}>
          <li>JavaScript</li>
          <li>React</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Bootstrap</li>
          <li>Material UI</li>
          <li>Tailwind</li>
          <li>Sass</li>
          <li>Scss Modules</li>
          <li>Git</li>
          <li>Github</li>
          <li>npm</li>
          <li>API Requests</li>
          <li>JSON</li>
          <li>Custom React Hooks</li>
          <li>Jest</li>
          <li>Cypress</li>
          <li>Strapi</li>
        </ul>
        <p className={Style.pink}> Exposed To</p>
        <ul className={Style.skills}>
          <li>Node</li>
          <li>Express</li>
          <li>Vue</li>
          <li>Firebase</li>
          <li>AWS</li>
          <li>Figma</li>
        </ul>
      </>
    );
  }

  function miscText() {
    return (
      <>
        <p>
          <span className={Style.pink}>shaik $</span> cd hobbies/interests
        </p>
        <p>
          <span className={Style.pink}>
            hobbies/interests <span className={Style.green}>(main)</span> $
          </span>{" "}
          ls
        </p>
        <ul>
          <li>
            <Box component={"span"} mr={"1rem"}>
              📖
            </Box>
            reading
          </li>
          <li>
            <Box component={"span"} mr={"1rem"}>
              🎨
            </Box>
            digital art
          </li>
          <li>
            <Box component={"span"} mr={"1rem"}>
              🎥
            </Box>
            movies
          </li>
          <li>
            <Box component={"span"} mr={"1rem"}>
              🔮
            </Box>
            horror / spooky stuff
          </li>
          <li>
            <Box component={"span"} mr={"1rem"}>
              🍲
            </Box>
            cooking/food, particularly of the spicy variety
          </li>
        </ul>
      </>
    );
  }

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      mt={"3rem"}
    >
      <Terminal text={aboutMeText()} />
      <Terminal text={skillsText()} />
      <Terminal text={miscText()} />
    </Box>
  );
}
