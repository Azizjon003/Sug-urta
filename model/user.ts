const User = (sequelize: any, DataTypes: any) => {
  const user = sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      telegramId: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM,
        values: ["admin", "user"],
        defaultValue: "user",
      },
      activ: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      editTarif: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "users",
    }
  );
  return user;
};

module.exports = User;
