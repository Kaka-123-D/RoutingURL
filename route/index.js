const studentsRouter = require("./students");
const viewsRouter = require("./views");

module.exports = (app) => {
  app.use("/", viewsRouter);
  app.use("/students", studentsRouter);
};
