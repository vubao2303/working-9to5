// get live time and date. Luxon? 
// name var for the user input that will be save in the schedule 
// use local storage to getItem in this case user input, JSON it and then Parse it
// on click function for save button. excute the save? putting the user input text into the line of hour
// for loop? for var =0 for loop, each input = var[i]
// pushing real life hour into the time block ...
// conditional statement, if present time < futuretime change color? past hour value <present time change color


// var todoSchedule = {

// }

// local storage to store that schedule input 
// localStorage.getItem("todoSchedule")
// localStorage.setItem ("todoSchedule")

// need this here to make sure whatever you do, it is ready 
// $(document).ready(function () {}
// basic code: 
// $().on("Click", function (){})

// put Current day and time in the header
$('#currentDay').text(moment().format('dddd') + ", " + moment().format('MMMM Do YYYY, h:mm:ss a'));
//  var as an object for user input 
var plans = {
    "9:00": "",
    "10:00": "",
    "11:00": "",
    "12:00": "",
    "13:00": "",
    "14:00": "",
    "15:00": "",
    "16:00": "",
    "17:00": "",
  };
//   ready for action 
  $(document).ready(function(){
    if(!localStorage.getItem('plans')) {
      updatePlans(plans);
    } else {
      updatePlans(JSON.parse(localStorage.getItem('plans')));
    }
  })
    // for (const property in object) { to get property out of ofject plans) 
    var counter = 1;
    for(const property in plans) {
        let textEntry = "#text-entry" + counter;
        // give textrentry textContent of use
        $(textEntry).text(plans[property]);
        console.log (textEntry)
        let timeId = "#time" + counter;

    let presentHour = moment().hour();

    let timeString = $(timeId).text();

    let timeNumber = hourNumberFromHourValue(timeString); 

    // add class past if the timeNumber from hourvalue is less than present hour 
    if(timeNumber < presentHour) {
      $(textEntry).addClass("past");

    } else if (timeNumber > presentHour) {
      $(textEntry).addClass("future");
    } else {
      $(textEntry).addClass("present");
    }
    counter ++;
  }
  $("saveBtn").click(function() {
    value = $(this).siblings("textarea").val();
    hourvalue = $(this).siblings("div").text();
    
    saveSchedule(hourvalue, value);
  });
    
  function hourNumberFromHourValue(hourvalue) {
    switch(hourvalue) {
      case "9:00": return 9;
      case "10:00": return 10;
      case "11:00": return 11;
      case "12:00": return 12;
      case "13:00": return 13;
      case "14:00": return 14;
      case "15:00": return 15;
      case "16:00": return 16;
      case "17:00": return 17;
    }
  }

  function loadCorrectDataset() {
    result = localStorage.getItem('plans')
    return (result ? result : plans);
  }

  function initializeLocalStorage() {
    localStorage.setItem('plans', JSON.stringify(plans));
  };

  function saveToLocalStorage(dayObj) {
    localStorage.setItem('plans', JSON.stringify(dayObj));
}

function saveSchedule(hourvalue, val) {
  if(!localStorage.getItem('plans')) {
    initializeLocalStorage();
  }
  let workHours = JSON.parse(localStorage.getItem('plans'));
  workHours[hourvalue] = val

  saveToLocalStorage(workHours);
}

function updatePlans(dayObject) {
  $(".row").each(function(index) {
    let res = $(this).children("div");
    $(this).children("textarea").text(dayObject[res.text()]);
  })
}