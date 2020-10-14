const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ROUTE
const patientRouter = require("./routes/patient.route");
app.use(patientRouter);
app.use(require("./routes/user.route"));

const main = async () => {
  app.listen(5000, () => {
    console.log("Server jalan pada port 5000");
  });
};

main();
