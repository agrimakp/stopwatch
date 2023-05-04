/** input is number in centiseconds
 * here we are converting centi seconds into mm:ss:cs format eg: 22:03:90
 */
export const formatTime = (input: number) => {
    let seconds = Math.floor(input / 100);

    let cs = input % 100;
    let minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;

    let secondDisplay = seconds + "";
    let minuteDisplay = minutes + "";
    let csDisplay = cs + "";

    // add leading zero if number less than 2 digits
    if (seconds <= 9) {
        secondDisplay = "0" + seconds;
    }
    if (minutes <= 9) {
        minuteDisplay = "0" + minutes;
    }
    if (cs <= 9) {
        csDisplay = "0" + cs;
    }

    return {
        minutes: minuteDisplay,
        seconds: secondDisplay,
        cs: csDisplay,
    }
}
