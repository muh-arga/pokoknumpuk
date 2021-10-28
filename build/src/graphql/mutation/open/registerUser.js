"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const User_1 = require("../../models/User");
const nexus_1 = require("nexus");
const hash_1 = require("../../../common/hash");
const registerUserInput = (0, nexus_1.inputObjectType)({
    name: "registerUserInput",
    definition(t) {
        t.nonNull.string("name"),
            t.nonNull.string("email"),
            t.nonNull.string("password");
    }
});
exports.registerUser = (0, nexus_1.extendType)({
    type: "OpenMutation",
    definition(t) {
        t.field("registerUser", {
            type: User_1.User,
            args: {
                data: (0, nexus_1.arg)({
                    type: registerUserInput,
                }),
            },
            resolve: async (_, args, { prisma }) => {
                const { data } = args;
                const result = await prisma.user.create({
                    data: {
                        name: data.name,
                        email: data.email,
                        password: await hash_1.hashPassword.hash(data.password)
                    },
                });
                return result;
            },
        });
    },
});
