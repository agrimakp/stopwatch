window.onload = () => {
    let minutes = 0;
    let seconds = 0;
    let resetHistory = [];

    renderTime = (minutes, seconds) => {
        let secondDisplay = document.getElementById("seconds");
        let minutesDisplay = document.getElementById("minutes");
        if (seconds > 9) {
            secondDisplay.innerHTML = seconds;
        } else {
            secondDisplay.innerHTML = "0" + seconds;
        }
        if (minutes > 9) {
            minutesDisplay.innerHTML = minutes;
        } else {
            minutesDisplay.innerHTML = "0" + minutes;
        }
    }

    renderHistory = (history) => {
        let list = document.getElementById("history");
        items = history.map(item => {
            return `<li>${item.minutes}:${item.seconds}</li>`;
        })
        list.innerHTML = items.join("\n")
    }


    let btnStart = document.getElementById("btn-start");
    let btnStop = document.getElementById("btn-stop");
    let btnReset = document.getElementById("btn-reset");

    let interval

    btnStart.onclick = () => {
        clearInterval(interval)
        interval = setInterval(timer, 1000);
    }

    btnStop.onclick = () => {
        clearInterval(interval)
    }

    btnReset.onclick = () => {
        resetHistory.push({ minutes, seconds })
        minutes = 0;
        seconds = 0;
        renderTime(minutes, seconds)
        renderHistory(resetHistory)
    }

    history.innerHTML = resetHistory;

    function timer() {
        seconds++;

        if (seconds > 59) {
            minutes++;
            seconds = 0;
        }

        renderTime(minutes, seconds)
    }
}
