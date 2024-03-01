import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditProject } from "../../services/apiProjects";

export function useEditProject() {
  const queryClient = useQueryClient();

  const { mutate: editProject, isPending: isEditing } = useMutation({
    mutationFn: ({ newProject, id }) => createEditProject(newProject, id),
    onSuccess: (data) => {
      toast.success("Project successfully edited");
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editProject };
}
