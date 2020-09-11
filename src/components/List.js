import React, { useEffect, useState } from "react";
import Link from "./Link";

const API_ENDPOINT =
  window.location.origin +
  "/.netlify/functions/get_rss" +
  window.location.search;

async function getSomeLinksYo(set) {
  const feed = fetch(API_ENDPOINT, {
    headers: { Accept: "application/json" },
  })
    .then((response) => response.json())
    .then((data) => ({
      statusCode: 200,
      body: data,
    }))
    .then((result) => {
      set(result.body);
    })
    .catch((error) => ({ statusCode: 422, body: String(error) }));

  return await feed;
}

const List = () => {
  const [rssList, setRssList] = useState([]);

  useEffect(() => {
    getSomeLinksYo(setRssList);
  }, []);

  return (
    <div className="rss-list">
      {rssList.map((i) => (
        <Link
          key={i.title}
          title={i.title}
          isoDate={i.isoDate}
          link={i.link}
          outlet={i.from}
          contentSnippet={i.contentSnippet}
        />
      ))}
    </div>
  );
};

export default List;
