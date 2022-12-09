import React from "react";
import Style from "./Home.module.scss";
import me from "../../img/self.jpg";
import classNames from "classnames";
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import { Box } from "@mui/material";

const bioBullets = [
  {
    emoji: "🧀",
    text: "based in india",
  },
  {
    link: "https://in.pearson.com/",
    emoji: "💻",
    text: "senior software developer at pearson india",
  },
  {
    //  link: "https://user-images.githubusercontent.com/18350557/94314005-5c9f6e00-ff45-11ea-86a1-5db9e1371750.jpg",
    emoji: "🐶",
    text: "dog dad",
  },
  {
    link: "mailto:sandhanifullstack@gmail.com?subject=Let's work on something together!",
    emoji: "✉️",
    text: "let's get in touch!",
  },
];

const socials = [
  {
    link: "https://github.com/SandHani45",
    icon: "fa fa-github",
    label: "Github",
  },
  {
    link: "https://www.linkedin.com/in/sandhani-shaik-sr-research-engineer-8bb76aa4/",
    icon: "fa fa-linkedin",
    label: "LinkedIn",
  },
];

export default function Home() {
  return (
    <Box
      component={"main"}
      display={"flex"}
      flexDirection={{ xs: "column", md: "row" }}
      alignItems={"center"}
      justifyContent={"center"}
      minHeight={"calc(100vh - 175px)"}
    >
      <Box
        // className={classNames(Style.avatar, Style.shadowed)}
        component={"img"}
        alt={"Shaik sandhani Image as full stack developer"}
        src={me}
        width={{ xs: "100%", md: "50%" }}
        height={{ xs: "100%", md: "100%" }}
        mb={{ xs: "1rem", sm: "7rem" }}
        mr={{ xs: 0, md: "2rem" }}
      />
      <Box>
        <h1>
          Hi, I'm <span className={Style.firstName}>Shaik </span>
          <span className={Style.hand}>🤚</span>
        </h1>
        <h2>I'm a full stack developer.</h2>
        <Box component={"ul"} p={"0.8rem"}>
          {bioBullets.map((bio, index) => (
            <li key={index}>
              <EmojiBullet link={bio.link} emoji={bio.emoji} text={bio.text} />
            </li>
          ))}
        </Box>
        <Box
          display={"flex"}
          gap={"1.5rem"}
          justifyContent={"center"}
          fontSize={{ xs: "2rem", md: "2.5rem" }}
        >
          {socials.map((social, index) => (
            <SocialIcon
              key={index}
              link={social.link}
              icon={social.icon}
              label={social.label}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
