import express from "express";
import cors from "cors";
import { register } from "./routes/register.js";

import { dummyData } from "./dummyData.js";

const app = express()
const port = 4000

app.use(cors())
app.use(express.json())

// setInterval(() => {
//     console.log(`Listening on port: ${port}`)
// }, 60000);

app.get('/data', (req, res) => {
    res.send(dummyData)
});

app.use('/register', register)

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});