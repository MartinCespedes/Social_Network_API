const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

const User = require('./models/User');
const Thought = require('./models/Thought');
const Reaction = require('./models/Reaction');
const Friend = require('./models/Friend');

const userRoutes = require('./routes/userRoutes');
const thoughtRoutes = require('./routes/thoughtRoutes');
const reactionRoutes = require('./routes/reactionRoutes');
const friendRoutes = require('./routes/friendRoutes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.use("/api/users", userRoutes);
app.use("/api/thoughts", thoughtRoutes);
app.use("/api/reactions", reactionRoutes);
app.use("/api/friends", friendRoutes);

app.use((req, res) => {
  res.status(404).send({ message: 'Route not found' });
});

const PORT = process.env.PORT || 3001;

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});