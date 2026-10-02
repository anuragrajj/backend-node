import express from "express"
import cors from "cors"

const app = express();

const allowedOrigins = ["*"];

app.use(cors({
    origin: allowedOrigins
}));

app.get("/", (req, res) => {
    res.json({
        message: "app is running"
    })
})

app.listen(3000)