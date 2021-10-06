import { render } from 'solid-js/web'

function App() {
  return <div><h1>Hello World!</h1></div>
}

function main() {
  const root = document.querySelector("#app")
  render(App, root)
}

main()