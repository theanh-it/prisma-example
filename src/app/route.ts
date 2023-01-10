import express from "express";
const route = express.Router();
// const swaggerUi = require("swagger-ui-express");
// const swaggerDocument = require("./swagger.json");

// appRoute.use("/api-docs", swaggerUi.serve);
// appRoute.get("/api-docs", swaggerUi.setup(swaggerDocument));
route.use("/user", require("./user/route"));

module.exports = route;
