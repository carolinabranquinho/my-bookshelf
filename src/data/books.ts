import { getBooksData, getBooksDetailsData } from "../api/books";
import { useQuery } from "@tanstack/react-query";

export function useSearchBooks(query?: string) {
  const querySearchBooks = async () => {
    if (!query) {
      return [];
    }

    return await getBooksData({ query });
  };

  return useQuery({
    queryKey: ["books", query],
    queryFn: querySearchBooks,
  });
}

export function useBookDetails(id?: string) {
  const queryBookDetails = async () => {
    if (!id) {
      return;
    }
    return await getBooksDetailsData(id);
  };

  return useQuery({
    queryKey: ["book", "details", id],
    queryFn: queryBookDetails,
  });
}
