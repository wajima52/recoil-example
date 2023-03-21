import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./lib/graphql/schema.graphql",
  documents: "./lib/graphql/queries/**/*.graphql",
  generates: {
    "./lib/graphql/types/": {
      preset: "client",
    },
  },
};
export default config;
