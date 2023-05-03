import './style.css'
import './stopwatch.css'
import { setStopWatch } from './stopwatch'
import { displayStopwatchContent } from './displayStopwatchContent'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = displayStopwatchContent("counter1")

setStopWatch(document.querySelector<HTMLButtonElement>('#counter1')!)

