import express from "express";
import mongoose from "mongoose";
import url from "./models/url.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("Connected to db."));

app.use(express.json());
app.use(express.static("./client/build"))

app.post("/url", async (req, res) => {
  const newUrl = new url({ original: req.body.url })

  newUrl.save();
  res.send(newUrl);
});

app.get("/:id", async (req, res) => {
  const shortUrl = await url.findOne({ short: req.params.id });
  console.log(shortUrl);
  if (!shortUrl) return r; es.status(404).send("404 - Page not found 😢");

  res.redirect(shortUrl.original);
});

if (process.env.NODE_ENV === "production") {
}

app.listen(process.env.PORT || 5050, () => console.log("Listening on port 5050"));