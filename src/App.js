import React, { useState, useEffect } from "react";

export default function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://imedinews.ge/api/categorysidebarnews/get?categoryId="
    )
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true);
          const { List } = result;
          setItems(List);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>იტვირთება...</div>;
  } else {
    const currentDate = new Date();
    return (
      <div>
        <p>
          Text-Only{" "}
          <b>
            <a
              href="https://imedinews.ge/"
              target="_blank"
              rel="noopener noreferrer"
            >
              imedinews.ge
            </a>
          </b>{" "}
          front page
        </p>
        <p>
          {currentDate.toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          &mdash; მნიშვნელოვანი ამბები:
        </p>
        <ul>
          {items.map((item, i) => (
            <li key={i}>
              <a href={item.Url} target="_blank" rel="noopener noreferrer">
                {item.Title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
