const formatTime = (input) => {
    let output = { minutes: 0, seconds: 0, cs: input };

    // convert seconds into minute and seconds (100cs = 1 second)
    let seconds = Math.floor(input / 100);

    output.cs = (input % 100);
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
    output.cs = output.cs + "";

    return output
}

module.exports = formatTime;