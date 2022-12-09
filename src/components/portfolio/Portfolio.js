import React from "react";
import mock1 from "../../img/mock1.png";
import mock2 from "../../img/mock2.png";
import mock3 from "../../img/mock3.png";
import mock4 from "../../img/mock4.png";
import mock5 from "../../img/mock5.png";
import mock6 from "../../img/mock6.png";
import PortfolioBlock from "./PortfolioBlock";
import { Box, Grid } from "@mui/material";

const projects = [
  {
    image: mock5,
    live: "",
    source: "",
    title: "IBE-Optics - 2018",
  },
  {
    image: mock1,
    live: "http://krackerz.in/",
    source: "",
    title: "Krackerz 360 Degree Pvt Ltd - 2016",
  },
  {
    image: mock2,
    live: "https://applaunch.io/",
    source: "",
    title: "APPLAUNCH COMPANY PORTFOLIO - 2019",
  },
  {
    image: mock3,
    live: "",
    source: "",
    title: "TruckerUnion",
  },
  {
    image: mock4,
    live: "",
    source: "",
    title: "OONSport",
  },
  {
    image: mock6,
    live: "",
    title: "Prathigna",
  },
];

export default function Portfolio() {
  return (
    <Box>
      <Grid container display={"flex"} justifyContent={"center"}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <PortfolioBlock
              image={project.image}
              live={project.live}
              source={project.source}
              title={project.title}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
