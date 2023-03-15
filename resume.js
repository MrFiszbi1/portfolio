let degreePSU = document.createElement("span");
degreePSU.textContent = "Bachelors of Science in Computer Science";
degreePSU.style.fontWeight = "bold";

const educationInfo = ` (2020 - (ongoing)), Expected Graduation: June 2023.`;

let psuInfo = document.createTextNode(educationInfo);
educationPSU = document.createElement("p");
educationPSU.append(degreePSU);
educationPSU.append(psuInfo);

let degreePCC = document.createElement("span");
degreePCC.textContent = "Bachelors of Science in Computer Science";
degreePCC.style.fontWeight = "bold";

const morePCCInfo = `(2020)`;

let pccInfo = document.createTextNode(morePCCInfo);
educationPCC = document.createElement("p");
educationPCC.append(degreePCC);
educationPCC.append(pccInfo);

let catPSU = document.createElement("span");
catPSU.textContent = "Help Desk Technician, Computer Action Team at PSU";
catPSU.style.fontWeight = "bold";

const catDate = ` - (10/2021 - 04/2022) and (10/2022 to Present)`;

let catInfo = document.createTextNode(catDate);
CAT = document.createElement("p");
CAT.append(catPSU);
CAT.append(catInfo);

let AlliedUniversal = document.createElement("span");
AlliedUniversal.textContent = "Security Gaurd, Allied Universal";
AlliedUniversal.style.fontWeight = "bold";

const AlliedDate = ` - (03/2020 - 07/2022)`;

let AlliedInfo = document.createTextNode(AlliedDate);
Allied = document.createElement("p");
Allied.append(AlliedUniversal);
Allied.append(AlliedInfo);

let sons = document.createElement("span");
sons.textContent = "Youth Counselor, Sons of Adam";
sons.style.fontWeight = "bold";

const sonsDate = ` - (06/2018 - 07/2021)`;

let sonsInfo = document.createTextNode(sonsDate);
sonsOfAdam = document.createElement("p");
sonsOfAdam.append(sons);
sonsOfAdam.append(sonsInfo);

let Pragmatic = document.createElement("span");
Pragmatic.textContent = "Assistant and manual laborer, Pragmatic Services";
Pragmatic.style.fontWeight = "bold";

const pragmaticDate = ` - Summers of 2018 and 2019`;

let pragmaticInfo = document.createTextNode(pragmaticDate);
pragmaticServices = document.createElement("p");
pragmaticServices.append(Pragmatic);
pragmaticServices.append(pragmaticInfo);

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
          .append($(`<h1>`).text(`Skills`))
          .append(
            $(`<ul>`)
              .append(
                $(`<li>`).text(
                  `C++ and C, Java, SQL, CSS, HTML, TypeScript, jQuery, OpenGL`
                )
              )
              .append(
                $(`<li>`).text(
                  `Visual Studio Code, Linux, VIM, Android Studio, Visual Studio, GitHub`
                )
              )
              .append($(`<li>`).text(`Adobe Photoshop and Blender`))
              .append($(`<li>`).text(`Bilingual in English and Arabic`))
          )
      )

      .append(
        $(`<div>`)
          .append(
            $(`<hr>`).css({
              borderTop: "thick solid black",
            })
          )
          .append($(`<h1>`).text(`Education`))
          .append($(educationPSU))
          .append($(`<p>`).text(`Portland State University | GPA: 3.61`))
          .append(
            $(`<ul>`).append(
              $(`<li>`).text(`Academic Honors: Deans’ List (2 semesters)`)
            )
          )
          .append($(educationPCC))
          .append($(`<p>`).text(`Portland Community College | GPA: 3.57`))
          .append(
            $(`<ul>`).append(
              $(`<li>`).text(
                `Academic Honors: Presidents’ (2 semesters), Deans’ (2 semesters), Honors’ (3 semesters)`
              )
            )
          )
      )

      .append(
        $(`<div>`)
          .append(
            $(`<hr>`).css({
              borderTop: "thick solid black",
            })
          )
          .append($(`<h1>`).text(`Experience`))
          .append(CAT)
          .append(
            $(`<ul>`).append(
              $(`<li>`).text(
                `Part of the Computer Action Team (CAT). The user support Desk Operation Group.Some duties involved account maintenance, printing assistance, technical assistance to help access the colleges technological resources, and troubleshooting and resolving complex technical problems for students and faculty.`
              )
            )
          )
          .append(Allied)
          .append(
            $(`<ul>`).append(
              $(`<li>`).text(
                `Ensuring building and personnel security and the de-escalation of conflicts.`
              )
            )
          )
          .append(sonsOfAdam)
          .append(
            $(`<ul>`).append(
              $(`<li>`).text(
                `Organization and running of events, Conflict resolution, and youth counseling.`
              )
            )
          )
          .append(pragmaticServices)
      )
  );
});
