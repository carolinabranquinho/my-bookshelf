import { getBooksData } from "../api/books";
import { useQuery } from "@tanstack/react-query";


export function useSearchBooks(query?: string){
  const querySearchBooks = async () => {
    if(!query){
      return [];
    }

    return await getBooksData({query});
  }

  return useQuery({
    queryKey: ["books", query],
    queryFn: querySearchBooks
  })
}