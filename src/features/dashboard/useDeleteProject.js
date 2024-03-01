import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteProject as deleteProjectApi } from "../../services/apiProjects";

export function useDeleteProject() {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteProject } = useMutation({
    mutationFn: (id) => deleteProjectApi(id),
    onSuccess: () => {
      toast.success("project successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["projects"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isDeleting, deleteProject };
}
