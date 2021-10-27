import { extendType, objectType } from "nexus";

export const MutationRoot = extendType({
    type: "Mutation",
    definition(t) {
        t.field("userMutation", {
            type: objectType({
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
            type: objectType({
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