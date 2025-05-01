export function StatCard({ icon, title, value, bgColor, textColor, children }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="flex items-center">
          <div className={`p-3 rounded-full ${bgColor} ${textColor} mr-4`}>
            {icon}
          </div>
          <div>
            <p className="text-sm text-gray-500">{title}</p>
            <p className="text-2xl font-bold text-gray-800">{value}</p>
          </div>
        </div>
        {children}
      </div>
    );
  }