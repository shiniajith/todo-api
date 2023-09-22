import { Request } from "express";
import {
  Body,
  JsonController,
  Patch,
  Post,
  Req,
  Get,
  UseBefore,
  Param,
  Params,
  Delete,
} from "routing-controllers";
import { CreateTodoPayload, TodoUpdate } from "../types/todoTypes";
import { TodoService } from "../services/TodoService";
import { Service } from "typedi";
import { autheriseUser } from "../middlewares/authMiddleware";
import { UserDetails } from "../types/userTypes";
import { Todo } from "../models/Todo";

@JsonController("/todo")
@Service()
@UseBefore(autheriseUser)
export abstract class TodoController {
  constructor(private todoService: TodoService) {}

  @Post("/")
  async createTodo(
    @Body() body: CreateTodoPayload,
    @Req() req: Request
  ): Promise<Todo> {
    const data = {
      userId: (req.user as UserDetails).id,
      todo: body.todo,
      status: false,
    };
    const createdTodo = await this.todoService.createTodo(data);
    return createdTodo;
  }

  @Patch("/:id")
  async updateStatusTodo(
    @Body() body: TodoUpdate,
    @Param("id") todoId: string
  ): Promise<Todo> {
    const data = body;
    const id = parseInt(todoId);
    const updatedTodo = await this.todoService.updateTodo(id, data);
    return updatedTodo;
  }

  @Get("/")
  async getAllTodos(@Req() req: Request): Promise<Todo[]> {
    const userId = (req.user as UserDetails).id;
    const allTodos = await this.todoService.findAllTodos(userId);
    return allTodos;
  }

  @Get("/:id")
  async getTodoById(@Param("id") todoId: string): Promise<Todo> {
    const id = parseInt(todoId);
    const todo = await this.todoService.findTodoById(id);
    return todo;
  }
  @Delete("/:id")
  async deleteTodo(@Param("id") id: number): Promise<Todo> {
    const TodoId = id;
    const deletedTodo = await this.todoService.deleteTodo(TodoId);
    return deletedTodo;
  }
}
