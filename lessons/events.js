const Emitter = require("events");

const emitter = new Emitter();

// document.addEventListener

// const callback = (data, second, third) => {
//   console.log("Вы прислали сообщение " + data);
//   console.log("Второй аргумент " + second);
// };

// emitter.once("message", callback);

// emitter.removeAllListeners();
// emitter.rawListeners("message", callback);

// const MESSAGE = process.env.message || "";

// if (MESSAGE) {
//   emitter.emit("message", MESSAGE, 123);
// } else {
//   emitter.emit("message", "Вы не указали сообщение");
// }
