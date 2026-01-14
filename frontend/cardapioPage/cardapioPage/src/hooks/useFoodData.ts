import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { FoodData } from "../components/interface/FoodData";

const API_URL = "http://localhost:8080";

const fetchData = async (): Promise<FoodData[]> => {
  const response = await axios.get<FoodData[]>(API_URL + "/food");
  return response.data; // só os dados
};

export function useFoodData() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ["food-data"],
    retry: 2,
  });

  return query; // já retorna `data` com tipo FoodData[]
}
