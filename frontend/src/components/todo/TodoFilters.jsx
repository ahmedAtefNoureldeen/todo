export function TodoFilters({ filter, setFilter }) {
    return (
      <div className="flex gap-2">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-lg transition-all ${
            filter === "all"
              ? "bg-indigo-600 text-white"
              : "bg-white text-gray-700 hover:bg-gray-100 border"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("pending")}
          className={`px-4 py-2 rounded-lg transition-all ${
            filter === "pending"
              ? "bg-indigo-600 text-white"
              : "bg-white text-gray-700 hover:bg-gray-100 border"
          }`}
        >
          Pending
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={`px-4 py-2 rounded-lg transition-all ${
            filter === "completed"
              ? "bg-indigo-600 text-white"
              : "bg-white text-gray-700 hover:bg-gray-100 border"
          }`}
        >
          Completed
        </button>
      </div>
    );
  }