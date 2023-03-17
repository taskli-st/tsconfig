const fs = require("fs");

if (!fs.existsSync("./tsconfig.json")) {
    fs.copyFileSync("./node_modules/@taskli-st/tsconfig/tsconfig-client.json", "./tsconfig.json");
}