import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

const PORT = process.env.PORT ?? 5000;

app.listen(PORT, () => {
  if (process.env?.NODE_ENV !== "production") {
    console.log(`server listining at http://localhost:${PORT}`);
  }
});
