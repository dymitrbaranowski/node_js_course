const path = require("path");

console.log(path.join(__dirname, "first", "second", "third", "..", ".."));

const fullpath = path.resolve(__dirname, "first", "second", "third.js");
console.log("Парсинг пути", path.parse(fullpath));
console.log("Разделитель в ОС", path.sep);
console.log("Проверка на абсолютный путь", path.isAbsolute(fullpath));
console.log(path.basename(fullpath));
console.log(path.extname(fullpath));
console.log(path.extname(fullpath));

//-----------------------------

const siteURL = "http://localhost:8080/users?id=5123";

const url = new URL(siteURL);

console.log(url);
