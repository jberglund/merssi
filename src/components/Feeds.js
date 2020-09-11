import React, { useState } from "react";

const feeds = [
  { title: "dev.to", url: "https://dev.to/feed" },
  { title: "Smashing Magazine", url: "https://www.smashingmagazine.com/feed" },
  { title: "A List Apart", url: "https://alistapart.com/main/feed/" },
  { title: "Sidebar.io", url: "https://sidebar.io/feed.xml" },
];

const Feeds = () => {
  const [toggled, setToggled] = useState(false);

  function handleClick() {
    setToggled(!toggled);
  }

  return (
    <div className="rss-feeds" data-toggled={toggled}>
      <button className="rss-feeds__toggle" onClick={() => handleClick()}>
        Edit feeds
      </button>
      <h4>List of RSS feeds.</h4>
      {feeds.map(({ title, url }) => (
        <label className="radio__container" key={title}>
          <input
            className="radio__input"
            type="checkbox"
            name="Options"
            value={url}
          />
          <span className="radio__label">{title}</span>
        </label>
      ))}
    </div>
  );
};

export default Feeds;
