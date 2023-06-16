import BookList from "./BookList";
import BookListEmptyView from "./BookListEmptyView"
import BeforeSearchView from "./BeforeSearchView";
import NavBar from "../UiCommon/NavBar";
import data from "../../models/books.json";
import { useState } from "react";

export default function BookPage() {
  const [books, setBooks] = useState([]);
  const [isQueryEntered, setIsQueryEntered] = useState(false);

  const handleSearchSubmit = (query) => {
    if (query.length >= 2) {
      const result = data.filter((item) => {
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
