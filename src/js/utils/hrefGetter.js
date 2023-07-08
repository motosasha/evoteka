const url = new URL(window.location.href);

export const urlPathname = url.pathname;
export const urlSearch = url.search;
export const urlHash = url.hash;
