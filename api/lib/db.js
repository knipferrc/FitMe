const Database = require('better-sqlite3')

const db = new Database('api/data/dev.db')

const usersTable = db.prepare(
  'CREATE TABLE if not exists users(id text, email text, password text, firstName text, lastName text)'
)
usersTable.run()

module.exports = db
