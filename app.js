var express = require("express");
const route = require("./route/");

var app = express();
const PORT = 3000;

app.use(express.json());
app.set("views", "./views");
app.set("view engine", "pug");

route(app);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

