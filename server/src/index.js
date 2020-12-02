require("dotenv").config();
const service = require("restana")({
  errorHandler: require("./middleware/errorHandler"),
});

// Route handlers
service.use("/sessions", require("./routes/sessions"));
service.use("/documents", require("./routes/documents"));
// service.use("/users", require("./routes/users"));

// Start the server
service.start(process.env.PORT || 5000).then((service) => {
  console.log(`Service started on ${process.env.PORT || 5000}`);
});
