/** "https://app.jpgroent.dk/" -> "app.jpgroent.dk" (keeps non-ASCII hosts readable). */
export function displayUrl(href: string) {
  return href.replace(/^https?:\/\//, "").replace(/\/$/, "");
}
