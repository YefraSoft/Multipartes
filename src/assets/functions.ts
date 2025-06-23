export function redirectPage(url: string) {
  console.log("redirecting");
  window.open(url, "_blank");
}

export function getLinkUrl(id: string) {
  const links = {
    "1": "https://example.com/1",
    "2": "https://example.com/2",
    "3": "https://example.com/3",
  };
  return links[id] || null;
}
