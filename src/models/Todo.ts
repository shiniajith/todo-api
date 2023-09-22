import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  ForeignKey,
  DataTypes,
} from "sequelize";
import { User } from "./User";
import dbConnection from "../db";

export class Todo extends Model<
  InferAttributes<Todo>,
  InferCreationAttributes<Todo>
> {
  declare id: CreationOptional<number>;
  declare userId: ForeignKey<User["id"]>;
  declare todo: string;
  declare status: boolean;
  declare createdAt: CreationOptional<Date>;

  public toJSON(): InferAttributes<Todo> {
    console.log(super.toJSON());
    return super.toJSON();
  }
}

Todo.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      field: "user_id",
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    todo: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.BOOLEAN,
    },
    createdAt: {
      type: DataTypes.DATE,
      field: "created_at",
    },
  },
  {
    sequelize: dbConnection,
    createdAt: true,
    updatedAt: false,
    tableName: "todos",
  }
);
