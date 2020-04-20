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
    return (
      <div className="spinner">
        <div className="spinner-icon"></div>
      </div>
    );
  } else {
    return (
      <>
        <PageHeader />
        <main>
          <ul>
            {items.map((item, i) => (
              <ListItem key={i} {...item} />
            ))}
          </ul>
        </main>
      </>
    );
  }
}

function ListItem(props) {
  return (
    <li>
      <a href={props.Url} target="_blank" rel="noopener noreferrer">
        {props.Title}
      </a>
    </li>
  );
}

function PageHeader() {
  const currentDate = new Date();

  return (
    <header>
      <h1 className="title">
        Text-Only{" "}
        <a
          href="https://imedinews.ge/"
          target="_blank"
          rel="noopener noreferrer"
        >
          imedinews.ge
        </a>{" "}
        front page
      </h1>
      <p>
        {currentDate.toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}{" "}
        &mdash; მნიშვნელოვანი ამბები:
      </p>
    </header>
  );
}
