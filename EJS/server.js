const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use("/contact", function (request, response) {
  response.render("contact", {
    title: "Мои контакты",
    emailsVisible: true,
    email: ["lioshakhirny@gmail.com", "lioshkaaa@mail.ru"],
    phone: "+375 33 691 36 20",
  });
});
app.use("/", function (request, response) {
  response.send("Главная страница");
});
app.listen(3000);
