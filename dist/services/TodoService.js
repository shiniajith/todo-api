"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const typedi_1 = require("typedi");
const Todo_1 = require("../models/Todo");
const routing_controllers_1 = require("routing-controllers");
let TodoService = class TodoService {
    createTodo(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdTodo = yield Todo_1.Todo.create(data);
            return createdTodo;
        });
    }
    updateTodo(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const todo = yield Todo_1.Todo.findOne({
                where: { id: id },
            });
            if (!todo) {
                throw new routing_controllers_1.BadRequestError("Invalid todo");
            }
            yield todo.update(data);
            return todo;
        });
    }
    findTodoById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const todo = yield Todo_1.Todo.findOne({
                where: { id: id },
            });
            if (!todo) {
                throw new routing_controllers_1.BadRequestError("Invalid todo");
            }
            return todo;
        });
    }
    findAllTodos(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const allTodos = yield Todo_1.Todo.findAll({
                where: { userId: userId },
            });
            return allTodos;
        });
    }
    deleteTodo(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const todoForDeletion = yield Todo_1.Todo.findOne({ where: { id: id } });
            if (!todoForDeletion) {
                throw new routing_controllers_1.BadRequestError("Invalid id, try again");
            }
            yield todoForDeletion.destroy();
            return todoForDeletion;
        });
    }
};
exports.TodoService = TodoService;
exports.TodoService = TodoService = __decorate([
    (0, typedi_1.Service)()
], TodoService);
//# sourceMappingURL=TodoService.js.map