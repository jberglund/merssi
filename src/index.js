import "file-loader?name=styles.css!./styles.css";

const API_ENDPOINT =
  window.location.origin +
  "/.netlify/functions/get_rss" +
  window.location.search;

(async () => {
  const feed = await fetch(API_ENDPOINT, {
    headers: { Accept: "application/json" },
  })
    .then((response) => response.json())
    .then((data) => ({
      statusCode: 200,
      body: data,
    }))
    .catch((error) => ({ statusCode: 422, body: String(error) }));

  const list = document.querySelector("#list");

  feed.body.forEach((article) => {
    const date = new Date(article.isoDate);
    const a = document.createElement("a");
    a.setAttribute("href", article.link);
    a.classList.add("rss-link");

    a.innerHTML = `<h3>${
      article.title
    } </h3><small>${date.toLocaleDateString()}</small><article class="rss-link__snippet">${
      article.contentSnippet
    }</article>`;

    const outlet = document.createElement("div");
    outlet.classList.add("rss-link__outlet");
    outlet.textContent = article.from;
    a.appendChild(outlet);

    list.appendChild(a);
  });
})();
