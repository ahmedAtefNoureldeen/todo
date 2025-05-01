import { FiCalendar } from "react-icons/fi";
import { TodoList } from "../todo/TodoList";

export function WeeklyTasksPanel({ todos, onStatusChange  }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800 flex items-center">
          <FiCalendar className="mr-2 text-blue-500" size={18} />
          This Week
        </h2>
        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
          {todos.length}
        </span>
      </div>
      
      <TodoList 
        title="This Week"
        todos={todos}
        onStatusChange={onStatusChange}
        showMoreLink={todos.length > 3}

      />
    </div>
  );
}