//Collaborated with Danielle May, Eddie Phi, Brenda Burns, Shannon Quinn, Michael Jones, Sarah Manter

// old notes will be indented three times
        // let day = document.getElementById("currentDay")
//global variables
let m = moment()
        // //setInterval(function(){ alert("Hello"); }, 3000);

        // day.textContent = m.format("dddd, MMM Do, h:mm:ss a").toString()
// date and time
    let update = function() {
        document.getElementById("currentDay")
        .innerHTML = moment().format('dddd, MMM Do, h:mm:ss a');
    }
    setInterval(update, 1000);

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