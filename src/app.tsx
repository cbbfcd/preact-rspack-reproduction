import preactLogo from './assets/preact.svg'

// 引入含有内置组件的 component-b
import { ComponentB } from './component-b';

// 引入一个同样带 Test 的组件 a
import { ComponentA } from './component-a';


import './app.css'

export function App() {

  return (
    <>
      <div>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact111" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <p>
        <ComponentB />
      </p>
      <p>
        <ComponentA />
      </p>
    </>
  )
}
