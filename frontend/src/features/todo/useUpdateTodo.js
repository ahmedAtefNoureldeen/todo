import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateTodo as updateTodoapi} from "../../services/apiTodo";

export function useUpdateTodo() {
  const queryClient = useQueryClient();

  const { mutate: updateTodo, isLoading: isUpdating } = useMutation({
    mutationFn: ({id , status})=> updateTodoapi({ id, status }),
    onSuccess: () => {
      toast.success("Todo successfully updated");
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateTodo};
}