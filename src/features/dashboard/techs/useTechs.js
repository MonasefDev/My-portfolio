import { useQuery } from "@tanstack/react-query";
import { getTechs } from "../../../services/apiTechs";

export function useTechs() {
  const {
    isLoading,
    data: techs,
    error,
  } = useQuery({
    queryKey: ["techs"],
    queryFn: getTechs,
  });
  return { isLoading, error, techs };
}
