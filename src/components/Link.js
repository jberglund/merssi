import React from "react";

const Link = ({ title, link, isoDate, contentSnippet, outlet }) => {
  const date = new Date(isoDate);
  return (
    <a href={link} className="rss-link">
      <h4>{title}</h4>
      <small>{date.toLocaleDateString()}</small>
      <div className="rss-link__snippet">{contentSnippet}</div>
      <div className="rss-link__outlet">{outlet}</div>
    </a>
  );
};

export default Link;
