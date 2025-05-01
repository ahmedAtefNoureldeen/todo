import { FiChevronRight } from "react-icons/fi";
import { TodoItem } from "./TodoItem";

export function TodoList({ title, todos, icon, onStatusChange, onDelete, showMoreLink, badgeColor, badgeTextColor }) {
  return (
    <div className="space-y-3">
      {todos.length > 0 ? (
        todos.slice(0, 3).map((todo) => (
          <TodoItem 
            key={todo._id}
            todo={todo}
            onStatusChange={onStatusChange}
            onDelete={onDelete}
            showDueDate={title === "This Week"}
            showStatus={title === "Recent Tasks"}
          />
        ))
      ) : (
        <p className="text-center text-gray-500 py-4">No tasks {title.toLowerCase()}!</p>
      )}
      
      {todos.length > 3 && showMoreLink && (
        <a href="#" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center justify-center mt-2">
          View all {todos.length} tasks
          <FiChevronRight size={16} className="ml-1" />
        </a>
      )}
    </div>
  );
}