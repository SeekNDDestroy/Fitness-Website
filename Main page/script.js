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
const hideBox =(i,n,l)=>{
  for(let j=0;j<n;j++){
    if(i!=j){
      // l[j].style.display = 'none'
      l[j].classList.toggle('hide')
    }
  }
}
const l  = document.querySelectorAll('.box');
for(let i=0;i<l.length;i++){
  l[i].addEventListener('click',()=>{
    hideBox(i,l.length,l);
    l[i].classList.toggle('box-focus')

    //Reset Repcount
    document.querySelectorAll('.rep-count').forEach(i => {
      i.innerHTML = 0;
    })
  })
}
