import './style.css'
import './stopwatch.css'
import { setStopWatch } from './stopwatch'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="container">
  <div class="wrapper" id="counter1">
      <h1>StopWatch 1</h1>

      <p>
          <span id="minutes">00</span>
          <span>:</span>
          <span id="seconds">00</span>
          <span>:</span>
          <span id="centiseconds">00</span>
      </p>
      <div class="time">
          <span>Minutes</span>
          <span>Seconds</span>
          <span>Centiseconds</span>
      </div>

      <div class="action">
          <button id="btn-start">Start</button>
          <button id="btn-stop">Stop</button>
          <button id="btn-reset">Reset</button>
      </div>
      <div class="history">
          <h4>History</h4>
          <ul id="history">
          </ul>
      </div>
  </div>
  <div class="wrapper" id="counter2">
      <h1>StopWatch 2</h1>

      <p>
          <span id="minutes">00</span>
          <span>:</span>
          <span id="seconds">00</span>
          <span>:</span>
          <span id="centiseconds">00</span>
      </p>
      <div class="time">
          <span>Minutes</span>
          <span>Seconds</span>
          <span>Centiseconds</span>
      </div>

      <div class="action">
          <button id="btn-start">Start</button>
          <button id="btn-stop">Stop</button>
          <button id="btn-reset">Reset</button>
      </div>
      <div class="history">
          <h4>History</h4>
          <ul id="history">
          </ul>
      </div>
  </div>
  </div>
`

setStopWatch(document.querySelector<HTMLButtonElement>('#counter1')!)
setStopWatch(document.querySelector<HTMLButtonElement>('#counter2')!)
