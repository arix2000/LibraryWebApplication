import BookShow from "./BookShow";
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
    return <BookShow book={book} key={book.isbn13} />;
  });

  return (
    <div className="background-color full-height px-5 pb-5">
      <div className="d-flex flex-row flex-wrap">
        {renderedBooks}
        <div id="end-of-list" />
      </div>
    </div>
  );
}
