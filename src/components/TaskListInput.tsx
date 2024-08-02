import React from "react";
import arrowDown from "../assets/arrowDown.svg";
import arrowUp from "../assets/arrowUp.svg";
import deleteIcon from "../assets/deleteIcon.svg";
import { TaskListInputProps } from "../models/todos.model";


const TaskListInput: React.FC<TaskListInputProps> = ({
  todo,
  onUpdate,
  onDelete,
}) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <input
          type="checkbox"
          className="mr-2 bg-custom-sighnup-button-color"
          checked={todo.completed}
          onChange={onUpdate}
        />
        <input
          className={`${todo.completed ? "line-through text-gray-500" : ""
            } cursor-default pointer-events-none`}
          placeholder="Title..."
          value={todo.title}
          readOnly
        />
      </div>

      <div className="md:flex md:items-center md:space-x-2 hidden">
        <img src={arrowUp} className="w-4 h-4" alt="Arrow Up" />
        <img src={arrowDown} className="w-4 h-4" alt="Arrow Down" />
        <img
          src={deleteIcon}
          className="w-4 h-4 cursor-pointer"
          alt="Delete"
          onClick={onDelete}
        />
      </div>
    </div>
  );
};

export default TaskListInput;
