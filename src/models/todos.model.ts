export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export interface TodoState {
    todos: Todo[];
    loading: boolean;
    error: string | null;
}


export interface TaskListInputProps {
    todo: Todo;
    onUpdate: () => void;
    onDelete: () => void;
}