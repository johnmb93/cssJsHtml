let hasJob = true;
if (hasJob) {
  document.writeln("Thank you for visiting I currently have a job | ");
} else {
  document.writeln("Thank you for visiting Please send me job offers");
}

let today = new Date();
let dayOfWeek = today.getDay();
if (dayOfWeek === 0 || dayOfWeek === 6) {
  document.writeln(
    "Since its the weekend I will not be replying to any emails"
  );
} else {
  document.writeln(
    "Please expect an email shortly after sending me job offers"
  );
}

function showMessage(message) {
  document.writeln("<p>" + message + "</p>");
  document.writeln("<hr/>");
}
