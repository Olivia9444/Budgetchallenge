var tripInfoBudget = document.querySelector(" .trip-info");
var dailyBudget = document.querySelector(".daily-budget");

var tripInfo = function () {
  var totalBudget = Number(prompt("What is your total budget?"));
  var accommodation = Number(prompt("What are your accommodation cost?"));
  var numDays = Number(prompt("How many days does your trip last?"));

  calculateDailyBudget(totalBudget, accommodation, numDay);
};

var calculateDailyBudget = function (totalBudget, accomodation, numDays) {
  var daily = ((totalBudget - accomindation) / numDay).toFixed(2);

  dailyBudget.innerText = `You can spend $${daily} a day on food and fun.`;
};

tripInfoButton.addEventListener("click", tripInfo);
