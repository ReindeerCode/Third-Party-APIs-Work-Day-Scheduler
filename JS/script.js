//Collaborated with Danielle May, Eddie Phi, Brenda Burns, Shannon Quinn, Michael Jones, Sarah Manter

//Time
    let update = function() {
        document.getElementById("currentDay")
        .innerHTML = moment().format('dddd, MMM Do, h:mm:ss a');
    }
    setInterval(update, 1000);

//Clear Btns
    $("#9AMClearBTN").click(function() {
        $("#9AMText").val('');
    });

    $("#10AMClearBTN").click(function() {
        $("#10AMText").val('');
    });

    $("#11AMClearBTN").click(function() {
        $("#11AMText").val('');
    });

    $("#12PMClearBTN").click(function() {
        $("#12PMText").val('');
    });

    $("#1PMClearBTN").click(function() {
        $("#1PMText").val('');
    });

    $("#2PMClearBTN").click(function() {
        $("#2PMText").val('');
    });

    $("#3PMClearBTN").click(function() {
        $("#3PMText").val('');
    });

    $("#4PMClearBTN").click(function() {
        $("#4PMText").val('');
    });


//Save Btns

$("#9AMSaveBTN").click(function() {
    let val = $("#9AMText").val();
    localStorage.setItem("9notesText", val);

    let storedNotes = localStorage.getItem("9notesText", val);

    if (storedNotes !== null) {
        val.textContent = storedNotes;
        console.log(val)
    }
});





//Time Color Changes - cannot get this to work

    // let currentTime = parseInt(moment().format("H"))
    // //console.log(currentTime)

    // function timeColor(element) {
    //     let hourVal = document.getElementById("#9amHour")
    //     console.log(hourVal)
    // }

    // function timeColor(element) {
    //     const timeVal = parseInt(element.attr("id"));
    //     console.log(timeVal)
    //     if (timeVal < currentTime) {
    //         element.css("backgroundColor", ".past")
    //     } else if (timeVal > currentTime) {
    //         element.css("backgroundColor", ".future")
    //     }else {
    //         element.css("backgroundColor", ".hour")
    //     }
    // }

    // function checkTime(){
    //     $(`.list-group-horizontal`).each(function () {
    //         bgColor($(this))
    //     })
    // }

    // checkTime();
    // setInterval(checkTime, 50000)


