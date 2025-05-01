import { Navigate } from "react-router-dom";

import { useUser } from "../features/auth/useUser";

function ProtectedRoute({ children }) {
  const {isLoading, isAuthenticated  } = useUser();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="text-gray-500">Loading...</div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute; 