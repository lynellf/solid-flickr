import { render } from "solid-js/web";

function App() {
  return <h1>Hello World!</h1>
}

function main(){
  const root = document.querySelector("#root")
  render(App, root)
} 

main()