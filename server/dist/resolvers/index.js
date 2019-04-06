"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_binding_1 = require("prisma-binding");
var Query_1 = require("./Query");
var auth_1 = require("./Mutation/auth");
var createrecipe_1 = require("./Mutation/createrecipe");
var AuthPayload_1 = require("./AuthPayload");
var commentrecipe_1 = require("./Mutation/commentrecipe");
var likerecipe_1 = require("./Mutation/likerecipe");
var unlikerecipe_1 = require("./Mutation/unlikerecipe");
exports.resolvers = {
    Query: Query_1.default,
    Mutation: __assign({}, auth_1.auth, createrecipe_1.recipe, commentrecipe_1.default, likerecipe_1.default, unlikerecipe_1.default),
    AuthPayload: AuthPayload_1.AuthPayload
};
exports.fragmentReplacements = prisma_binding_1.extractFragmentReplacements(exports.resolvers);
//# sourceMappingURL=index.js.map