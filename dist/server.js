"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("reflect-metadata");
require("express-async-errors");
var routes_1 = require("./routes");
var settings_1 = require("./config/settings");
var cors_1 = __importDefault(require("cors"));
require("./database");
var app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(routes_1.router);
app.use(function (err, request, response, next) {
    if (err instanceof Error) {
        response.status(400).json({
            error: err.message
        });
    }
    return response.status(500).json({
        status: "error",
        message: "Internal Error Server"
    });
});
app.listen(settings_1.config.PORT, function () {
    return console.log("Server running on " + settings_1.config.HOST + ":" + settings_1.config.PORT);
});
