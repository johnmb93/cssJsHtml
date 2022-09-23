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

const formInfo = document.getElementById("formInfo");

function showMessage(message) {
  formInfo.innerHTML = "<p>" + message + "</p>";
}

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const contact = new Contact();
  contact.send;
});

const experiences = document.getElementsByClassName("experience");
for (let i = 0; i < experiences.length; i++) {
  const item = experiences[i];
  item.addEventListener("mouseenter", function (event) {
    event.target.style = "background-color: #302010;";
  });
  item.addEventListener("mouseleave", function (event) {
    event.target.style = "";
  });
}

class Contact {
  fullName = "";
  email = "";
  subject = "";
  body = "";

  send() {
    console.info(this.formatMessage);
    showMessage(
      "We are currently working on the email function please try again later "
    );
  }
  formatMessage() {
    return `To: ${this.fullName}
    Email: ${this.email}
    Subject: ${this.subject}
    Body: ${this.body}`;
  }
}
