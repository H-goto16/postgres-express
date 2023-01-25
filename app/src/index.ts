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

app.get("/users/:id", (req, res) => {
	console.log(req.params.id);
	pool.query(
		"SELECT * FROM users WHERE id = $1",
		[req.params.id],
		(error, results) => {
			if (error) throw error;
			return res.status(200).json(results.rows);
		}
	);
});
app.get("/users", (req, res) => {
	pool.query("SELECT * FROM users", (error, results) => {
		if (error) throw error;
		return res.status(200).json(results.rows);
	});
});

app.post("/users", (req, res) => {
	const { name, email, age } = req.body;
	pool.query(
		"SELECT s FROM users s WHERE s.email = $1",
		[email],
		(error, results) => {
			if (results.rows.length) {
				return res.send("user was already exist");
			}
			pool.query(
				"INSERT INTO users(name, email, age) values($1, $2, $3)",
				[name, email, age],
				(error, results) => {
					if (error) throw error;
					res.status(201).send("success post");
				}
			);
		}
	);
});

app.delete("/users/:id", (req, res) => {
	const id = req.params.id;
	pool.query("SELECT FROM users WHERE id = $1", [id], (error, results) => {
		if (error) throw error;
		const isUserExisted = results.rows.length;
		if (!isUserExisted) {
			return res.send("user does not exist");
		}

		pool.query("DELETE FROM users WHERE id = $1", [id], (error, results) => {
			if (error) throw error;
			return res.status(200).send("success delete");
		});
	});
});
