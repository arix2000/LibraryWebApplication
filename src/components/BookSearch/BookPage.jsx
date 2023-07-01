import BookList from "./BookList";
import BookListEmptyView from "./BookListEmptyView"
import BeforeSearchView from "./BeforeSearchView";
import NavBar from "../UiCommon/NavBar";
import { useState } from "react";
import BookManager from "../../common/BooksManager";

export default function BookPage() {
  const [books, setBooks] = useState([]);
  const [isQueryEntered, setIsQueryEntered] = useState(false);

  const handleSearchSubmit = (query) => {
    const allBooks = (new BookManager()).getBooks();
    if (query.length >= 2) {
      const result = allBooks.filter((item) => {
        return query === ""
          ? item
          : item.title.toString().toLowerCase().includes(query.toLowerCase());
      });
      setBooks(result);
      setIsQueryEntered(true);
    } else {
      setBooks([]);
      setIsQueryEntered(false);
    }
  };

  return (
    <>
      <NavBar
        onSubmit={handleSearchSubmit}
        showSearchBar={true}
        initialExpand={true}
        searchAutoFocus={true}
      />
      {isQueryEntered ? (
        books.length > 0 ? (
          <BookList books={books} />
        ) : (
          <BookListEmptyView />
        )
      ) : (
        <BeforeSearchView />
      )}
    </>
  );
}
