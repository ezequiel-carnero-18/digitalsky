function updateCountdown() {
  var countdownElement = document.getElementById("counter");
  var currentDate = new Date();
  var targetDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 7);
  var timeDifference = targetDate.getTime() - currentDate.getTime();

  if (timeDifference <= 0) {
    countdownElement.textContent = "0 : 00 : 00 : 00";
    return;
  }

  var seconds = Math.floor(timeDifference / 1000) % 60;
  var minutes = Math.floor(timeDifference / (1000 * 60)) % 60;
  var hours = Math.floor(timeDifference / (1000 * 60 * 60)) % 24;
  var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  var countdownString = days + " : " + padZero(hours) + " : " + padZero(minutes) + " : " + padZero(seconds);
  countdownElement.textContent = countdownString;
}

function padZero(number) {
  return number.toString().padStart(2, "0");
}

setInterval(updateCountdown, 1000);
