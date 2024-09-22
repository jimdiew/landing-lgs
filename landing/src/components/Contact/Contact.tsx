import {
  Button,
  FormControl,
  Grid2,
  TextField,
  Typography,
} from "@mui/material"
import { useState } from "react"
import style from "./contact.module.css"

interface FormState {
  name: string
  email: string
  message: string
}

const Contact = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  })

  const handleChangeEmail = (e: any) => {
    const email = e.target.value
    setForm({ ...form, email: email })
  }
  const handleChangeName = (e: any) => {
    const name = e.target.value
    setForm({ ...form, name: name })
  }
  const handleChangeMessage = (e: any) => {
    const message = e.target.value
    setForm({ ...form, message: message })
  }
  return (
    <Grid2
      container
      direction="column"
      justifyContent={"center"}
      height={"80vh"}
    >
      <Grid2 container justifyContent={"center"} pb="2rem">
        <Typography variant="h6" color="white">
          For more information
        </Typography>
      </Grid2>
      <Grid2 container justifyContent={"center"} pb="3rem">
        <FormControl className={style.form}>
          <TextField
            style={{ color: "white" }}
            id="my-input"
            aria-describedby="my-helper-text"
            onChange={handleChangeName}
            className={style.input}
            variant="outlined"
            label="Name"
          />
          {/* <FormHelperText id="my-helper-text" style={{ color: "white" }}>
            We'll never share your email.
          </FormHelperText> */}
        </FormControl>
      </Grid2>
      <Grid2 container justifyContent={"center"} pb="3rem">
        <FormControl className={style.form}>
          <TextField
            style={{ color: "white" }}
            id="my-input"
            aria-describedby="my-helper-text"
            onChange={handleChangeEmail}
            variant="outlined"
            label="E-mail"
          />
          {/* <FormHelperText id="my-helper-text" style={{ color: "white" }}>
            We'll never share your email.
          </FormHelperText> */}
        </FormControl>
      </Grid2>
      <Grid2 container justifyContent={"center"}>
        <FormControl className={style.form}>
          <TextField
            style={{ color: "white" }}
            id="my-input"
            aria-describedby="my-helper-text"
            onChange={handleChangeMessage}
            variant="outlined"
            label="Message"
          />
          {/* <FormHelperText id="my-helper-text" style={{ color: "white" }}>
            We'll never share your email.
          </FormHelperText> */}
        </FormControl>
      </Grid2>
      <Grid2 container justifyContent={"center"} pt="2rem">
        <Button variant="contained" className={style.button}>
          Send
        </Button>
      </Grid2>
    </Grid2>
  )
}

export default Contact
