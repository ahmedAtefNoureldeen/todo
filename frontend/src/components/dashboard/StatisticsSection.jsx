import { FiInbox, FiCheckSquare, FiClock, FiPieChart } from "react-icons/fi";
import { StatCard } from "../common/StatCard";

export function StatisticsSection({ todos }) {
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.status === "completed").length;
  const pendingTodos = todos.filter(todo => todo.status === "pending").length;
  const completionRate = totalTodos > 0 ? Math.round((completedTodos / totalTodos) * 100) : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
      {/* Total Tasks */}
      <StatCard 
        icon={<FiInbox size={24} />}
        title="Total Tasks"
        value={totalTodos}
        bgColor="bg-blue-100"
        textColor="text-blue-800"
      />
      
      {/* Completed Tasks */}
      <StatCard 
        icon={<FiCheckSquare size={24} />}
        title="Completed"
        value={completedTodos}
        bgColor="bg-green-100"
        textColor="text-green-800"
      />
      
      {/* Pending Tasks */}
      <StatCard 
        icon={<FiClock size={24} />}
        title="Pending"
        value={pendingTodos}
        bgColor="bg-yellow-100"
        textColor="text-yellow-800"
      />
      
      {/* Completion Rate */}
      <StatCard 
        icon={<FiPieChart size={24} />}
        title="Completion Rate"
        value={`${completionRate}%`}
        bgColor="bg-purple-100"
        textColor="text-purple-800"
      >
        <div className="mt-4 w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-purple-600 h-2.5 rounded-full" 
            style={{ width: `${completionRate}%` }}>
          </div>
        </div>
      </StatCard>
    </div>
  );
}
