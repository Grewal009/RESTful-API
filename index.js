const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    id: "2001",
    username: "aneel",
    content: "Nothing is impossible. The word itself says 'I'm possible!",
  },
  {
    id: "2002",
    username: "sam",
    content:
      "You don't always need a plan. Sometimes you just need to breathe, trust, let go and see what happens.",
  },
  {
    id: "2003",
    username: "jas",
    content: "Believe you can and you're halfway there.",
  },
];

app.get("/", (req, res) => {
  res.render("index.ejs", { posts });
});

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
