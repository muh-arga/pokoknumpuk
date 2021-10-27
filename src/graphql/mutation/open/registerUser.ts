import { User } from "../../models/User";
import { arg, extendType, inputObjectType } from "nexus";

const registerUserInput = inputObjectType({
    name: "registerUserInput",
    definition(t) {
        t.nonNull.string("name"),
        t.nonNull.string("email"),
        t.nonNull.string("password")
    }
})

export const registerUser = extendType({
    type: "OpenMutation",
    definition(t) {
        t.field("registerUser", {
            type: User,
            args: {
                data: arg({
                    type: registerUserInput,
                }),
            },
            resolve: async (_, args, { prisma }) => {
                const {data} = args;
                
                const result = await prisma.user.create({
                    data: {
                        name: data?.name,
                        email: data?.email,
                        password: data?.password
                    },
                });
                return result;
            }, 
        });
    },
});