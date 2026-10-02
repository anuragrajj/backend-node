import express from "express"

const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "app is running"
    })
})

app.listen(3000)