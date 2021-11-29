const {getUser , createUser ,getUserData,updateUser}  = require("../services/user.services");

const route = require('express').Router();

route.get("/",getUser);

route.post("/",createUser);

route.get("/getuser/:id",getUserData);

// route.delete("/:id" , deleteOrder);

route.put("/getuser/:id" , updateUser);



module.exports = route;