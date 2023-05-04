import { useState } from 'react'

import { formatTime } from './formatTime'


export function StopWatch() {
  const [count, setCount] = useState(0)
  const [intervalId, setIntervalId] = useState(0)
  const [history, setHistory] = useState([""])

  const timer = () => {
    // centiseconds
    setCount((count) => count + 1)
  }


  const onStart = () => {
    onStop();
    let xx = setInterval(timer, 10);
    setIntervalId(xx)
  }

  const onStop = () => { clearInterval(intervalId) }

  const onReset = () => {
    setHistory((oldArray) => {
      let time = formatTime(count);
      let newValue = `${time.minutes}:${time.seconds}:${time.cs}`
      return [...oldArray, newValue]
    })
    setCount(0)

  }

  // convert seconds into minute and seconds (100cs = 1 second)
  let time = formatTime(count)

  return (
    <>

      <div className="wrapper">
        <h1>StopWatch</h1>

        <p>
          <span id="minutes">{time.minutes}</span>
          <span>:</span>
          <span id="seconds">{time.seconds}</span>
          <span>:</span>
          <span id="centiseconds">{time.cs}</span>
        </p>
        <div className="time">
          <span>Minutes</span>
          <span>Seconds</span>
          <span>Centiseconds</span>
        </div>

        <div className="action">
          <button id="btn-start" onClick={onStart} >Start</button>
          <button id="btn-stop" onClick={onStop}>Stop</button>
          <button id="btn-reset" onClick={onReset}>Reset</button>
        </div>
        <div className="history">
          <h4>History</h4>
          <ul id="history">
            {history.map((value) => { return (<li>{value}</li>) })}
          </ul>
        </div>
      </div>
    </>
  )
}

