"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
require("dotenv/config");
var express_1 = __importDefault(require("express"));
var route_1 = require("./app/route");
var app = (0, express_1["default"])();
app.use("/", route_1.appRoute);
app.listen(process.env.APP_PORT, function () {
    console.log("server running http://localhost:" + process.env.APP_PORT);
});
//# sourceMappingURL=server.js.map