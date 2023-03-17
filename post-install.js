const fs = require("fs");
const path = require("path");

if (!fs.existsSync(path.resolve(__dirname, "./tsconfig.json"))) {
    fs.copyFileSync(path.resolve(__dirname, "./node_modules/@taskli-st/tsconfig/tsconfig-client.json"), path.resolve(__dirname, "./tsconfig.json"));
}