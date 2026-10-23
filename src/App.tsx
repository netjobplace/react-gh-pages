import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { time } from 'console';

function App() {

  // load name from local storage
  const [name, setName] = useState(() => {
    let saved = localStorage.getItem("name")
    return saved ? JSON.parse(saved) : "Default"
  })

  // save name to local storage
  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name))
    console.log("Name changed to " + name)
  }, [name])

  function nameChange(e: { target: { value: any; }; }) {
    setName(e.target.value)
  }

  // // timestamps
  // const [times, setTimes] = useState<string[]>(() => {
  //   let saved = localStorage.getItem("times")
  //   return saved ? JSON.parse(saved) : []
  // })

  // useEffect(() => {
  //   localStorage.setItem("times", JSON.stringify(times))
  //   console.log("New Time Added")
  //   lasttime()
  // }, [times])

  // function lasttime() {
  //   let len = times.length
  //   let last = times.at(-1)
  //   setLast(len + " " + last) 
  // }

  // const [last, setLast] = useState<string>(() => {
  //   let saved = localStorage.getItem("last")
  //   return saved ? JSON.parse(saved) : []
  // })

  // useEffect(() => {

  // }, [last])

  // const handleSubmit = (e: { preventDefault: () => void; }) => {
  //   e.preventDefault()
  //   let dateTime = new Date().toDateString()
  //   times.push(dateTime)
  // }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload!
        </p>
        <p> Hello {name}!</p>
        <input type="text" onChange={nameChange}/>
        {/* <button type="submit" onClick={handleSubmit}> Add Time </button>
        <p> {last} </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
