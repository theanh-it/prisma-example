"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.userRoute = void 0;
var controller_1 = require("./controller");
var express_1 = __importDefault(require("express"));
var userRoute = express_1["default"].Router();
exports.userRoute = userRoute;
userRoute.get("/", controller_1.userController.index);
//# sourceMappingURL=route.js.map