import { BookData } from "@/components/utils/types";
import { BOOKS_API_KEY, BOOKS_API_URL } from "../config/consts";

type GetBooksAttributes = {
  query: string;
}

export type BooksResponse = {
  kind: string;
  totalItems: number;
  items: BookData[];
}

export async function getBooksData({ query }:GetBooksAttributes){
  const api = `${BOOKS_API_URL}/?q=${query}&key=${BOOKS_API_KEY}`;
  const result = await fetch(api);
  const json = await result.json();

  return json.items as BookData[];
}