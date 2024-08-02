import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Todo, TodoState } from "../models/todos.model";

const initialState: TodoState = {
    todos: [],
    loading: false,
    error: null,
};

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        setTodos: (state, action: PayloadAction<Todo[]>) => {
            state.todos = action.payload;
        },
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.todos.push(action.payload);
        },
        updateTodo: (state, action: PayloadAction<Todo>) => {
            const index = state.todos.findIndex(
                (todo) => todo.id === action.payload.id
            );
            if (index !== -1) {
                state.todos[index] = action.payload;
            }
        },
        deleteTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
    },
});

export const fetchTodos = createAsyncThunk(
    "todos/fetchTodos",
    async (_, { dispatch }) => {
        dispatch(setLoading(true));
        try {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/todos"
            );
            const data: Todo[] = response.data;
            dispatch(setTodos(data.slice(0, 20)));
            localStorage.setItem("todos", JSON.stringify(data.slice(0, 20)));
        } catch (error: any) {
            dispatch(setError("Failed to fetch todos"));
        } finally {
            dispatch(setLoading(false));
        }
    }
);

export const addNewTodo = (title: string) => (dispatch: any) => {
    try {
        const newId = Date.now();

        const newTodo: Todo = {
            id: newId,
            title,
            completed: false,
        };

        const currentTodos: Todo[] = JSON.parse(
            localStorage.getItem("todos") || "[]"
        );
        const updatedTodos = [...currentTodos, newTodo];
        localStorage.setItem("todos", JSON.stringify(updatedTodos));

        dispatch(addTodo(newTodo));
    } catch (error: any) {
        dispatch(setError("Failed to add todo"));
    }
};

export const updateTodoStatus = (todo: Todo) => (dispatch: any) => {
    try {
        const currentTodos: Todo[] = JSON.parse(
            localStorage.getItem("todos") || "[]"
        );
        const updatedTodos = currentTodos.map((t: Todo) =>
            t.id === todo.id ? { ...t, completed: !t.completed } : t
        );
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        dispatch(updateTodo({ ...todo, completed: !todo.completed }));
    } catch (error: any) {
        dispatch(setError("Failed to update todo status"));
    }
};

export const deleteTodoItem = (id: number) => (dispatch: any) => {
    try {
        const currentTodos: Todo[] = JSON.parse(
            localStorage.getItem("todos") || "[]"
        );
        const updatedTodos = currentTodos.filter((todo: Todo) => todo.id !== id);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));

        dispatch(deleteTodo(id));
    } catch (error: any) {
        dispatch(setError("Failed to delete todo"));
    }
};

export const {
    setTodos,
    addTodo,
    updateTodo,
    deleteTodo,
    setLoading,
    setError,
} = todoSlice.actions;
export default todoSlice.reducer;
