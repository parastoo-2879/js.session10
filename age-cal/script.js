const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function ageCalculate() {
  let today = new Date();
  let inputDate = new Date(document.getElementById("date-input").value);
  let birthMonth, birthDate, birthYear;

  let birthDetails = {
    date: inputDate.getDate(),
    month: inputDate.getMonth() + 1,
    year: inputDate.getFullYear(),
  };
  let currentYear = today.getFullYear();
  let currentMonth = today.getMonth() + 1;
  let currentDate = today.getDate();
  leapChecker(currentYear);

  if (
    birthDetails.year > currentYear ||
    (birthDetails.year == currentYear && birthDetails.month > currentMonth) ||
    (birthDetails.year == currentYear &&
      birthDetails.month == currentMonth &&
      birthDetails.date > currentDate)
  ) {
    alert("Not born yet! 🤭");
    displayResult("-", "-", "-");
    return;
  }
  birthYear = currentYear - birthDetails.year;
  if (currentMonth >= birthDetails.month) {
    birthMonth = currentMonth - birthDetails.month;
  } else {
    birthYear--;
    birthMonth = 12 + currentMonth - birthDetails.month;
  }
  if (currentDate >= birthDetails.date) {
    birthDate = currentDate - birthDetails.date;
  } else {
    birthMonth--;
    let days = months[currentMonth - 2];
    birthDate = days + currentDate - birthDetails.date;
    if (birthMonth < 0) {
      birthMonth = 11;
      birthYear--;
    }
  }
  console.log(birthYear, birthMonth, birthDate);
  displayResult(birthDate, birthMonth, birthYear);
}
function displayResult(bDate, bMonth, bYear) {
  document.getElementById("year").textContent = bYear;
  document.getElementById("month").textContent = bMonth;
  document.getElementById("day").textContent = bDate;
}
function leapChecker(year) {
  if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
    months[1] = 29;
  } else {
    months[1] = 28;
  }
  // console.log(year, months[1]);
}
