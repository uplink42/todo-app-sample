export interface Todo {
  id: number;
  description: string;
  status: TodoStatus;
}

export interface TodoHistory {
  timestamp: Date;
  event: string;
}

export type TodoStatus = "DONE" | "UNDONE";
