const express = require("express");
const app = express();

app.use(app.json());

app.get("/courses", (req, res) => {
  return res.json(["course1", "course2", "course3"]);
});

app.post("/courses", (req, res) => {
  return res.json(["course1", "course2", "course3", "course4"]);
});

app.put("/courses/:id", (req, res) => {
  return res.json(["course6", "course2", "course3", "course4"]);
});

app.patch("/courses/:id", (req, res) => {
  return res.json(["course6", "course7", "course3", "course4"]);
});

app.delete("/courses/:id", (req, res) => {
  return res.json(["course6", "course7", "course4"]);
});
app.listen(3333);
