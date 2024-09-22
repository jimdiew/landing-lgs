import { Grid2, Typography } from "@mui/material"
import image from "../../assets/carrito.png"
import styles from "./heroSection.module.css"
const HeroSection = () => {
  return (
    <Grid2 container justifyContent={"center"} width={"auto"}>
      <Grid2
        container
        alignItems={"center"}
        direction={"row"}
        justifyContent={"space-between"}
      >
        <Grid2 direction="column" width={"450px"} justifySelf={"center"}>
          <Typography variant="h3" color="white" fontWeight={400} mb="1rem">
            Your{" "}
            <i>
              <strong>own</strong>
            </i>{" "}
            TCG store made simple
          </Typography>
          <Typography variant="h6" color="white" fontWeight={300}>
            Don’t depend in other services, we create your ecommerce
          </Typography>
        </Grid2>
        <Grid2 justifySelf={"center"}>
          <img src={image} className={styles.image} />
        </Grid2>
      </Grid2>
    </Grid2>
  )
}

export default HeroSection
