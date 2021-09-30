import './App.css'
import React, { useState } from 'react'
import Grid from './components/grid'
import Write from './components/write'
function App() {
  const [nodes, setNodes] = useState([])
  const [textInput, setTextInput] = useState('')
  const [tell, setTell] = useState('Hi')
  const [pagefault, setpagefault] = useState(0)
  return (
    <div className="visual">
      <h1 className="title">LRU VISUALIZER</h1>
      <Write
        nodes={nodes}
        setNodes={setNodes}
        textInput={textInput}
        setTextInput={setTextInput}
        setTell={setTell}
        setpagefault={setpagefault}
        pagefault={pagefault}
      />
      <Grid name={textInput} nodes={nodes} setNodes={setNodes} />
      <div className="pagestwo">
        <div className="page">
          <h1>{tell}</h1>
        </div>
        <div className="page1">
          <label>Page Fault : {pagefault}</label>
        </div>
      </div>
    </div>
  )
}

export default App
