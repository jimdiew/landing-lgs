import { Grid2, Typography } from "@mui/material"
import style from "./Reviews.module.css"
import morningstarLogo from "../../assets/morningstar-games.png"
import piruloLogo from "../../assets/pirulo.png"
import theGatheringLogo from "../../assets/the-gathering-place.png"

const Reviews = () => {
  const reviews = [
    { logo: morningstarLogo, review: "Review cliente #1" },
    { logo: piruloLogo, review: "Review cliente #2" },
    { logo: theGatheringLogo, review: "Review cliente #3" },
  ]
  return (
    <Grid2 id="reviews" padding={"5rem"}>
      <Grid2 container justifyContent={"space-between"}>
        {reviews.map(review => (
          <Grid2 className={style.flipCard}>
            <Grid2 className={style.flipCardInner}>
              {/* front card */}
              <Grid2 className={style.flipCardFront}>
                <img src={review.logo} width={"200rem"} />
              </Grid2>
              {/* back card */}
              <Grid2 className={style.flipCardBack}>
                <Typography
                  color="white"
                  textAlign={"left"}
                  variant="body1"
                  fontWeight={300}
                >
                  {review.review}
                </Typography>
              </Grid2>
            </Grid2>
          </Grid2>
        ))}
      </Grid2>
    </Grid2>
  )
}

export default Reviews
