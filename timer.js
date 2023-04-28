window.onload = () => {
    var minutes = 0;
    var seconds = 0;


    renderTime = (minutes, seconds) => {
        var secondDisplay = document.getElementById("seconds");
        var minutesDisplay = document.getElementById("minutes");
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


    var btnStart = document.getElementById("btn-start");
    var btnStop = document.getElementById("btn-stop");
    var btnReset = document.getElementById("btn-reset");

    var interval

    btnStart.onclick = () => {
        clearInterval(interval)
        interval = setInterval(timer, 1000);
    }

    btnStop.onclick = () => {
        clearInterval(interval)
    }

    btnReset.onclick = () => {
        minutes = 0;
        seconds = 0;
        renderTime(minutes, seconds)
    }

    function timer() {
        seconds++;

        if (seconds > 59) {
            minutes++;
            seconds = 0;
        }

        renderTime(minutes, seconds)
    }
}
