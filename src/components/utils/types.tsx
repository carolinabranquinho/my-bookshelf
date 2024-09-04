export type OptionProps = {
  id: string;
  label: string;
}

//TODO: check a better place for generic types
export type BookData = {
  kind: string;
  id: string;
  selfLink: string;
  volumeInfo: {
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    categories: string[];
    searchInfo: {
      textSnippet: string;
    }
    imageLinks?: {
      thumbnail?: string;
    }
  }
}
