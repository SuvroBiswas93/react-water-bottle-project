
import { Suspense } from 'react'
import './App.css'
import Bottles from './Components/Bottles/Bottles'

const fetchPromise = fetch('/public/bottles.json').then(res => res.json())

function App() {
  

  return (
    <>
      <h1>Buy Awesome Water Bottles</h1>
     <Suspense fallback={<h3>Data is loading...</h3>}>
        <Bottles fetchPromise={fetchPromise}></Bottles>
     </Suspense>
        
    </>
  )
}

export default App
