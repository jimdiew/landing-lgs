import { Fragment } from "react"
import NavegationBar from "../components/NavegationBar"

import "../index.css"
import HeroSection from "../components/HeroSection/HeroSection"
import WhatDoWeOffer from "../components/WhatDoWeOffer/WhatDoWeOffer"
import Reviews from "../components/Reviews/Reviews"
import FAQ from "../components/FAQ/faq"
import Contact from "../components/Contact/Contact"
import Footer from "../components/Footer/footer"
import { Grid2 } from "@mui/material"

const HomePage = () => {
  return (
    <Fragment>
      <NavegationBar />
      <Grid2
        container
        direction="column"
        justifyContent={"center"}
        alignContent={"center"}
      >
        <Grid2
          container
          pt={"5rem"}
          height={"80vh"}
          justifyContent={"center"}
          alignContent={"center"}
        >
          <HeroSection />
        </Grid2>
        <WhatDoWeOffer />
        <Reviews />
        <FAQ />
        <Contact />
        <Footer />
      </Grid2>
    </Fragment>
  )
}

export default HomePage
