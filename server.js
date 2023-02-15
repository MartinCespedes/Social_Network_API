const express = require("express");
const app = express();
const db = require("./config/connection");
const routes = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.use((req, res) => {
  res.status(404).send({ message: "Route not found" });
});

const PORT = process.env.PORT || 3001;

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
