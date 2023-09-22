import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import dbConnection from "../db";

export class User extends Model<
  InferAttributes<User>,
  InferCreationAttributes<User>
> {
  declare id: CreationOptional<number>;

  declare username: string;

  declare password: string;

  public toJSON(): InferAttributes<User, { omit: "password" }> {
    const output = { ...super.toJSON() };
    const { password, ...response } = output;
    return response;
  }
}

User.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: dbConnection,
    tableName: "users",
    timestamps: false,
  }
);
