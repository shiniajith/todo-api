export interface CreateTodoPayload {
  todo: string;
}
export interface TodoInsert {
  userId: number;
  todo: string;
  status: boolean;
}
export interface TodoUpdate {
  todo: string;
  status: boolean;
}
