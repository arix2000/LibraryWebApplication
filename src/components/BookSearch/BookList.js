import BookItem from "./BookItem";
import { useState, useEffect } from "react";

export default function BookList({ books }) {
  const itemsPerPage = 9;

  const [currentPage, setCurrentPage] = useState(1);
  const [currentBooks, setCurrentBooks] = useState([]);

  useEffect(() => {
    setCurrentBooks(books.slice(0, currentPage * itemsPerPage));
  }, [books, currentPage]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCurrentPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );
    observer.observe(document.querySelector("#end-of-list"));
  }, []);

  const renderedBooks = currentBooks.map((book) => {
    return <BookItem book={book} key={book.isbn13} margin={4} radius="24px" />;
  });

  return (
    <div className="background-color full-height px-2 pb-2">
      <div className="d-flex flex-row flex-wrap">
        {renderedBooks}
        <div id="end-of-list" />
      </div>
    </div>
  );
}
