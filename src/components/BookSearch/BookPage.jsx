import BookList from "./BookList";
import EmptyList from "./EmptyList";
import NavBar from "../UiCommon/NavBar";
import data from "../../models/books.json";
import { useState } from "react";

export default function BookPage() {
  const [books, setBooks] = useState([]);

  const handleSearchSubmit = (query) => {
    if (query.length >= 2) {
      const result = data.filter((item) => {
        return query === ""
          ? item
          : item.title.toString().toLowerCase().includes(query.toLowerCase());
      });
      setBooks(result);
    } else {
      setBooks([]);
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
      {books.length > 0 ? <BookList books={books} /> : <EmptyList />}
    </>
  );
}
