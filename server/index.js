import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3005;

app.get("/", (req, res) => {
  res.send("Hello World from our API");
});

import generate from "./generate.js";

app.post("/generate", async (req, res) => {
  const queryDescription = req.body.queryDescription;

  try {
    const sqlQuery = await generate(queryDescription);
    res.json({ response: sqlQuery.choices[0].message.content });
  } catch (e) {
    console.error(e);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

// log erori care altfel ar închide procesul
process.on("uncaughtException", (err) => {
  console.error("uncaughtException", err);
});
process.on("unhandledRejection", (reason) => {
  console.error("unhandledRejection", reason);
});
