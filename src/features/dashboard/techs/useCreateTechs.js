import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditTech } from "../../../services/apiTechs";

export function useCreateTech() {
  const queryClient = useQueryClient();

  const { mutate: createTech, isPending: isCreating } = useMutation({
    mutationFn: (data) => createEditTech(data),
    onSuccess: () => {
      toast.success("New technology successfully created");
      queryClient.invalidateQueries({ queryKey: ["techs"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isCreating, createTech };
}
