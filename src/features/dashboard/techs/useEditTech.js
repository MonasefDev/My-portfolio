import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditTech } from "../../../services/apiTechs";

export function useEditTech() {
  const queryClient = useQueryClient();

  const { mutate: editTech, isPending: isEditing } = useMutation({
    mutationFn: ({ newTech, id }) => createEditTech(newTech, id),
    onSuccess: (data) => {
      toast.success("technology successfully edited");
      queryClient.invalidateQueries({ queryKey: ["techs"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editTech };
}
