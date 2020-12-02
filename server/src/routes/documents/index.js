const service = require("restana")();
const router = service.newRouter();

router.get("/", async (req, res) => {
  res.send("documents");
});

module.exports = router;
