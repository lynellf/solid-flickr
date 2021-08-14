import Counter from "./Counter.js";
import Router from "./Router.js";
import html from "https://cdn.skypack.dev/solid-js/html";
import { ContextProvider, Route } from "https://cdn.skypack.dev/solid-router";

const App = () => {
  return html`
    <div>
      ${ContextProvider({
        children: () =>
          Router({
            routes: [
              Route({
                path: "/",
                children: Counter,
                fallback: () => html`<h1>404: Page Not Found!</h1>`,
              }),
            ],
          }),
      })}
    </div>
  `;
};

export default App;
