const service = require("restana")();
const router = service.newRouter();
const createError = require("http-errors");
const schemas = require("./schema");
const { Users } = require("./model");

router.get("/", async (req, res) => {
  res.send("users");
});

router.post("/", async (req, res) => {
  res.send({}, 200);
});

module.exports = router;
