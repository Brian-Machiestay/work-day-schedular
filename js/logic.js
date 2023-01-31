// Get the current date and time
let now = moment();
dayNow = now.format('dddd');
mthNow = now.format('MMMM');
dayNum = now.format('Do');
console.log(dayNow);

// populate the DOM with the date and time
$("#currentDay").text(`${dayNow}, ${mthNow} ${dayNum}`);