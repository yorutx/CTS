import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './components/button.tsx'
import Card from './components/card.tsx'
import './home.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Nouveau site pour CTS</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <Card cardName={"Card Numero Un"} description={"Gros caca"} link={"https://www.cts-strasbourg.eu/fr/"} title={"Cts Strasbourg"}/>
        <Card cardName={"Card Numero Deux"} description={"Gros caca"} link={"https://www.cts-strasbourg.eu/fr/"} title={"Cts Strasbourg"}/>
        <Card cardName={"Card Numero Trois"} description={"Gros caca"} link={"https://www.cts-strasbourg.eu/fr/"} title={"Cts Strasbourg"}/>
        <Button link={"https://www.cts-strasbourg.eu/fr/"} title={"Cts Strasbourg"}/>
      </div>
    </>
  )
}

export default App
