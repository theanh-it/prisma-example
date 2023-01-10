const controller = require("./UserController");
const route = require("express").Router();

route.get("/", controller.index);
route.get("/:id", controller.getSingle);
route.post("/", controller.create);
route.post("/", controller.update);
route.delete("/:id", controller.delete);

module.exports = route;
