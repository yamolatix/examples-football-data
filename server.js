const express = require("express");

const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser")
const volleyball = require("volleyball")

const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(volleyball);

app.use("/", routes);

// middleware error
app.use((err, req, res, next) => {
    res.status(500).send(err.message);
});

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
