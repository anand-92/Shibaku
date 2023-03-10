const app = require('express')();
const PORT = 9090;

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)
