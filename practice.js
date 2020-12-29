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
    "17:00": "",
  };
  if(!localStorage.getItem('plans')) {
  plans = JSON.parse(localStorage.getItem("plans"));
  // JSON.parse(localStorage.getItem('plans'))
  }
  
  console.log (plans["9:00"])

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
// $(document).ready(function(){
//   if(!localStorage.getItem('plans')) {
//     addPlans(plans);
//   } else {
//     // seperate strings 
//     addPlans(JSON.parse(localStorage.getItem('plans')));
//   }
// })

 
// localStorage.setItem('plans', JSON.stringify(plans));

// // get the plans input and store it in a variable 
// var input1= $("#text-entry1").val().trim ();
// // create a var that will hold a <p> 
// var inputinfo= $("<p>")
// this p will get the 
// var input = $("#text-entry1");
// var button= $("button");

// storageInput.addEventListener("firstplan",letter {
//     input.textContent= letter.target.value 
// })

valueforS=$("#text-entry1").val();
keyforS=$("#time1").text();
// when the save button is clicked, add value to textarea which is user input 
$("#btn1").on("click", function() {
    keyforS=$("#time1").text();
    valueforS=$("#text-entry1").val();
    localStorage.setItem(keyforS,valueforS);
    // window.localStorage.getItem(keyforS)
    console.log(valueforS);
    // second try
    localStorage.setItem(keyforS, JSON.stringify(valueforS));
    // $("#text-entry1").val()= JSON.parse(localStorage.getItem(keyforS));
});
// $("#text-entry1").textContent= "hello";
$("#text-entry1").text (JSON.parse(localStorage.getItem(keyforS)));

console.log(keyforS);

localStorage.setItem("plans", JSON.stringify(plans));




var plans = [
  {time:"9:00", inputplans:""},
  {time:"10:00", inputplans:""},
  {time:"11:00", inputplans:""},
  {time:"12:00", inputplans:""},
  {time:"13:00", inputplans:""},
  {time:"14:00", inputplans:""},
  {time:"15:00", inputplans:""},
  {time:"16:00", inputplans:""},
  {time:"17:00", inputplans:""},

];

for (var i=0; i<plans.length; i++) {
plans[i].inputplans= $("textarea").val();
}



// $("#text-entry1").val()= "hello" ;
// JSON.parse(localStorage.getItem(keyforS));





// var input= $("#text-entry1").val() =
// var plansInput =localStorage.getItem(keyforS)
// if (plansInput) {
//   $("#text-entry1").text(storedInput)
// }

// var input= $("<li>");
// $(input).text()
// $("#text-entry").append(input);
// localStorage.setItem("userinput1", input);


//   var firstplan= JSON.parse(localStorage.getItem(valueforS));

// // save user input into Local storage and stringify it because local storage only take object 
// function saveToS(dayObj) {
//   localStorage.setItem('plans', JSON.stringify(dayObj));
// }

// // the actual fucntion for when the save button is clicked 
// function saveSchedule(timeString, val) {

//   if(!localStorage.getItem('plans')) {
//       localStorage.setItem('plans', JSON.stringify(plans));
//   }

//   let workHours = JSON.parse(localStorage.getItem('plans'));
//   workHours[timeString] = val

//   saveToS(workHours);
// }

// function addPlans(dayObj) {
//   // for each row, add value to text area, using this is better than class name because no need to repeat 
//   $(".row").each(function(index) {
      
//     let res = $(this).children("div");
//     // A jQuery object is nothing more than a beefed-up array of DOM elements.
//     $(this).children("textarea").text(dayObj[res.text()]);
//   })
// }

// $("button").click(function() {
  
//   value = $(this).siblings("textarea").val();
//   timeString = $(this).siblings("div").text();
  
//   saveSchedule(timeString, value);
//   console.log (value);
// });






// function updateCalendarTasks(dayObj) {
//   //   $("textarea").text()
//   $(".row").each(function(index) {
//     let res = $(this).children("div");
//     $(this).children("textarea").text(dayObj[res.text()]);
//   })
// }

// $("button").click(function() {
  
//   value = $(this).siblings("textarea").val();
//   timeString = $(this).siblings("div").text();
  
//   saveSchedule(timeString, value);
//   console.log (value);
// });


// var textarea1= $("#text-entry1").val();
// $("#btn1").on("click", function() {
//   localStorage.setItem("input", textarea1);
// console.log (textarea1)
// });


// var textarea1 = $("#text-entry1").val();
// console.log (time1, textarea1);
// $(".saveBtn").on("click", function() {
//   //   // localStorage.setItem (timeString,textarea1)
//   //   // var textarea = $(textEntry).val()
//   //   var plansInput= $(textEntry).text(plans[property]);
//   // localStorage.setItem("plansInput", JSON.stringify(plansInput));
//   var textarea = $("textarea").val();
//   console.log (textarea);
//   localStorage.setItem("input", textarea)
//   localStorage.getItem (textarea)
//   });
  
//   }
  
  //   var textarea1 = $("#text-entry1").val();
  // console.log (time1, textarea1);
  // $("#btn1").on("click", function() {
  //   // localStorage.setItem (timeString,textarea1)
  //   // var textarea = $(textEntry).val()
  //   var plansInput= $(textEntry).text(plans[property]);
  // localStorage.setItem("plansInput", JSON.stringify(plansInput));
  // // var textarea1 = $("#text-entry1").val();
  // // console.log (textarea1);
  // // localStorage.setItem("input", textarea1)
    
  // });
  // }
  
  
  
  // var textarea1 = $("#text-entry1").value.trim();
  // console.log (textarea1);
  // localStorage.setItem("input", textarea1)
  
  // localStorage.setItem("plans", JSON.stringify(plans));
  
  // // var textarea1= $(textEntry).val(plans[property]);
  // var time1 = $("#time1").val();
  // console.log (time1, textarea1);
  // $("#btn1").on("click", function() {
  //   localStorage.setItem (time1,textarea1)
    
  
    
  // });
  
  
  
  
  
  
  // JSON.stringyfy 
  // JSON.parse
  
  
  
  
  
  
  
  
  
  
  