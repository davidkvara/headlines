import React from "react";

export default function ListItem(props) {
  return (
    <li>
      <a href={props.Url} target="_blank" rel="noopener noreferrer">
        {props.Title} {linkIcon}
      </a>
    </li>
  );
}

const linkIcon = (
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
