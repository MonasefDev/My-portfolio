import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteTech as deleteTechApi } from "../../../services/apiTechs";

export function useDeleteTech() {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteTech } = useMutation({
    mutationFn: (id) => deleteTechApi(id),
    onSuccess: () => {
      toast.success("Technology successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["techs"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isDeleting, deleteTech };
}
