"use strict";
exports.__esModule = true;
exports.Controller = void 0;
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
var Controller = /** @class */ (function () {
    function Controller() {
        this.prisma = prisma;
        this.send = this.send.bind(this);
        this.sendError = this.sendError.bind(this);
    }
    Controller.prototype.send = function (response, data, status, message) {
        if (status === void 0) { status = 200; }
        if (message === void 0) { message = "success"; }
        var result = {
            status: status,
            message: message,
            data: data
        };
        response.json(result).status(status);
    };
    Controller.prototype.sendError = function (response, data, status, message) {
        if (status === void 0) { status = 400; }
        if (message === void 0) { message = "error"; }
        var result = {
            status: status,
            message: message,
            data: data
        };
        response.json(result).status(status);
    };
    return Controller;
}());
exports.Controller = Controller;
//# sourceMappingURL=Controller.js.map