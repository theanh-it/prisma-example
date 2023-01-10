"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.UserController = exports.userController = void 0;
var Controller_1 = require("../Controller");
var UserController = /** @class */ (function (_super) {
    __extends(UserController, _super);
    function UserController() {
        var _this = _super.call(this) || this;
        _this.index = _this.index.bind(_this);
        return _this;
    }
    UserController.prototype.index = function (request, response) {
        var _this = this;
        this.prisma.user
            .findMany()
            .then(function (results) { return _this.send(response, results); })["catch"](function (error) { return _this.sendError(response, error); });
        // .finally(() => this.prisma.$disconnect());
    };
    return UserController;
}(Controller_1.Controller));
exports.UserController = UserController;
var userController = new UserController();
exports.userController = userController;
//# sourceMappingURL=controller.js.map