const os = require("os");
const cluster = require("cluster");

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus().length);

// if (cluster.isMaster) {
//   for (let i = 0; i < os.cpus().length - 2; i++) {
//     cluster.fork();
//   }
//   cluster.on("exit", (worker, code, signal) => {
//     console.log(`worker with pid = ${worker.process.pid} killed`);
//     if (code === null) {
//       cluster.fork();
//     } else {
//       console.log("worker is dead...");
//     }
//   });
// } else {
//   console.log(`Worker with pid= ${process.pid} started`);

//   setInterval(() => {
//     console.log(` worker with pid= ${process.pid} still wark`);
//   }, 5000);
// }
