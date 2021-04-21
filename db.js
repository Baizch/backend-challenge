//import sequelize
const Sequelize = require("sequelize");

//import model
const PostModel = require("./models/posts");

//create instance
const sequelize = new Sequelize("uhwW6fsNq9", "uhwW6fsNq9", "XH9nDFx4o3", {
  host: "remotemysql.com",
  dialect: "mysql",
});

//create table
const Post = PostModel(sequelize, Sequelize);

//sincronize tables
sequelize.sync({ force: false }).then(() => {
  console.log("Tables sincronized!");
});

module.exports = {
  Post,
};
