import html from "https://cdn.skypack.dev/solid-js/html";

const Root = ({ children }) => {
  return html`<main>${children}</main>`;
};

export default Root;