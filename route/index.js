const studentsRouter = require("./students");
const viewsRouter = require("./views");

module.exports = (app) => {
  app.use("/students", studentsRouter);
  app.use("/", viewsRouter);
};
