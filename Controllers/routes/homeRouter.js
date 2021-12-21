const express=require("express");
const homeController=require("../contollers/homeController.js");
const homeRouter=express.Router();

homeRouter.get("/about",homeController.about);
homeRouter.get("/",homeController.index);

module.exports=homeRouter;