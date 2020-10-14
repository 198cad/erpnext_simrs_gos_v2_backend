const mysql = require("mysql");

let pool = mysql.createPool({
  // host: "103.112.163.253",
  host: "168.168.168.124",
  user: "admin",
  password: "S!MRSGos2",
  port: "3306",
  // port: "3309",
  connectionLimit: 10,
  multipleStatements: true,
});

const sqlAction = (_query) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, conn) => {
      if (err) {
        reject(err);
      } else {
        conn.query(_query, (err, rows, fields) => {
          if (err) {
            reject(err);
            conn.release();
          } else {
            resolve(rows);
            conn.release();
          }
        });
      }
    });
  });
};

module.exports = sqlAction;
