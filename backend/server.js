const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
dotenv.config();


const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({
    origin: process.env.FRONTEND_UR,
}))

app.use(cookieParser());

app.get("/", async (req, res) => {
    res.send("Welcome funded trader");
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})