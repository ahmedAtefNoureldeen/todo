import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useUser() {
  const { isLoading, data } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

   const user = data?.user;
  const isAuthenticated = user !== undefined && user !== null;

  return { isLoading, user, isAuthenticated  , isError: user == false};
}
