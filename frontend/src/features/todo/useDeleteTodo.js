import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteTodo as deleteTodoapi } from "../../services/apiTodo";

export function useDeleteTodo() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteTodo } = useMutation({
    mutationFn: deleteTodoapi,
    onSuccess: () => {
      toast.success("Booking successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteTodo };
}
