"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const nexus_1 = require("nexus");
exports.User = (0, nexus_1.objectType)({
    name: "User",
    definition(t) {
        t.model.id();
        t.model.name();
        t.model.email();
        t.model.password();
    }
});
