import { FiPlus } from "react-icons/fi";

export default function DashboardHeader({setShowCreateModal}) {
  return (
    <header className=" px-6 py-4">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold text-indigo-700">Task Dashboard</h1>
      <button
        onClick={() => setShowCreateModal(true)}
        className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
      >
        <FiPlus size={20} />
        Create Task
      </button>
    </div>
  </header>
  )
}
