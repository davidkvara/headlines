import React, { useState, useEffect } from "react";
import PageHeader from "./components/PageHeader";
import ListItem from "./components/ListItem";

export default function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

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
        error => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <ErrorMessage />;
  } else if (!isLoaded) {
    return <div className="spinner" />;
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

const ErrorMessage = () => (
  <div>
    <span role="img" aria-label="sorry">
      🙄
    </span>{" "}
    იქნებ გვერდის განახლება გეცადა? 🛠
  </div>
);
