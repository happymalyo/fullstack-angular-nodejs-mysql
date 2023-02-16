module.exports = {
  HOST: "127.0.0.1",
  USER: "your-user-name",
  PASSWORD: "your-password",
  DB: "testdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
