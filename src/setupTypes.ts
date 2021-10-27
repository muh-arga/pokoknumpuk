import path from "path";
import glob from "glob";
import os from "os";
import fs from "fs";

const PATH = path.join(__dirname, "./graphql/index.ts");
(async() => {
    glob("src/graphql/**/*.ts", (err, matches) => {
        if(err){
            console.log(err);
            process.exit(1);
        }
        let data = "";
        for(const match of matches ) {
            const importPath = match.replace(".ts", "").replace("src/graphql", ".");
            if(importPath === "./index") {
                continue;
            }
            data += `export * from "${importPath}";${os.EOL}`;
        }
        fs.writeFileSync(PATH, data);
    });
})();