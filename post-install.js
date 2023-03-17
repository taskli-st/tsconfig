const fs = require("fs");
const path = require("path");

console.log(__dirname);
console.log(path.resolve(__dirname, "../../../tsconfig.json"));

if (!fs.existsSync(path.resolve(__dirname, "../../../tsconfig.json"))) {
    fs.copyFileSync(path.resolve(__dirname, "./tsconfig-client.json"), path.resolve(__dirname, "../../../tsconfig.json"));
}