// exports.mysql = {
//   host: process.env.DBHOST,
//   port: 3306,
//   database: process.env.DBNAME,
//   user: process.env.DBUSER,
//   password: process.env.DBPASSWORD,
//   socketPath: process.env.INSTANCE_UNIX_SOCKET
// };

exports.mysql = {
  host: 10.186.160.3,
  port: 3306,
  database: database,
  user: duong,
  password: 123456$,
  socketPath: process.env.INSTANCE_UNIX_SOCKET
};
