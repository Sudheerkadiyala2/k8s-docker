const express = require("express");
const app = express();

app.use(express.json());

let votes = {
  cat: 0,
  dog: 0
};

// Vote endpoint
app.post("/vote", (req, res) => {
  const { option } = req.body;

  if (votes[option] !== undefined) {
    votes[option]++;
    return res.json({ message: "Vote recorded", votes });
  }

  res.status(400).json({ error: "Invalid option" });
});

// Result endpoint
app.get("/results", (req, res) => {
  res.json(votes);
});

// Health check (important for Kubernetes later)
app.get("/", (req, res) => {
  res.send("App is running 🚀");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});