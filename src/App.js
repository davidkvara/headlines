import React, { useState, useEffect } from "react";
import { MyComponents } from "./MyComponents";

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
    return (
      <div>
        <span role="img" aria-label="Sorry">
          🙄
        </span>{" "}
        იქნებ გვერდის განახლება გეცადა? 🛠
      </div>
    );
  } else if (!isLoaded) {
    return (
      <div className="spinner">
        <div className="spinner-icon"></div>
      </div>
    );
  } else {
    return (
      <>
        <MyComponents.PageHeader />
        <main>
          <ul>
            {items.map((item, i) => (
              <MyComponents.ListItem key={i} {...item} />
            ))}
          </ul>
        </main>
      </>
    );
  }
}
