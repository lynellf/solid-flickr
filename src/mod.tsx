import { render } from 'https://cdn.skypack.dev/solid-js/web'

let Greeting = () => {
  return <div>Hello World</div>;
}

let main = () => {
  let root = document.querySelector('#app')
  render(() => <Greeting/>, root)
}

main()