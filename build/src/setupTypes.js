"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const glob_1 = __importDefault(require("glob"));
const os_1 = __importDefault(require("os"));
const fs_1 = __importDefault(require("fs"));
const PATH = path_1.default.join(__dirname, "./graphql/index.ts");
(async () => {
    (0, glob_1.default)("src/graphql/**/*.ts", (err, matches) => {
        if (err) {
            console.log(err);
            process.exit(1);
        }
        let data = "";
        for (const match of matches) {
            const importPath = match.replace(".ts", "").replace("src/graphql", ".");
            if (importPath === "./index") {
                continue;
            }
            data += `export * from "${importPath}";${os_1.default.EOL}`;
        }
        fs_1.default.writeFileSync(PATH, data);
    });
})();
