import {
  FormControl,
  FormHelperText,
  Grid2,
  Input,
  InputLabel,
} from "@mui/material"

const Contact = () => {
  return (
    <Grid2 container direction="column" justifyContent={"center"}>
      <Grid2 container justifySelf={"center"}>
        <FormControl style={{ color: "white" }}>
          <InputLabel style={{ color: "white" }} htmlFor="my-input">
            Email address
          </InputLabel>
          <Input
            style={{ color: "white" }}
            id="my-input"
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text" style={{ color: "white" }}>
            We'll never share your email.
          </FormHelperText>
        </FormControl>
      </Grid2>
    </Grid2>
  )
}

export default Contact
