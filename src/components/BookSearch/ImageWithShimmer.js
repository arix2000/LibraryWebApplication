import React, { useState } from "react";

export default function ImageWithShimmer({ book, styles }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [imgObjectFitStyle, setImgObjectFitStyle] = useState(
    styles.cardImgFitContain
  );

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const handleImageError = (img) => {
    if (img.currentTarget.clientWidth == 180) {
      setImgObjectFitStyle(styles.cardImgFitFill);
    }
    setError(true);
  };

  return (
    <div style={{ height: "100%" }}>
      {!isLoaded && !error && <div className={styles.shimmerEffect} />}
      {error ? (
        <img
          className={styles.cardImg}
          src="https://linda-hoang.com/wp-content/uploads/2014/10/img-placeholder-dark-vertical.jpg"
          alt="Error"
        />
      ) : (
        <img
          className={styles.cardImg}
          src={book.thumbnail}
          onLoad={handleImageLoad}
          onError={handleImageError}
          alt="Book"
        />
      )}
    </div>
  );
}
