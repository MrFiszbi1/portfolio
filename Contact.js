$(document).ready(() => {
  $.ajax({
    type: "GET",
    url: "NavBar.html",
    success: (data) => {
      $(`body`).append(data);
    },
    error: (error) => {
      console.log(error);
      $(`body`).append($(`<div>`).text(`NavBar file not found.`));
    },
  });
});
