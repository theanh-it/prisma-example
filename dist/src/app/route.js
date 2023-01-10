"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.appRoute = void 0;
var route_1 = require("./user/route");
var express_1 = __importDefault(require("express"));
var appRoute = express_1["default"].Router();
exports.appRoute = appRoute;
appRoute.use("/user", route_1.userRoute);
//# sourceMappingURL=route.js.map