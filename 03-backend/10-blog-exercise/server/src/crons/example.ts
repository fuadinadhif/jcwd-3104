// 1. npm i node-cron || npm i --save node-cron
// 2. npm i -D @types/node-cron || npm i --save-dev @types/node-cron

import cron from "node-cron";

cron.schedule("* * * * * 4", () => {
  console.log("Every second!");
});

cron.schedule("*/3 * * * * 4", () => {
  console.log("Every 3 second!");
});

cron.schedule("*/6 * * * * 4", () => {
  console.log("Every 6 second!");
});
