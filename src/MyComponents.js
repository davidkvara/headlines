import React from "react";

// ახლა აქ მაქვს <PageHeader /> <ListItem /> და iconLink
// დრო რომ მექნება, სხვანაირ სტრუქტურას მოვიფიქრებ

export const MyComponents = {
  PageHeader: function PageHeader() {
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
  },
  ListItem: function ListItem(props) {
    return (
      <li>
        <a href={props.Url} target="_blank" rel="noopener noreferrer">
          {props.Title} {linkIcon}
        </a>
      </li>
    );
  },
};

export const linkIcon = (
  <svg
    width="15px"
    height="15px"
    style={{ marginBottom: "-2px" }}
    viewBox="0 0 24 24"
  >
    <g
      stroke="gray"
      strokeWidth="1.5"
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="17 13.5 17 19.5 5 19.5 5 7.5 11 7.5"></polyline>
      <path d="M14,4.5 L20,4.5 L20,10.5 M20,4.5 L11,13.5"></path>
    </g>
  </svg>
);
