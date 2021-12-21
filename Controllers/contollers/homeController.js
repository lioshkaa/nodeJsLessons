const { response } = require("express")

exports.index=function(request,require){
    response.send("Главная страница");
}
exports.about=function(request,response){
    response.send("О сайте");
}