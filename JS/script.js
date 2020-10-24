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
    




// Clear btn
    // create clear button class
        // put on every clear button in html
        // assign each clear button and text area values
            // the value assigned should be the same per row
    // use JQ to add on click event listener for clear button class
        // on click fun function with if statement
            // make sure to inculde the code to stop the on click from bubbling to other buttons (event.stopPropagation())
        // if values match then replace text with placeholder="Type Notes Here"
            // you may need to add a new text box tag with empty sting in it, maybe add it with all the same things as the current and remove the current

//table 
    // three columns
        // first column shows hours of day - done
        //second column for user notes - created
            // notes saved even when browser is refreshed
            // past hours show grey
            //current hour shows light blue
            //future hours show light green
        //save btn - created, need to make functional
        //clear btn - created, need to make functional - use .val with an empty sting