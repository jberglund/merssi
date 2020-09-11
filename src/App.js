import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import List from "./components/List";
import Feeds from "./components/Feeds";

const feedsList = [
  { title: "CSS-Tricks", url: "https://css-tricks.com/feed/", checked: false },
  {
    title: "Codrops",
    url: "https://tympanus.net/codrops/feed/",
    checked: false,
  },
  { title: "dev.to", url: "https://dev.to/feed", checked: false },
  {
    title: "Smashing Magazine",
    url: "https://www.smashingmagazine.com/feed",
    checked: false,
  },
  {
    title: "A List Apart",
    url: "https://alistapart.com/main/feed/",
    checked: false,
  },
  { title: "Sidebar.io", url: "https://sidebar.io/feed.xml", checked: false },
];

function transition(state, event) {
  return;
}

const App = () => {
  const [feedsState, setFeedsState] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urls = params.get("url").split("|");
    const updatedFeedsList = feedsList.map((f) => {
      return {
        ...f,
        checked: urls.includes(f.url),
      };
    });
    setFeedsState(updatedFeedsList);
    // URLSearchParams.append("url", feedsList[4].url);
  }, []);
  return (
    <div className="layout">
      <List />
      <Feeds list={feedsState} />
    </div>
  );
};

const wrapper = document.getElementById("App");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
