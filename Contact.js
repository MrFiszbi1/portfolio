$(document).ready(() => {
  $.ajax({
    type: "GET",
    url: "NavBar.html",
    success: (data) => {
      $(`body`).prepend(data);
    },
    error: (error) => {
      console.log(error);
      $(`body`).append($(`<div>`).text(`NavBar file not found.`));
    },
  });
});

let submission = document.querySelector("main");

submission.addEventListener("submit", (event) => {
  const title = "========= Form Submission =========";
  let username = document.getElementById("name");
  let name = username.value;
  let userEmail = document.getElementById("email");
  let email = userEmail.value;
  let usereMessage = document.getElementById("message");
  let message = usereMessage.value;

  if (name == "" && email == "" && message == "") {
    console.warn("You must enter some data to submit this form");
  } else {
    console.group(title);
    if (name == "") {
      console.log(`Name: no submission`);
    } else {
      console.log(`Name: ${name}`);
    }
    if (email == "") {
      console.log(`Email: no submission`);
    } else {
      console.log(`Email: ${email}`);
    }
    if (message == "") {
      console.log(`Message: no submission`);
    } else {
      console.log(`Message: ${message}`);
    }
    console.groupEnd();
  }
  event.preventDefault();
});
