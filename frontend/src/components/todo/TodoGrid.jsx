import { FiGrid } from "react-icons/fi";
import { EmptyState } from "../common/EmptyState";
import { TodoCard } from "./TodoCard";

export function TodoGrid({ todos, onStatusChange, onDelete, handleEditClick }) {
  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800 flex items-center">
          <FiGrid size={20} className="mr-2" />
          All Tasks
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {todos.map((todo) => (
          <TodoCard
            key={todo._id}
            todo={todo}
            onStatusChange={onStatusChange}
            onDelete={onDelete}
            handleEditClick={handleEditClick}
          />
        ))}
      </div>
      
      {todos.length === 0 && (
        <EmptyState 
          title="No tasks found" 
          description="Create a new task to get started!" 
        />
      )}
    </div>
  );
}