const { Sequelize, DataTypes, Op } = require("sequelize");
import dotenv from "dotenv";
dotenv.config({});
import cli from "cli-color";

const sequelize = new Sequelize(
  process.env.DB,
  "postgres",
  String(process.env.DB_PASS),
  {
    host: "localhost",
    dialect: "postgres",
  }
);
interface data {
  sequelize: any;
  user: any;
  channel: any;
}

sequelize
  .authenticate()
  .then(() => {
    console.log(cli.green("connected"));
  })
  .catch((err: any) => {
    console.log(cli.red("not connected"));
  });

let db: any = {} as data;

db.sequelize = sequelize;
db.Op = Op;

db.user = require("./user")(sequelize, DataTypes);

// db.sequelize.sync({ force: true, alter: true });
module.exports = db;
