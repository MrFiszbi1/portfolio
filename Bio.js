let profilePic = document.createElement("img");
profilePic.src = "images/Jaafar.jpg";
profilePic.alt = "Picture of Jaafar Rodgers";
profilePic.width = "200";
profilePic.height = "200";
profilePic.style.borderRadius = "50%";

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
  $(`main`).append(
    $("<div>")
      .css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "50vw",
        margin: "20px auto",
      })
      .append(profilePic)
      .append(
        $("<p>").text(
          "Hi, My name is Jaafar Rodgers. I am an undergrad student in my senior year at PSU. In October 2016 at the age of sixteen, I left my high school in Saudi Arabia and moved away from my parents to live with my older brothers in Portland. There I attend early college at PCC for my junior and senior years of high school. At PCC I took my first classes in computer science. While I studied at PCC, I struggled to find the section of computer science that best suited me. To do this I needed to discover who I am and what I liked. I have finally found that through the classes at PSU. One of my main strengths is my creativity. My favorite part of programming is bringing an idea to life. I have found that the most engaging work has been with web development and app development. I have found the visual aspect of web and app development to be most gratifying. I find myself to be more of a front-end developer. I have still much to learn about myself and these fields, but I am excited to find more opportunities to develop myself and my skills."
        )
      )
  );
});
