import { AppBar, Box, Button } from "@mui/material"
import logo from "../../assets/logo.png"
import { PAGES } from "../../assets/constants"
import styles from "./navegationBar.module.css"
import Grid from "@mui/material/Grid2"
const NavegationBar = () => {
  return (
    <Box display="flex" className={styles.navBar}>
      <AppBar position="static" component="nav">
        <Grid
          container
          style={{ alignContent: "center", justifyContent: "space-between" }}
        >
          <Grid>
            <img src={logo} style={{ height: "5rem" }} />
          </Grid>
          <Grid
            style={{
              display: "flex",
              alignContent: "center",
              flexWrap: "wrap",
            }}
          >
            <ul className={styles.menuList}>
              {PAGES.map(page =>
                page === "Contact" ? (
                  <Button variant="text" className={styles.button}>
                    {page}
                  </Button>
                ) : (
                  <li className={styles.itemMenu}>{page}</li>
                )
              )}
            </ul>
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  )
}

export default NavegationBar
