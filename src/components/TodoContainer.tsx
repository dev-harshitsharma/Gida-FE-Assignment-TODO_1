import React from "react";
import TaskListInput from "./TaskListInput";
import SkeletonLoader from "./SkeletonLoader";
import useTodos from "../hooks/useTodos";
import eyeIcon from "../assets/eyeIcon.svg";
import plusIcon from "../assets/plusIcon.svg";

const TodoContainer: React.FC = () => {
  const {
    newTitle,
    setNewTitle,
    todos,
    loading,
    error,
    handleAdd,
    handleUpdate,
    handleDelete,
  } = useTodos();

  return (
    <div className="bg-white w-full sm:mx-3 md:mx-3 max-h-[32rem] rounded-md px-10 py-10 flex flex-col">
      {loading ? (
        <SkeletonLoader />
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <div>
            <input
              placeholder="Untitled"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="font-semibold border-b-2 mb-2 py-2 border-customer-border-line w-full text-2xl px-2 placeholder-black"
            />
          </div>
          <div className="flex-grow overflow-y-scroll p-5 space-y-4">
            {todos.map((todo) => (
              <TaskListInput
                key={todo.id}
                todo={todo}
                onUpdate={() => handleUpdate(todo.id)}
                onDelete={() => handleDelete(todo.id)}
              />
            ))}
          </div>
        </>
      )}
      <div className="mt-4 py-2 border-t-2  border-customer-border-line">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex items-center space-x-2">
            <img src={eyeIcon} className="w-4 h-4 font-bold" alt="Eye Icon" />
            <p className="text-slate-400 tracking-tighter">
              Completed {todos.filter((todo) => todo.completed).length} of{" "}
              {todos.length}
            </p>
          </div>
          <div className="flex items-center space-x-1 hover:bg-gray-300 rounded-md px-2 py-1 cursor-pointer ">
            <img src={plusIcon} className="w-4 h-4" alt="Plus Icon" />
            <button onClick={handleAdd}>Add Task</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
