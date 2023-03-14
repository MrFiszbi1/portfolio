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
