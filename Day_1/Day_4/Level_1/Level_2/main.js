// 1
let marks='Enter Marks'

if(marks=100 && marks>=80){
    console.log('Grade is A')
}
else if(marks<90 && marks>=70){
    console.log('Grade is B')
}
else if(marks<70 && marks>=60){
    console.log('Grade is C')
}
else if (marks<60 && marks>=50){
    console.log('Grade is D')
}
else if(marks<50 && marks>=40){
    console.log('Grade is E')
}
// 2

let seasons='Enter seasons name'
if(seasons == 'sept' || seasons == 'oct' || seasons=="nov"){
    console.log("the season is Autumn.");
}
else if(seasons =='dec' || seasons =='jan' || seasons=="feb"){
    console.log("the season is Winter.");

}
else if(seasons =='march' || seasons == 'apr' || seasons=="may"){
    console.log("the season is Spring.");

}
else if(seasons =='jun' || seasons =='july' || seasons==="aug"){
    console.log("the season is Summer.");

}
else{
    console.log("invalid input.")
}
// level 3

let day = prompt("What is The Today?");

if (day == "saturday") {
  console.log("Saturday is weekend");
} else if (day == "saturDay") {
  console.log("Saturday is weekend");
} else if (day == "friday") {
  console.log("Friday is weekend");
} else if (day == "friDay") {
  console.log("Friday is weekday");
}

// 4
let month = prompt("no.of days in a month");
if (month == "January") {
    console.log("January has 31 days.");
  } else if (month == "JANUARY") {
    console.log("January has 31 day");
  } else if (month== "February") {
    console.log("February has 28 days.");
  } else if (month == "FEbruary") {
    console.log("February has 28 days.");
  }