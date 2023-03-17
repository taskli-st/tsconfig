const fs = require("fs");
const path = require("path");

fs.writeFileSync("alex.txt", process.env.INIT_CWD);

if (!fs.existsSync(path.resolve(process.env.INIT_CWD, "./tsconfig.json"))) {
    fs.copyFileSync(path.resolve(process.env.INIT_CWD, "./node_modules/@taskli-st/tsconfig/tsconfig-client.json"), path.resolve(process.env.INIT_CWD, "./tsconfig.json"));
}