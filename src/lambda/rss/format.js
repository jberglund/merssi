export function formatRSS(list) {
  let result = list.flatMap((feed) => {
    return feed.items.map((item) => {
      const { title, link, isoDate, categories, contentSnippet } = item;
      return {
        from: feed.title,
        title,
        link,
        isoDate,
        contentSnippet,
        categories,
      };
    });
  });

  const sorted = result.sort(function compare(a, b) {
    const dateA = new Date(a.isoDate);
    const dateB = new Date(b.isoDate);
    return dateB - dateA;
  });

  return sorted;
}
