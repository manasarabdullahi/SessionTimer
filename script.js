let timer = null;

document.getElementById("startButton").onclick = function () {
    let name = document.getElementById("sessionName").value;
    let minutes = parseInt(document.getElementById("sessionMinutes").value);

    if (!name || isNaN(minutes) || minutes <= 0) {
        alert("Please enter a valid session name and time.");
        return;
    }

    if (timer !== null) {
        clearInterval(timer);
    }

    let totalSeconds = minutes * 60;
    let countdown = document.getElementById("countdown");
    let completedMessage = document.getElementById("completedMessage");
    let alarmSound = document.getElementById("alarmSound");


    completedMessage.innerHTML = "";

    timer = setInterval(function () {
        let mins = Math.floor(totalSeconds / 60);
        let secs = totalSeconds % 60;

        countdown.innerHTML = "Time left: " + mins + "m " + secs + "s";

        totalSeconds--;

        if (totalSeconds < 0) {
            clearInterval(timer);
            timer = null;
            countdown.innerHTML = "";
            completedMessage.innerHTML = "Session complete for: " + name;
            alarmSound.play();
        }
    }, 1000);
};