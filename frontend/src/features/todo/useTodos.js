import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../../services/apiTodo";

export function useTodos() {
  const { isLoading, data } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  return { isLoading, todos: data?.data?.todos|| [] };
}
