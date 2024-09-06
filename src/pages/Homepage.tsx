import Search from "@/components/search";
import { BookData } from "@/components/utils/types";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  const [selectedItem, setSelectedItem] = useState<BookData | undefined>();

  return (
    <>
      <Search handleSelectedItem={setSelectedItem} />
      {selectedItem ? (
        <div>
          <h2>Book Title: {selectedItem.volumeInfo.title}</h2>
          <div className="authors">
            Authors:{" "}
            {selectedItem.volumeInfo.authors
              ? selectedItem.volumeInfo.authors.map((author: string) => (
                  <p> {author} </p>
                ))
              : "No authors"}
          </div>
          <img src={selectedItem.volumeInfo.imageLinks?.thumbnail} />
          <p>{selectedItem.volumeInfo.description}</p>
          <Link to={{ pathname: `book/${selectedItem.id}` }}>More details</Link>
        </div>
      ) : (
        <div>There is no selected items so far</div>
      )}
    </>
  );
}
