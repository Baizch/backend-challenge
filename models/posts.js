//set table fields
module.exports = (sequelize, type) => {
  return sequelize.define("post", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: type.STRING,
    content: type.STRING,
    image: type.STRING(512),
    category: type.STRING,
    creationDate: type.DATE,
  });
};
