export function TodoStatusBadge({ status }) {
    const colors = status === "completed" 
      ? "bg-green-100 text-green-800"
      : "bg-yellow-100 text-yellow-800";
      
    return (
      <span className={`text-xs px-2 py-0.5 rounded-full ${colors}`}>
        {status === "completed" ? "Completed" : "Pending"}
      </span>
    );
  }