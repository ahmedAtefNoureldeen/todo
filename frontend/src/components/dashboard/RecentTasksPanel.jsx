import { FiList } from "react-icons/fi";
import { TodoList } from "../todo/TodoList";

export function RecentTasksPanel({ todos, onStatusChange, onDelete }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800 flex items-center">
          <FiList className="mr-2 text-purple-500" size={18} />
          Recent Tasks
        </h2>
      </div>
      
      <TodoList 
        title="Recent Tasks"
        todos={todos}
        onStatusChange={onStatusChange}
        onDelete={onDelete}
        showMoreLink={true}
      />
    </div>
  );
}