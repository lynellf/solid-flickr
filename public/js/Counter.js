import { createSignal, onCleanup } from "https://cdn.skypack.dev/solid-js";
import html from "https://cdn.skypack.dev/solid-js/html";
const App = () => {
  const [count, setCount] = createSignal(0),
    timer = setInterval(() => setCount(count() + 1), 1000);
  onCleanup(() => clearInterval(timer));
  return html`<div>${count}</div>`;
};

export default App;
