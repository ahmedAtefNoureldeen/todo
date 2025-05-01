import { useState } from "react";
import { useUpdateTodo } from "../features/todo/useUpdateTodo";
import { useDeleteTodo } from "../features/todo/useDeleteTodo";
import { useTodos } from "../features/todo/useTodos";
import CreateTask from "../features/todo/CreateTask";
import DashboardHeader from "./DashboardHeader";
import { TodoSearch } from "./todo/TodoSearch";
import { TodoFilters } from "./todo/TodoFilters";
import { LoadingSpinner } from "./common/LoadingSpinner";
import { StatisticsSection } from "./dashboard/StatisticsSection";
import { DailyTasksPanel } from "./dashboard/DailyTasksPanel";
import { WeeklyTasksPanel } from "./dashboard/WeeklyTasksPanel";
import { RecentTasksPanel } from "./dashboard/RecentTasksPanel";
import { TodoGrid } from "./todo/TodoGrid";

function TodoDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all"); // all, completed, pending
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const [newTodo, setNewTodo] = useState({
    title: "",
    description: "",
    dueDate: new Date().toISOString().split("T")[0],
    status: "pending"
  });

  const { todos, isLoading } = useTodos();
  const { updateTodo } = useUpdateTodo();
  const { deleteTodo } = useDeleteTodo();

  if (isLoading) {
    return <LoadingSpinner />
  }

  const filteredTodos = todos.filter((todo) => {
    const matchesSearch = todo.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter =
      filter === "all" ||
      (filter === "completed" && todo.status === "completed") ||
      (filter === "pending" && todo.status === "pending");
    return matchesSearch && matchesFilter;
  });



  
  // Get tasks due today
  const today = new Date().toISOString().split("T")[0];
  const dueTodayTodos = filteredTodos.filter(todo => {
    const dueDate = new Date(todo.dueDate).toISOString().split("T")[0];
    return dueDate === today && todo.status === "pending"
});



  // Get tasks due this week
  const oneWeekFromNow = new Date();
  oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7);
  const dueThisWeekTodos = filteredTodos.filter(todo => {
    const dueDate = new Date(todo.dueDate);
    return dueDate <= oneWeekFromNow && todo.status === "pending";
  });

  const handleEditClick = (todo) => {
    setSelectedTodo(todo);
    setShowEditModal(true);
  };
  
  const handleEditClose = () => {
    setShowEditModal(false);
    setSelectedTodo(null);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <DashboardHeader setShowCreateModal={setShowCreateModal} />
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-6 flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
           <TodoSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
           <TodoFilters filter={filter} setFilter={setFilter} />
        </div>

        <StatisticsSection todos={filteredTodos} />

        {/* Main Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Tasks Due Today */}
          <DailyTasksPanel todos={dueTodayTodos} onStatusChange={updateTodo} onDelete={deleteTodo} />
          
          {/* Middle Column - This Week's Tasks */}
          <WeeklyTasksPanel todos={dueThisWeekTodos} onStatusChange={updateTodo} />
          
          {/* Right Column - Recent Tasks */}
          <RecentTasksPanel todos={filteredTodos} onStatusChange={updateTodo} onDelete={deleteTodo} />
        </div>
        
        {/* Tasks Grid View */}
        <TodoGrid todos={filteredTodos} onStatusChange={updateTodo} onDelete={deleteTodo} handleEditClick={handleEditClick} />
       
      </div>

      {/* Create Todo Modal */}
      {showCreateModal && <CreateTask setShowCreateModal={setShowCreateModal} />}

      {showEditModal && selectedTodo && (
        <CreateTask
          taskToEdit={selectedTodo}
          setShowCreateModal={handleEditClose}
        />
      )}


    </div>
  );
}

export default TodoDashboard;