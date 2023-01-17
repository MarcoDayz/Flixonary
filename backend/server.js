import express from "express";
import cors from "cors";

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

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});