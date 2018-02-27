const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/films.sqlite');

db.serialize(() => {
  let select = 'select * from films order by name';
  db.run('delete from films')
    .run('insert into films (name) values (?)', 'Star Wars IV')
    .run('insert into films (name) values (?)', 'Star Wars I')
    .run('insert into films (name) values (?)', 'Star Wars II')
    .all(select, [], (err, rows) => {
      if (err) {
        throw err;
      }
      console.log("Size " + rows.length);
      rows.forEach((row) => {
        console.log("Row " + row.id + " " + row.name + "\n");
      });
    })
   .each(select, [], (err, row) => {
     if (err) {
       throw err;
     }
     console.log(row);
   });
});

db.close();
