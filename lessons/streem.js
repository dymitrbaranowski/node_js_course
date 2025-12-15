//Readable - чтение
//Writable - записать
// Duplex - Для чтения и записи + Writable
//Transform - Такой же как Duplex, но может изменить данные по мере чтения

const fs = require("fs");
const path = require("path");

// fs.readFile(path.resolve(__dirname, "test.txt"), (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data);
// });

//Один чанк по дефолту 64кб

// const stream = fs.createReadStream(
//   path.resolve(__dirname, "test.txt"),
//   "utf-8"
// );
// stream.on("data", (chunk) => {
//   console.log(chunk);
// });

// stream.on("end", () => console.log("Закончили читать"));
// stream.on("open", () => console.log("Начали читать"));
// stream.on("error", (e) => {
//   console.log(e);
// });

// const writableStrim = fs.createWriteStream(
//   path.resolve(__dirname, "test2.txt")
// );
// for (let i = 0; i < 20; i++) {
//   writableStrim.write(i + "\n");
// }

// writableStrim.end();
// writableStrim.closed()
// writableStrim.destroyed()
// writableStrim.on('error')

const http = require("http");

// http.createServer((req, res) => {
//   //req - readable straer
//   //res - writable straer
//   const stream = fs.createWriteStream(path.resolve(__dirname, "test.txt"));

//   //Стрим закончит читать раньше чем пользователь скачает
//   // stream.on("data", (chunk) => res.write(chunk));
//   // stream.on("end", (chunk) => res.end());

//   // stream.pipe(res)
// });
