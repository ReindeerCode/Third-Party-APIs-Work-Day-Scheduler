//Collaborated with Danielle May, Eddie Phi, Brenda Burns, Shannon Quinn, Michael Jones, Sarah Manter

//Time
let update = function () {
  document.getElementById("currentDay").innerHTML = moment().format(
    "dddd, MMM Do, h:mm:ss a"
  );
};
setInterval(update, 1000);

//Clear Btns
$("#9AMClearBTN").click(function () {
  $("#9AMText").val("");
  localStorage.clear("#9AMText");
});

$("#10AMClearBTN").click(function () {
  $("#10AMText").val("");
});

$("#11AMClearBTN").click(function () {
  $("#11AMText").val("");
});

$("#12PMClearBTN").click(function () {
  $("#12PMText").val("");
});

$("#1PMClearBTN").click(function () {
  $("#1PMText").val("");
});

$("#2PMClearBTN").click(function () {
  $("#2PMText").val("");
});

$("#3PMClearBTN").click(function () {
  $("#3PMText").val("");
});

$("#4PMClearBTN").click(function () {
  $("#4PMText").val("");
});

//Save Btns

$(document).ready(function () {
  // display previous stored note, if set
  var prevText = localStorage.getItem("Saved");
  if (prevText !== null) {
    $(".textarea").val(localStorage.getItem("Saved"));
  }

  $(".saveBtn").click(function () {
    let newText = $(".textarea").val();
    if (typeof Storage !== "undefined") {
      // Store
      localStorage.setItem("Saved", newText);

      // Retrieve
      $(".textarea").val(localStorage.getItem("Saved"));
    } else {
      $(".textarea").val("Sorry, your browser does not support Web Storage...");
    }
  });
});

// Change color based on time
const rows = $(".row");
let currentHour = parseInt(moment().format("h"));

Array.from(rows).forEach((row) => {
  let rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  if (rowHour) {
    // Compares row id to current hour and sets color accordingly
    if (currentHour === rowHour) {
      setColor(row, "lightgreen");
    } else if (currentHour < rowHour && currentHour > rowHour - 6) {
      setColor(row, "lightgrey");
    } else if (currentHour > rowHour && currentHour < rowHour + 6) {
      setColor(row, "lightblue");
    } else {
      setColor(row, "white");
    }
  }
});

function setColor(element, color) {
  element.style.backgroundColor = color;
}
