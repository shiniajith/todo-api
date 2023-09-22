"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
const sequelize_1 = require("sequelize");
const User_1 = require("./User");
const db_1 = __importDefault(require("../db"));
class Todo extends sequelize_1.Model {
    toJSON() {
        console.log(super.toJSON());
        return super.toJSON();
    }
}
exports.Todo = Todo;
Todo.init({
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        field: "user_id",
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: User_1.User,
            key: "id",
        },
    },
    todo: {
        type: sequelize_1.DataTypes.STRING,
    },
    status: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        field: "created_at",
    },
}, {
    sequelize: db_1.default,
    createdAt: true,
    updatedAt: false,
    tableName: "todos",
});
//# sourceMappingURL=Todo.js.map