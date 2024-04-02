import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.render("index.ejs");
});

app.post("/submit", (req, res) => {
	console.log(req.body);
});

app.listen(port, () => {
	console.log("server running on port" + port);
});



