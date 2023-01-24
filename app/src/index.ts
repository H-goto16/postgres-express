import express from "express";
import pool from "./db";

const app = express();
const PORT: number = 3000;

app.use(express.json());

app.listen(PORT, () => {
	console.log("server is running on PORT " + PORT);
});

app.get("/", (req, res) => {
	// res.send("Hello");
	res.json({ content: "test" });
});

app.get("/users", (req, res) => {
	pool.query("SELECT * FROM users", (error, results) => {
		if (error) throw error;
		return res.status(200).json(results.rows);
	});
});
