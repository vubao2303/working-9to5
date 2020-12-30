// Current day and time in the header
$('#currentDay').text(moment().format('dddd') + ", " + moment().format('MMMM Do YYYY, h:mm:ss a'));
//  var plans as an object for user input 
var plans = {
    "9:00": "",
    "10:00": "",
    "11:00": "",
    "12:00": "",
    "13:00": "",
    "14:00": "",
    "15:00": "",
    "16:00": "",
    "17:00": ""
  };

function changeHtoNumber(timeString) {
  switch(timeString) {
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

    // for (const property in object) to get property out of object var = plans 
    var counter = 1;

for(const property in plans) {
  let textEntry = "#text-entry" + counter;
  // give textrentry textContent of user input plans 
  $(textEntry).text(plans[property]);
  console.log (textEntry)
  // #text-entry1

  let timeId = "#time" + counter;
  console.log (timeId)
  // #time1

  let presentHour = moment().hour();
  console.log (presentHour)
  console.log (typeof presentHour)
  // present hour 

  let timeString = $(timeId).text();
  console.log (typeof timeString) 
  // 16:00

  let timeNumber = changeHtoNumber(timeString); 
  console.log(timeNumber)
  //16

  // add class "past" in text area (second collumn) if the timeNumber from hourvalue is less than present hour 
  if(timeNumber < presentHour) {
    $(textEntry).addClass("past");
  
  // if hour number is more than present hour, add class "future" to text area (second collumn in the row )
  } else if (timeNumber > presentHour) {
    $(textEntry).addClass("future");

  // else class present 
  } else {
    $(textEntry).addClass("present");
  }
  counter ++;
  // end the for loop here, for all the properties in var =plans 
}

// // function ready 
$(document).ready(function(){
  if(!localStorage.getItem('plans')) {
    addPlans(plans);
  } else {
    // seperate strings 
    addPlans(JSON.parse(localStorage.getItem('plans')));
  }
})

// when the save button is clicked, add value to textarea which is user input 
$("button").click(function() {
  timeString = $(this).siblings("div").text();
  value = $(this).siblings("textarea").val();
  saveSchedule(timeString, value);
  console.log (value);
});

// save user input into Local storage and stringify it because local storage only take object 
function saveToS(dayObj) {
  localStorage.setItem('plans', JSON.stringify(dayObj));
}

// the actual fucntion for when the save button is clicked 
function saveSchedule(timeString, val) {

  if(!localStorage.getItem('plans')) {
      localStorage.setItem('plans', JSON.stringify(plans));
  }

  let workHours = JSON.parse(localStorage.getItem('plans'));
  workHours[timeString] = val

  saveToS(workHours);
}

function addPlans(dayObj) {
  // for each row, add value to text area, using this is better than class name because no need to repeat 
  $(".row").each(function(index) {
    let timeText = $(this).children("div").text();
    // A jQuery object is nothing more than a beefed-up array of DOM elements.
    $(this).children("textarea").text(dayObj[timeText]);
  });
}

$("button").click(function() {
  
  value = $(this).siblings("textarea").val();
  timeString = $(this).siblings("div").text();
  
  saveSchedule(timeString, value);
  console.log (value);
});

  
  
  
  
  
  
  
  