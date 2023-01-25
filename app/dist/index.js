"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var db_1 = __importDefault(require("./db"));
var app = (0, express_1["default"])();
var PORT = 3000;
app.use(express_1["default"].json());
app.listen(PORT, function () {
    console.log("server is running on PORT " + PORT);
});
app.get("/", function (req, res) {
    // res.send("Hello");
    res.json({ content: "test" });
});
app.get("/users", function (req, res) {
    db_1["default"].query("SELECT * FROM users", function (error, results) {
        if (error)
            throw error;
        return res.status(200).json(results.rows);
    });
});
//# sourceMappingURL=index.js.map