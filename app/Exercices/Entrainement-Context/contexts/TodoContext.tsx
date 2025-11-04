"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useMemo,
  useReducer,
} from "react";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

type Filter = "all" | "active" | "completed";

interface TodoState {
  todos: Todo[];
  filter: Filter;
}

type TodoAction =
  | { type: "ADD_TODO"; text: string }
  | { type: "REMOVE_TODO"; id: string }
  | { type: "TOGGLE_TODO"; id: string }
  | { type: "EDIT_TODO"; id: string; text: string }
  | { type: "SET_FILTER"; filter: Filter }
  | { type: "CLEAR_COMPLETED" };

interface TodoContextType {
  state: TodoState;
  dispatch: Dispatch<TodoAction>;
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  editTodo: (id: string, text: string) => void;
  setFilter: (filter: Filter) => void;
  clearCompleted: () => void;
  filteredTodos: Todo[];
  stats: {
    total: number;
    active: number;
    completed: number;
  };
}

const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo: Todo = {
        id: Date.now().toString(),
        text: action.text,
        completed: false,
        createdAt: new Date(),
      };
      return { ...state, todos: [...state.todos, newTodo] };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case "EDIT_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, text: action.text } : todo
        ),
      };
    case "SET_FILTER":
      return { ...state, filter: action.filter };
    case "CLEAR_COMPLETED":
      return { ...state, todos: state.todos.filter((todo) => !todo.completed) };
    default:
      return state;
  }
};

const TodoContext = createContext<TodoContextType | null>(null);

export const TodoProdiver = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(todoReducer, {
    todos: [],
    filter: "all",
  });

  const addTodo = (text: string) => {
    dispatch({ type: "ADD_TODO", text: text });
  };

  const removeTodo = (id: string) => {
    dispatch({ type: "REMOVE_TODO", id: id });
  };

  const toggleTodo = (id: string) => {
    dispatch({ type: "TOGGLE_TODO", id: id });
  };

  const editTodo = (id: string, text: string) => {
    dispatch({ type: "EDIT_TODO", id: id, text: text });
  };

  const setFilter = (filter: Filter) => {
    dispatch({ type: "SET_FILTER", filter: filter });
  };

  const clearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  const filteredTodos = useMemo(
    () =>
      state.todos.filter((todo) => {
        if (state.filter === "active") return !todo.completed;
        if (state.filter === "completed") return todo.completed;
        return true;
      }),
    [state.filter, state.todos]
  );

  const stats = useMemo(() => {
    {
      return {
        total: state.todos.length,
        active: state.todos.filter((todo) => !todo.completed).length,
        completed: state.todos.filter((todo) => todo.completed).length,
      };
    }
  }, [state.todos]);

  return (
    <TodoContext.Provider
      value={{
        state,
        dispatch,
        addTodo,
        removeTodo,
        toggleTodo,
        editTodo,
        setFilter,
        clearCompleted,
        filteredTodos,
        stats,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);

  if (!context)
    throw new Error("useTodoContext must be used within TodoProvider");

  return context;
};
