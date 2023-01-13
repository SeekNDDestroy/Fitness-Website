let date = document.getElementById('date')
let greet = document.getElementById('greeting')


// Code to display the date
let d = new Date()
const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY']
const months = ['JANURAY', 'FEBRUARY', 'MARCH', 'APRIAL', 'MAY', 'JUNE', 'JULY', 'AUGUDT', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']
let displayDate = days[d.getDay()] + "," + d.getDate() + " " + months[d.getMonth()];
let timeNow = d.getHours()
let greeting = timeNow >= 5 && timeNow < 12 ? "Good Morning" : timeNow >= 12 && timeNow < 15 ? "Good Afternoon" : "Good evening";


// Username , to be fetched
const userName = 'UserName';

date.innerHTML = displayDate;
greet.innerHTML = greeting + ", " + userName




// To check for the time and update the gretting every Hour 
/*
setInterval(()=>{
    let greeting = timeNow >= 5 && timeNow < 12? "Good Morning": timeNow >= 12 && timeNow < 15? "Good Afternoon": "Good evening";
    greet.innerHTML = greeting + ', userName'
},3600000)
*/

//Repcount
document.querySelectorAll('.box').forEach(element => {
  element.addEventListener('click', e => {

    //Reset the repcount
    document.querySelectorAll('.rep-count').forEach(i => {
      i.innerHTML = 0;
    })
  })
});
