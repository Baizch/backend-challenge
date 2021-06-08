//import sequelize
const Sequelize = require('sequelize');

//import model
const PostModel = require('./models/posts');

//create instance
const sequelize = new Sequelize(
  process.env.DB_USER,
  process.env.DB_NAME,
  process.env.DB_PASSWORD,
  {
    host: 'remotemysql.com',
    dialect: 'mysql',
  }
);

//create table
const Post = PostModel(sequelize, Sequelize);

//sincronize tables
sequelize.sync({ force: false }).then(() => {
  console.log('Tables sincronized!');
});

module.exports = {
  Post,
};
