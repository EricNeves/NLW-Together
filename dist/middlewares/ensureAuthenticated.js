"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthenticated = void 0;
var settings_1 = require("../config/settings");
var jsonwebtoken_1 = require("jsonwebtoken");
function ensureAuthenticated(request, response, next) {
    var authToken = request.headers.authorization;
    if (!authToken)
        return response.status(401).end();
    var _a = authToken.split(' '), token = _a[1];
    try {
        var sub = jsonwebtoken_1.verify(token, settings_1.config.SECRET).sub;
        request.user_id = sub;
        return next();
    }
    catch (err) {
        response.status(401).end();
    }
}
exports.ensureAuthenticated = ensureAuthenticated;
