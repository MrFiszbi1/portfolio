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

  $(`body`).append(
    $(`<main>`)
      .css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "80vw",
        margin: "20px auto",
      })
      .append(
        $(`<div>`)
          .append($(`<h1>`).text(`3D Amusment Park`))
          .append(
            $(`<p>`).text(
              `This was the second project from my computer graphics class at PSU (CS 447). This project consisted of creating a 3D amusement park using OpenGL. The 3D assets were designed by me using Blender. This program was created using FLTK. In order to compile and run this program you will need to have FLTK set up`
            )
          )
          .append(
            ($(
              `<a>`
            ).url = `Github: https://github.com/MrFiszbi1/3D-Amusement-Park`)
          )
      )
      .append(
        $(`<div>`)
          .append(
            $(`<hr>`).css({
              borderTop: "thick solid black",
            })
          )
          .append($(`<h1>`).text(`Portfolio`))
          .append(
            $(`<p>`).text(
              `This is the source code for this portfolio website. The website was the final project in an introductory class on web development as PSU.`
            )
          )
          .append(
            ($(`<a>`).url = `Github: https://github.com/MrFiszbi1/portfolio`)
          )
      )
  );
});
