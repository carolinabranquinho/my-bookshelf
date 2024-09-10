import { useBookDetails } from "@/data/books";
import { useParams } from "react-router-dom";

export default function BookDetails() {
  const { id } = useParams();
  const { data } = useBookDetails(id);
  return data ? (
    <div>
      <h2>Book Title: {data.volumeInfo.title}</h2>
      <div className="authors">
        Authors:
        {data.volumeInfo.authors
          ? data.volumeInfo.authors.map((author: string) => <p> {author} </p>)
          : "No authors"}
      </div>
      <img src={data.volumeInfo.imageLinks?.thumbnail} />
      <p>{data.volumeInfo.description}</p>
    </div>
  ) : (
    <div> We don't have a book with this id</div>
  );
}
