import { useState } from 'react' //useState, faz a mudança em determinada parte da pagina//
import './App.css'

function App() {
  const [value, setValue] = useState(0)

  return (
    <>
    <div> 
      <h1>Contadora abaixo:</h1>
    <p>{value} </p>
    <button className='btn' onClick={() => setValue(value + 1)}>Adiciona +1</button>
    <button className='btn' onClick={() => setValue(value - 1)}>Subtrai -1</button>
    <button className='btn' onClick={() => setValue(0)}>Recomeça</button>
    </div>
    </>
  )
}

export default App