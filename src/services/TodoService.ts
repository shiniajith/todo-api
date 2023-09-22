import { Service } from "typedi";
import { Todo } from "../models/Todo";
import { CreateTodoPayload, TodoInsert, TodoUpdate } from "../types/todoTypes";
import { BadRequestError } from "routing-controllers";

@Service()
export class TodoService {
  async createTodo(data: TodoInsert): Promise<Todo> {
    const createdTodo = await Todo.create(data);
    return createdTodo;
  }

  async updateTodo(id: number, data: TodoUpdate): Promise<Todo> {
    const todo = await Todo.findOne({
      where: { id: id },
    });

    if (!todo) {
      throw new BadRequestError("Invalid todo");
    }

    await todo.update(data);

    return todo;
  }

  async findTodoById(id: number): Promise<Todo> {
    const todo = await Todo.findOne({
      where: { id: id },
    });
    if (!todo) {
      throw new BadRequestError("Invalid todo");
    }

    return todo;
  }

  async findAllTodos(userId: number): Promise<Todo[]> {
    const allTodos = await Todo.findAll({
      where: { userId: userId },
    });

    return allTodos;
  }

  async deleteTodo(id: number): Promise<Todo> {
    const todoForDeletion = await Todo.findOne({ where: { id: id } });
    if (!todoForDeletion) {
      throw new BadRequestError("Invalid id, try again");
    }
    await todoForDeletion.destroy();

    return todoForDeletion;
  }
}
