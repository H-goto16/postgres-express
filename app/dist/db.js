"use strict";
exports.__esModule = true;
var pg_1 = require("pg");
var pool = new pg_1.Pool({
    user: 'postgres',
    host: 'postgres',
    database: 'postgres_db',
    password: 'password',
    port: 5432
});
exports["default"] = pool;
//# sourceMappingURL=db.js.map