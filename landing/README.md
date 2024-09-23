To run
1-
`npm install`
2-
`npm run dev`

Change fetch url
src < components < Contact < Contact.tsx

```
  const sendEmail = () => {
    const url = "http://localhost:8080/" // change this url
    const data = {
      name: form.name,
      email: form.email,
      message: form.message,
    }

```
