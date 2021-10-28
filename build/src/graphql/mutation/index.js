"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MutationRoot = void 0;
const nexus_1 = require("nexus");
exports.MutationRoot = (0, nexus_1.extendType)({
    type: "Mutation",
    definition(t) {
        t.field("userMutation", {
            type: (0, nexus_1.objectType)({
                name: "UserMutation",
                definition(t) {
                    t.string("_", {
                        resolve: () => "_",
                    });
                },
            }),
            resolve: () => "_",
        });
        t.field("openMutation", {
            type: (0, nexus_1.objectType)({
                name: "OpenMutation",
                definition(t) {
                    t.string("_", {
                        resolve: () => "_",
                    });
                },
            }),
            resolve: () => "_",
        });
    },
});
