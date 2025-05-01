import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { editTodo as editTodoApi} from "../../services/apiTodo";

export function useEditTodo() {
  const queryClient = useQueryClient();

  const { mutate, isLoading: isEditing } = useMutation({
    mutationFn: editTodoApi,
    onSuccess: () => {
      toast.success("todos successfully updated");
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editTodo: (id, todoData) => mutate({ id, todoData }) };
}