import { Router } from "https://cdn.skypack.dev/solid-router";
import html from "https://cdn.skypack.dev/solid-js/html";

export default function ({ routes = [] }) {
  return html`
    <div>
      ${Router({
        children: routes,
      })}
    </div>
  `;
}
