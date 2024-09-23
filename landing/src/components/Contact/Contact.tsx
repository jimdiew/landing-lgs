import {
  Button,
  FormControl,
  Grid2,
  TextField,
  Typography,
  styled,
} from "@mui/material"
import { useState } from "react"
import style from "./contact.module.css"

interface FormState {
  name: string
  email: string
  message: string
}

const StyledTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#00ffff",
  },
  "& .MuiInputLabel-root": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#00ffff",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#00ffff",
      color: "white",
    },
    "&:hover fieldset": {
      borderColor: "#00ffff",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#00ffff",
    },
    "& .MuiInputBase-input": {
      color: "white",
      fontWeight: 300,
    },
  },
})
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

  const sendEmail = () => {}
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
          <StyledTextField
            id="name-input"
            aria-describedby="name"
            onChange={handleChangeName}
            className={style.input}
            variant="outlined"
            label="Name"
            required
          />
        </FormControl>
      </Grid2>
      <Grid2 container justifyContent={"center"} pb="3rem">
        <FormControl className={style.form}>
          <StyledTextField
            style={{ color: "white" }}
            id="email-input"
            aria-describedby="email"
            onChange={handleChangeEmail}
            variant="outlined"
            label="E-mail"
            required
          />
        </FormControl>
      </Grid2>
      <Grid2 container justifyContent={"center"}>
        <FormControl className={style.form}>
          <StyledTextField
            id="message-input"
            aria-describedby="message"
            onChange={handleChangeMessage}
            variant="outlined"
            label="Message"
            multiline
            rows={3}
            placeholder="Type your message..."
            required
            sx={{
              htmlInput: {
                color: "white",
                backgroundColor: "white",
              },
            }}
          />
        </FormControl>
      </Grid2>
      <Grid2 container justifyContent={"center"} pt="2rem">
        <Button
          variant="contained"
          className={
            form.name === "" || form.email === "" || form.message === ""
              ? style.buttonDisabled
              : style.button
          }
          disabled={
            form.name === "" || form.email === "" || form.message === ""
          }
          onSubmit={sendEmail}
        >
          Send
        </Button>
      </Grid2>
    </Grid2>
  )
}

export default Contact
