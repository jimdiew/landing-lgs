import { AppBar, Box, Button } from "@mui/material"
import logo from "../../assets/logo.png"
import { PAGES } from "../../assets/constants"
import styles from "./navegationBar.module.css"
import Grid from "@mui/material/Grid2"

const NavegationBar = () => {
  const onClickNavigation = (id: string) => {
    let element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <Box display="flex" className={styles.containerNavBar}>
      <AppBar position="sticky" component="nav" className={styles.navBar}>
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
                page.text === "Contact" ? (
                  <Button
                    variant="text"
                    className={styles.button}
                    id={page.index.toString()}
                  >
                    {page.text}
                  </Button>
                ) : (
                  <li
                    id={page.index.toString()}
                    className={styles.itemMenu}
                    onClick={() => onClickNavigation(page.section)}
                  >
                    {page.text.toUpperCase()}
                  </li>
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
