const sqlite3 = require('sqlite3').verbose();
const bd = new sqlite3.Database('data.db');

const users_SCHEMA = `
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    name_completo VARCHAR(40) NOT NULL UNIQUE, 
    email VARCHAR(255) NOT NULL, 
    password VARCHAR(255) NOT NULL
)
`;

const INSERT_user_1 =
  `
INSERT INTO users (
    name_completo, 
    email,
    password
) SELECT 'Larissa', 'larissamarques@gmail.com.br', '123' WHERE NOT EXISTS (SELECT * FROM users WHERE email = 'larissamarques@gmail.com.br')
`;

const COURSES_SCHEMA =
  `
CREATE TABLE IF NOT EXISTS COURSES (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL, 
    price REAL NOT NULL,
    description TEXT DEFAULT ('') NOT NULL
)
`;

const INSERT_COURSE_1 =
  `
INSERT INTO COURSES (
    title,
    price,
    description
) SELECT 'Node na prática', 30.0, 'Como desenvolver com Node.' WHERE NOT EXISTS (SELECT * FROM COURSES WHERE title = 'Node na prática')
`;

const INSERT_COURSE_2 =
  `
INSERT INTO COURSES (
    title, 
    price,
    description
) SELECT 'JavaScript na prática', 40.0, 'Como desenvolver com JavaScript.' WHERE NOT EXISTS (SELECT * FROM COURSES WHERE title = 'JavaScript na prática')
`;

bd.serialize(() => {
  bd.run("PRAGMA foreign_keys=ON");
  bd.run(users_SCHEMA);
  bd.run(INSERT_user_1);
  bd.run(COURSES_SCHEMA);
  bd.run(INSERT_COURSE_1);
  bd.run(INSERT_COURSE_2);

  bd.each("SELECT * FROM users", (err, user) => {
    console.log('user: ');
    console.log(user);
  });
});

process.on('SIGINT', () =>
  bd.close(() => {
    console.log('BD encerrado!');
    process.exit(0);
  })
);

module.exports = bd;