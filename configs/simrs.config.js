const mysql = require("mysql");

let pool = mysql.createPool({
  // host: "103.112.163.253",
  host: "168.168.168.122",
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
            conn.release();
            reject(err);
          }
          conn.release();
          resolve(rows);
        });
      }
    });
  });
};

module.exports = sqlAction;
