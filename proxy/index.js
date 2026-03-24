import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/proxy", async (req, res) => {
  const url = req.query.url;
  if (!url) return res.status(400).send("Missing url");

  try {
    const r = await fetch(url);
    const data = await r.text();
    res.send(data);
  } catch (e) {
    res.status(500).send("Proxy error");
  }
});

app.listen(10000, () => {
  console.log("Proxy running on port 10000");
});
