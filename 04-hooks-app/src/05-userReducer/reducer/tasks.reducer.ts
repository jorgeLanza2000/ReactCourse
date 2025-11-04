import * as z from 'zod';

import type { TaskState, Todo } from '../interface/task.interface';

export type TaskAction =
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'TOGGLE_TODO'; payload: number }
  | { type: 'DELETE_TODO'; payload: number };

const TodoSchema = z.object({
  id: z.number(),
  text: z.string(),
  completed: z.boolean(),
});

const TaskStateScheme = z.object({
  todos: z.array(TodoSchema),
  length: z.number(),
  tasksCompleted: z.number(),
  tasksPending: z.number(),
});

export const getTasksInitialState = (): TaskState => {
  const localStorageState = localStorage.getItem('tasks-state');
  if (!localStorageState) {
    return {
      todos: [],
      tasksCompleted: 0,
      tasksPending: 0,
      length: 0,
    };
  }

  const result = TaskStateScheme.safeParse(JSON.parse(localStorageState));

  if (result.error) {
    console.log(result.error);
    return {
      todos: [],
      tasksCompleted: 0,
      tasksPending: 0,
      length: 0,
    };
  }

  return result.data;
};

export const taskReducer = (
  state: TaskState,
  action: TaskAction
): TaskState => {
  switch (action.type) {
    case 'ADD_TODO': {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };

      return {
        ...state,
        todos: [...state.todos, newTodo],
        length: state.todos.length + 1,
        tasksPending: state.tasksPending + 1,
      };
    }
    case 'TOGGLE_TODO': {
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });

      const completed = updatedTodos.filter((todo) => todo.completed).length;

      return {
        ...state,
        todos: updatedTodos,
        tasksPending: state.length - completed,
        tasksCompleted: completed,
      };
    }
    case 'DELETE_TODO': {
      const updatedTodos = state.todos.filter(
        (todo) => todo.id != action.payload
      );

      const completed = updatedTodos.filter((todo) => todo.completed).length;

      return {
        ...state,
        todos: updatedTodos,
        length: updatedTodos.length,
        tasksPending: updatedTodos.length - completed,
        tasksCompleted: completed,
      };
    }
    default:
      return state;
  }
};
