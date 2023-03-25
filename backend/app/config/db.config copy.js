module.exports = [{
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "waytoedu_global_masters",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
},
{
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "waytoeduinstitutions",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}
];
