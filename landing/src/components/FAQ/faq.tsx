import {
  Accordion,
  AccordionSummary,
  Grid2,
  AccordionDetails,
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import style from "./faq.module.css"

const faq = () => {
  const FAQ = [
    { index: 0, question: "Question #1", answer: "Answer #1" },
    { index: 0, question: "Question #2", answer: "Answer #2" },
    { index: 0, question: "Question #3", answer: "Answer #3" },
  ]
  return (
    <Grid2
      container
      id="faq"
      style={{ height: "100%" }}
      justifyContent={"center"}
      padding={"5rem 0"}
      height={"50vh"}
    >
      {FAQ.map(accordion => (
        <Grid2 style={{ width: "50rem" }} padding="1rem 0">
          <Accordion className={style.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon htmlColor="#00ffff" />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              {accordion.question}
            </AccordionSummary>
            <AccordionDetails>{accordion.answer}</AccordionDetails>
          </Accordion>
        </Grid2>
      ))}
    </Grid2>
  )
}

export default faq
