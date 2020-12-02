const service = require("restana")();
const router = service.newRouter();
const createError = require("http-errors");
const schemas = require("./schema");
const { Sessions } = require("./model");

/**
 * Creates a new session for the user. If the user doesn't exist, it will create a new user record.
 */
router.post("/sessions", async (req, res) => {
  res.send({}, 200);
});

/**
 * Destroy a session (log out)
 */
router.delete("/sessions", async (req, res) => {
  res.send({}, 204);
});

/**
 * Use a refresh token to reauthenticate
 */
router.post("/sessions/refresh", async (req, res) => {
  res.send({}, 200);
});

module.exports = router;
