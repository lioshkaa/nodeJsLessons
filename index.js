const express = require("express");
const hbs = require("hbs");

const app = express();
app.set("views", __dirname + "/views/partials");
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
app.use("/contact", function (request, response) {
  response.render("contact.hbs", {
    title: "Мои контакты",
    email: "lioshakhirny@gmail.com",
    phone: "+375 33 691 36 20",
  });
});
app.use("/", function (request, response) {
  response.send("Главная страница");
});
app.listen(3000);
