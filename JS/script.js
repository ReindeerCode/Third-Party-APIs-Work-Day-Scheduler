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
  let timeSlots = [9, 10, 11, 12, 13, 14, 15, 16];
  function renderPlans() {
    for (let i = 0; i <= timeSlots.length; i++) {
      $("#" + timeSlots[i]).val(localStorage.getItem(timeSlots[i]));
    }
  }
  renderPlans();

  $(".saveBtn").click(function () {
    let dataHour = $(this).attr("data-hour");
    let inputField = $("#" + dataHour).val();

    localStorage.setItem(dataHour, inputField);
    console.log(inputField);
  });
});

// Change color based on time
const rows = $(".row");
let currentHour = parseInt(moment().hours());

Array.from(rows).forEach((row) => {
  let rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  if (rowHour < 8) {
    rowHour += 12;
  }
  if (rowHour) {
    // Compares row id to current hour and sets color accordingly
    if (currentHour === rowHour) {
      setColor(row, "lightgreen");
    } else if (currentHour < rowHour) {
      setColor(row, "lightgrey");
    } else if (currentHour > rowHour) {
      setColor(row, "grey");
    }
  }
});

function setColor(element, color) {
  element.style.backgroundColor = color;
}
