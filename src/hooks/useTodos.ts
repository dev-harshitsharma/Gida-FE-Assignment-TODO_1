import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../state/store';
import {
  fetchTodos,
  addNewTodo,
  updateTodoStatus,
  deleteTodoItem,
} from '../state/todoSlice';

const useTodos = () => {
  const [newTitle, setNewTitle] = useState('');
  const dispatch: AppDispatch = useDispatch();
  const { todos, loading, error } = useSelector(
    (state: RootState) => state.todos
  );

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAdd = () => {
    if (newTitle.trim()) {
      dispatch(addNewTodo(newTitle));
      setNewTitle('');
    }
  };

  const handleUpdate = (todoId: number) => {
    const todo = todos.find((todo) => todo.id === todoId);
    if (todo) {
      dispatch(updateTodoStatus(todo));
    }
  };

  const handleDelete = (todoId: number) => {
    if (window.confirm("Are you sure you want to delete this todo?")) {
      dispatch(deleteTodoItem(todoId));
    }
  };

  return {
    newTitle,
    setNewTitle,
    todos,
    loading,
    error,
    handleAdd,
    handleUpdate,
    handleDelete,
  };
};

export default useTodos;
