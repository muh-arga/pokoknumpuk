import { nexusPrisma } from "nexus-plugin-prisma";
import { makeSchema } from "nexus";
import * as types from "./graphql";
import path from "path";

export const schema = makeSchema({
    types,
    plugins: [
      nexusPrisma({
        experimentalCRUD: true,
        shouldGenerateArtifacts: true,
      }),
    ],
    outputs: {
      typegen: path.join(
        __dirname,
        '../node_modules/@types/nexus-typegen/index.d.ts',
      ),
    },
    contextType: {
      module: path.join(__dirname, "context.ts"),
      export: 'Context',
    },
    sourceTypes: {
      modules: [
        {
          module: require.resolve('.prisma/client/index.d.ts'),
          alias: 'prisma',
        },
      ],
    },
  })