const knex = require("knex")

const connectedKnex = knex({
    client: "sqlite3",
    connection: {
        filename : "todos.sqlite3"
    }
});


module.exports = connectedKnex