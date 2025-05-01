import { FiCalendar, FiCheckCircle, FiXCircle, FiEdit, FiTrash2 } from "react-icons/fi";
import { TodoStatusBadge } from "../common/TodoStatusBadge";

export function TodoCard({ todo, onStatusChange, onDelete , handleEditClick }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-gray-800">{todo.title}</h3>
        <div>
          <TodoStatusBadge status={todo.status} />
        </div>
      </div>
      
      <p className="text-gray-600 mb-3 text-sm">
        {todo.description.length > 100 
          ? todo.description.substring(0, 100) + "..." 
          : todo.description}
      </p>
      
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center text-sm text-gray-500">
          <FiCalendar size={14} className="mr-1" />
          {new Date(todo.dueDate).toLocaleDateString()}
        </div>
        
        <div className="flex items-center gap-1">
          <button
            onClick={() => onStatusChange({
              id: todo._id,
              status: todo.status === "completed" ? "pending" : "completed",
            })}
            className={`p-1.5 rounded-full transition-colors ${
              todo.status === "completed"
                ? "text-green-600 hover:bg-green-50"
                : "text-yellow-600 hover:bg-yellow-50"
            }`}
          >
            {todo.status === "completed" ? (
              <FiXCircle size={16} />
            ) : (
              <FiCheckCircle size={16} />
            )}
          </button>
          <button
            className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-full"
            onClick={() => handleEditClick(todo)}
          >
            <FiEdit size={16} />
          </button>
          <button
            onClick={() => onDelete(todo._id)}
            className="p-1.5 text-red-600 hover:bg-red-50 rounded-full"
          >
            <FiTrash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}