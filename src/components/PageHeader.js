import React from "react";

export default function PageHeader() {
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
          day: "numeric"
        })}{" "}
        &mdash; მნიშვნელოვანი ამბები:
      </p>
    </header>
  );
}
