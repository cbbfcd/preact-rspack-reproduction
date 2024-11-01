import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'

import { Button, Badge } from 'antd-mobile';

import './app.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <div class="card">
        <Button color='primary' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>
      <p>
        Check out{' '}
        <a
          href="https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app"
          target="_blank"
        >
          create-preact
        </a>
        , the official Preact + Vite starter
      </p>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
      <p>
        <Badge content='5'>
          <div className='box'></div>
        </Badge>
      </p>
    </>
  )
}
