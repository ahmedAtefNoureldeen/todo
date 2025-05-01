export function EmptyState({ title, description, icon }) {
    return (
      <div className="text-center bg-white rounded-lg shadow-sm p-12">
        <div className="text-gray-400 mb-4">
          {icon || (
            <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          )}
        </div>
        <p className="text-xl font-medium text-gray-500">{title || "No items found"}</p>
        <p className="text-gray-500 mt-1">{description || "Nothing to display here"}</p>
      </div>
    );
  }