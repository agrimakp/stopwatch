export function setStopWatch(element: HTMLButtonElement) {
  // in centiseconds
  let count = 0;
  let resetHistory: number[] = [];

  // input in centiseconds
  let formatTime = (input: number) => {
    // convert seconds into minute and seconds (100cs = 1 second)
    let seconds = Math.floor(input / 100);
    let cs = input % 100;
    let minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;

    let output = { minutes: `${minutes}`, seconds: `${seconds}`, cs: `${cs}` };

    // add leading zero if number less than 2 digits
    if (seconds <= 9) {
      output.seconds = "0" + seconds;
    }
    if (minutes <= 9) {
      output.minutes = "0" + minutes;
    }
    if (cs <= 9) {
      output.cs = "0" + cs;
    }

    return output
  }

  let renderTime = (cs: number) => {
    let secondDisplay = element.querySelector("#seconds");
    let minutesDisplay = element.querySelector("#minutes");
    let centiSecondsDisplay = element.querySelector("#centiseconds")

    // logic to do convertions
    const time = formatTime(cs)

    // sets time in minutes, seconds, centiseconds.
    secondDisplay!.innerHTML = time.seconds;
    minutesDisplay!.innerHTML = time.minutes;
    centiSecondsDisplay!.innerHTML = time.cs;
  }

  let renderHistory = (history: number[]) => {
    let list = element.querySelector("#history");
    let items = history.map(item => {
      let time = formatTime(item);
      return `<li>${time.minutes}:${time.seconds}:${time.cs}</li>`;
    })
    list!.innerHTML = items.join("\n")
  }


  let btnStart = element.querySelector("#btn-start");
  let btnStop = element.querySelector("#btn-stop");
  let btnReset = element.querySelector("#btn-reset");

  // store id so as to use this id with clearInterval() to cancel the timer
  let interval: any

  btnStart!.addEventListener('click', () => {
    clearInterval(interval)
    // method continues calling the function until clearInterval() is called in the background
    interval = setInterval(timer, 10);
  })

  btnStop!.addEventListener('click', () => {
    clearInterval(interval)
  })

  btnReset!.addEventListener('click', () => {
    resetHistory.push(count)
    count = 0;
    renderTime(count)
    renderHistory(resetHistory)
  })


  function timer() {
    // centiseconds
    count++;
    // display min, sec, cs
    renderTime(count)
  }
}