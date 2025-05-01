import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createTodo as createTodoApi } from "../../services/apiTodo";

export function useCreateTodo() {
  const queryClient = useQueryClient();

  const { mutate: createTodo, isLoading: isCreating } = useMutation({
    mutationFn: (todo)=> createTodoApi( todo ),
    onSuccess: () => {
      toast.success("Todo successfully Created");
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createTodo};
}