import { FiCheckCircle, FiTrash2, FiXCircle } from "react-icons/fi";
import { TodoStatusBadge } from "../common/TodoStatusBadge";

export function TodoItem({ todo, onStatusChange, onDelete, showDueDate = false, showStatus = false }) {
  return (
    <div className="flex items-center p-3 hover:bg-gray-50 rounded-lg border border-gray-100">
      <div className="flex-1">
        <h3 className="font-medium text-gray-800">{todo.title}</h3>
        {showDueDate && (
          <p className="text-xs text-gray-500 mt-1">
            Due: {new Date(todo.dueDate).toLocaleDateString()}
          </p>
        )}
        {showStatus && (
          <div className="flex items-center mt-1">
            <TodoStatusBadge status={todo.status} />
          </div>
        )}
      </div>
      
      <div className="flex">
        <button
          onClick={() => onStatusChange({
            id: todo._id,
            status: todo.status === "completed" ? "pending" : "completed",
          })}
          className="p-2 text-green-600 hover:bg-green-50 rounded-full"
        >
          <FiCheckCircle size={18} />
        </button>
        
        {onDelete && (
          <button
            onClick={() => onDelete(todo._id)}
            className="p-2 text-red-600 hover:bg-red-50 rounded-full"
          >
            <FiTrash2 size={18} />
          </button>
        )}
      </div>
    </div>
  );
}