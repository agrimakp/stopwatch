window.onload = () => {
    // in centiseconds
    let count = 0;
    let resetHistory = [];

    // input in centiseconds
    formatTime = (input) => {
        let output = { minutes: 0, seconds: 0, cs: input };

        // convert seconds into minute and seconds (100cs = 1 second)
        let seconds = Math.floor(input / 100);

        output.cs = input % 100;
        output.seconds = seconds % 60;
        output.minutes = Math.floor(seconds / 60);

        // add leading zero if number less than 2 digits
        if (output.seconds <= 9) {
            output.seconds = "0" + output.seconds;
        }
        if (output.minutes <= 9) {
            output.minutes = "0" + output.minutes;
        }
        if (output.cs <= 9) {
            output.cs = "0" + output.cs;
        }

        return output
    }

    renderTime = (cs) => {
        let secondDisplay = document.getElementById("seconds");
        let minutesDisplay = document.getElementById("minutes");
        let centiSecondsDisplay = document.getElementById("centiseconds")

        // logic to do convertions
        const time = formatTime(cs)

        // sets time in minutes, seconds, centiseconds.
        secondDisplay.innerHTML = time.seconds;
        minutesDisplay.innerHTML = time.minutes;
        centiSecondsDisplay.innerHTML = time.cs;
    }

    renderHistory = (history) => {
        let list = document.getElementById("history");
        items = history.map(item => {
            let time = formatTime(item);
            return `<li>${time.minutes}:${time.seconds}:${time.cs}</li>`;
        })
        list.innerHTML = items.join("\n")
    }


    let btnStart = document.getElementById("btn-start");
    let btnStop = document.getElementById("btn-stop");
    let btnReset = document.getElementById("btn-reset");

    // store id so as to use this id with clearInterval() to cancel the timer
    let interval

    btnStart.onclick = () => {
        clearInterval(interval)
        // method continues calling the function until clearInterval() is called in the background
        interval = setInterval(timer, 10);
    }

    btnStop.onclick = () => {
        clearInterval(interval)
    }

    btnReset.onclick = () => {
        resetHistory.push(count)
        count = 0;
        renderTime(count)
        renderHistory(resetHistory)
    }

    history.innerHTML = resetHistory;

    function timer() {
        // centiseconds
        count++;
        // display min, sec, cs
        renderTime(count)
    }
}