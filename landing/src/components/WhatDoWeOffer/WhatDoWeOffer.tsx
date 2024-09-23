import { Box, Grid2, Typography } from "@mui/material"
import ReplayIcon from "@mui/icons-material/Replay"
import UploadFileIcon from "@mui/icons-material/UploadFile"
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest"
import style from "./whatDoWeOffer.module.css"

const WhatDoWeOffer = () => {
  const OFFERING = [
    {
      index: 0,
      icon: <ReplayIcon htmlColor="#00ffff" style={{ fontSize: "2rem" }} />,
      text: "Price automatization",
    },
    {
      index: 1,
      icon: <UploadFileIcon htmlColor="#00ffff" style={{ fontSize: "2rem" }} />,
      text: "Load products into the shop",
    },
    {
      index: 2,
      icon: <ReplayIcon htmlColor="#00ffff" style={{ fontSize: "2rem" }} />,
      text: "Discounts in other products",
    },
    {
      index: 3,
      icon: (
        <SettingsSuggestIcon htmlColor="#00ffff" style={{ fontSize: "2rem" }} />
      ),
      text: "Site customization",
    },
  ]

  return (
    <Grid2
      container
      justifyContent={"center"}
      alignContent={"center"}
      height={"60vh"}
      id={"what-do-we-offer"}
      padding={"5rem"}
    >
      {OFFERING.map(offering => (
        <Grid2
          container
          direction="column"
          id={offering.index.toString()}
          alignContent={"flex-start"}
          padding={"0 2rem"}
        >
          <Grid2 container justifyContent={"center"}>
            <Box className={style.box}>
              <Grid2 alignSelf={"center"}>{offering.icon}</Grid2>
            </Box>
          </Grid2>
          <Grid2 alignContent={"center"} mt="2rem" width={"140px"}>
            <Typography
              variant="body1"
              textAlign="center"
              color="white"
              fontWeight={300}
            >
              {offering.text}
            </Typography>
          </Grid2>
        </Grid2>
      ))}
    </Grid2>
  )
}
export default WhatDoWeOffer
