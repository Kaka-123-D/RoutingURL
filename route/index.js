const studentsRouter = require("./students");
const fallbackRouter = require("./fallback");
const viewsRouter = require("./views");

module.exports = (app) => {
  app.use("/views", viewsRouter);
  app.use("/students", studentsRouter);
  app.use("/*", fallbackRouter);
};
