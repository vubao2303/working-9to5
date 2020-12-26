// copy and paste from example 
$(document).ready(function () {

    // Static

    // The first basic method of Moment.js is the moment() method. Use this to get today's info!
    console.log(moment());

    console.log(moment().format());

    // Using moment format, there are different ways that we can display todays date!
    $("#date").text(moment());
    $("#date-formatted").text(moment().format());
    $("#date-my").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

    $("#day-week").text(moment().format('do'));
    $("#day-month").text(moment().format('Do'));
    $("#day-year").text(moment().format('DDDo'))

    // Current Time
    // Here we want to use setInterval to constantly update the time
    let updateTime = function () {
        let currentTime = moment().format('h:mm:ss')
        $("#time").text(currentTime)
    }

    // Here we will get the number of hours in the year
    let updateHour = function () {
        let date = moment().dayOfYear()
        let yearHours = date * 24
        let todayHours = moment().hour();
        let sumHours = yearHours + todayHours
        $("#hours").text(sumHours)
    }

    // Here we will get the number of minutes in the week
    let updateMinutes = function () {
        let date = moment().weekday();
        let weekMinutes = (date * 24 * 60) + (moment().minute());
        $("#minutes").text(weekMinutes);
    }

    // Here we will get the number of seconds in the day
    let updateSeconds = function () {
        let todayHours = moment().hour();
        let todaySeconds = todayHours * 60 * 60;
        let thisSecond = moment().second();
        let sumSeconds = thisSecond + todaySeconds;
        $("#seconds").text(sumSeconds);
    }

    let countdown = function () {

        // Friday
        let friday = moment().day("fr")._d

        // convert this into day of the year
        let fridayDate = moment(friday).dayOfYear();

        // This will get the milliseconds of Friday
        let fridayMils = fridayDate * 24 * 60 * 60 * 1000
        // Turn into seconds

        // Today
        // Turn into milliseconds

        let date = moment().dayOfYear()
        let yearMils = date * 24 * 60 * 60 * 1000
        let todayMils = moment().hour() * 60 * 60 * 1000;
        let thisMilsSecond = moment().second() * 1000;
        let thisMils = moment().millisecond();

        // This value should be increasing over time
        let sumMils = yearMils + todayMils + thisMilsSecond + thisMils;

        let ms = fridayMils - sumMils;
        $("#countdown").text(ms)
    }

    // To initally set the times, we will call the functions
    updateTime();
    updateHour();
    updateMinutes();
    updateSeconds();
    countdown();

    // To continuously call the functions, we will use setInterval
    setInterval(updateTime, 1000);
    setInterval(updateHour, 1000);
    setInterval(updateMinutes, 1000);
    setInterval(updateSeconds, 1000);
    setInterval(countdown, 1);

})
// STARTING HERE 
//  var as an object for user input 
var plans = {
    "9 AM": "",
    "10 AM": "",
    "11 AM": "",
    "12 PM": "",
    "1 PM": "",
    "2 PM": "",
    "3 PM": "",
    "4 PM": "",
    "5 PM": "",
  };

  // put Current day and time in the header
$('#currentDay').text(moment().format('dddd') + ", " + moment().format('MMMM Do YYYY, h:mm:ss a'));

//   $(document).ready(function () {

//     let updateTime = function () {
//         let currentTime = moment().format('h:mm:ss')
//         $("#time").text(currentTime)
//     }

//     let countdown = function () {

//         // Friday
//         let friday = moment().day("fr")._d

//         // convert this into day of the year
//         let fridayDate = moment(friday).dayOfYear();

//         // This will get the milliseconds of Friday
//         let fridayMils = fridayDate * 24 * 60 * 60 * 1000
//         // Turn into seconds

//         // Today
//         // Turn into milliseconds

//         let date = moment().dayOfYear()
//         let yearMils = date * 24 * 60 * 60 * 1000
//         let todayMils = moment().hour() * 60 * 60 * 1000;
//         let thisMilsSecond = moment().second() * 1000;
//         let thisMils = moment().millisecond();

//         // This value should be increasing over time
//         let sumMils = yearMils + todayMils + thisMilsSecond + thisMils;

//         let ms = fridayMils - sumMils;
//         $("#countdown").text(ms)
//     }

for (var i= 0; i < plans.length; i++)  {
    // for (const property in object) {
    //     console.log(`${property}: ${object[property]}`);
    //   }
}
// 5th Try
// $("saveBtn").click(function() {
    
//   value = $(this).siblings("textarea").val();
//   hourString = $(this).siblings("div").text();
  
//   saveSchedule(hourString, value);
//   console.log (value);
// });


// function saveToLocalStorage(dayObj) {
//   localStorage.setItem('plans', JSON.stringify(dayObj));
// }

// function saveSchedule(hourString, val) {
//   if(!localStorage.getItem('plans')) {
//       localStorage.setItem('plans', JSON.stringify(plans));
//   }

//   let workHours = JSON.parse(localStorage.getItem('plans'));
//   workHours[hourString] = val

//   saveToLocalStorage(workHours);
// }

// function updateCalendarTasks(dayObj) {
//   //   $("textarea").text()


//   $(".row").each(function(index) {
      
//     let res = $(this).children("div");
//     $(this).children("textarea").text(dayObj[res.text()]);
//   })
// }

// $("button").click(function() {
  
//   value = $(this).siblings("textarea").val();
//   hourString = $(this).siblings("div").text();
  
//   saveSchedule(hourString, value);
//   console.log (value);
// });


// $(document).ready(function(){
//   if(!localStorage.getItem('plans')) {
//     updateCalendarTasks(plans);
//   } else {
//     updateCalendarTasks(JSON.parse(localStorage.getItem('plans')));
//   }
// })

// $("button").click(function() {
  
//   value = $(this).siblings("textarea").val();
//   hourString = $(this).siblings("div").text();
  
//   saveSchedule(hourString, value);
//   console.log (value);
// });

// function saveToLocalStorage(dayObj) {
//   localStorage.setItem('plans', JSON.stringify(dayObj));
// }

// function saveSchedule(hourString, val) {
//   if(!localStorage.getItem('plans')) {
//       localStorage.setItem('plans', JSON.stringify(plans));
//   }

//   let workHours = JSON.parse(localStorage.getItem('plans'));
//   workHours[hourString] = val

//   saveToLocalStorage(workHours);
// }

// function updateCalendarTasks(dayObj) {
//   //   $("textarea").text()


//   $(".row").each(function(index) {
      
//     let res = $(this).children("div");
//     $(this).children("textarea").text(dayObj[res.text()]);
//   })
// }

// $("button").click(function() {
  
//   value = $(this).siblings("textarea").val();
//   hourString = $(this).siblings("div").text();
  
//   saveSchedule(hourString, value);
//   console.log (value);
// });


// 6th Try
// $("saveBtn").on("click", function (){
//   localStorage.setItem("plans", JSON.stringify(plan));
//   var plansInput= JSON.parse(localStorage.getItem("plan"))

// })


// var showPlans = function() {
//   textarea.textContent = showPlans 
// }


// showPlans();
// console.log (plans);



//   // working on save button, when save button is clicked, plans input will be save in local storage, and retrieve out to the page 
//   $("saveBtn").on('click', function() {
//     value = $(this).siblings("textarea").val();
//     hourvalue = $(this).siblings("div").text();

//     saveSchedule(hourvalue, value);
//   });
    

//   function saveToLocalStorage(dayObj) {
//     localStorage.setItem('plans', JSON.stringify(dayObj));
// }

// function saveSchedule(hourvalue, val) {
//   if(!localStorage.getItem('plans')) {
//     localStorage.setItem('plans', JSON.stringify(plans));
//   }
//   let workHours = JSON.parse(localStorage.getItem('plans'));
//   workHours[hourvalue] = val

//   saveToLocalStorage(workHours);
// }

// function updatePlans(dayObject) {
//   $(".row").each(function(index) {
//     let res = $(this).children("div");
//     $(this).children("textarea").text(dayObject[res.text()]);
//   })
// }

// var localS1 = []
// var localS2 =[]
// function taketoS1n() {
//   localStorage.setItem("plans", JSON.stringify(plans));
// }
// function getS2 () {
//   localStorage.getItem("plans", JSON.parse(plan));
// }


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
// get info push it in this array 
// str
