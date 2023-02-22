
const date = document.getElementById('date')
const greet = document.getElementById('greeting')
const line = document.querySelector('.heart')
const homeIcon = document.getElementById('home');
const homePage = document.getElementById('content')
const heartIcon = document.getElementById('heart');
const heart = document.getElementById('loader');

//List of exercises
const exrRep = ['armcirclesCount', 'pushupsCount', 'squatsCount'];
const exr = ['armcirlces', 'pushups', 'squats']

// Code to display the date
let d = new Date()
const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY']
const months = ['JANURAY', 'FEBRUARY', 'MARCH', 'APRIAL', 'MAY', 'JUNE', 'JULY', 'AUGUDT', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']
const currentDay = days[d.getDay()];
const currentDate = d.getDate();
const currentMonth = months[d.getMonth()]
let displayDate = currentDay + " , " + currentDate + " " + currentMonth;
let timeNow = d.getHours()
let greeting = timeNow >= 5 && timeNow < 12 ? "Good Morning" : timeNow >= 12 && timeNow < 15 ? "Good Afternoon" : "Good evening";




// Username , to be fetched
const userName = 'UserName';

date.innerHTML = displayDate;
greet.innerHTML = greeting + ", " + userName

const getCount = (i, todayCount) => {
  //Reset Repcount
  document.getElementById(exrRep[i]).innerHTML = 0;

  let data;
  const starCountRef = ref(db, `/stimulation/stimulation`);
  onValue(starCountRef, (snapshot) => {
    data = snapshot.val();
    document.getElementById(exrRep[i]).innerHTML = data;
    console.log(data)
  });

  if (i == 0) {
    set(ref(db, `${currentDay.toLowerCase()}/exercise/armcircles`), {
      armcircles: parseInt(parseInt(data) + todayCount)
    });
  }
  else if (i == 1) {
    set(ref(db, `${currentDay.toLowerCase()}/pushups`), {
      pushups: parseInt(parseInt(data) + todayCount)
    });
  }
  else if (i == 2) {
    set(ref(db, `${currentDay.toLowerCase()}/squats`), {
      squats: parseInt(parseInt(data) + todayCount)
    });
  }

}


/* Not Required
//Repcount and focus the clicked box
// const hideBox = (i, n, l) => {
//   for (let j = 0; j < n; j++) {
//     if (i != j) {
//       // l[j].style.display = 'none'
//       l[j].classList.toggle('hide')
//     }
//   }
// }
// const l = document.querySelectorAll('.box');
// for (let i = 0; i < l.length - 1; i++) {
//   l[i].addEventListener('click', () => {
//     hideBox(i, l.length, l);
//     l[i].classList.toggle('box-focus')

    
    
//     // console.log(todayCount)

//     let t = true;
//     if(t){
//     const todayCount = parseInt(document.getElementById(exrRep[i]).innerHTML)
//     console.log("en")
//     getCount(i, todayCount);
//     console.log("r")
//       t= false;
//   }
//   else
//   t= true;
//   })
// }
*/

//Code to navigate to different pages
heartIcon.addEventListener('click', () => {
  homePage.style.visibility = 'hidden';
  heart.style.visibility = 'visible';
  line.style.visibility = 'visible';
})

homeIcon.addEventListener('click', () => {
  content.style.visibility = 'visible'
  heart.style.visibility = 'hidden';
  line.style.visibility = 'hidden';
})

// ----------FireBase-----------------
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getDatabase, ref, set, get, child, onValue } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js";

// Paste the code from Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAawiXng6UUYdhIIEHAtU_M8RDlbuotmaY",
  authDomain: "test-60eeb.firebaseapp.com",
  databaseURL: "https://test-60eeb-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "test-60eeb",
  storageBucket: "test-60eeb.aconsole.log(ppspot.com",
  messagingSenderId: "999588594553",
  appId: "1:999588594553:web:f2cb384c2cd7545a3625a8",
  measurementId: "G-Z3QLLR24FG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); armcirclesCount

// Get a reference to the database service
const db = getDatabase(app);




//     const dbRef = ref(getDatabase());
//     get(child(dbRef, `/monday/exercise/armcircle/armcircle`)).then((snapshot) => {
//   if (snapshot.exists()) {
//     console.log(snapshot.val());
//     count.innerHTML = snapshot.val();
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });

//Setting the count of each exercisetoString;
const dbRef = ref(getDatabase());
// get(child(dbRef, `${currentDay.toLowerCase()}/exercise`)).then((snapshot) => {
  const starCountRef = ref(db, `${currentDay.toLowerCase()}/exercise`);
  onValue(starCountRef, (snapshot) => {
  if (snapshot.exists()) {
    let data = snapshot.val();
    Object.keys(data)
      .forEach(function eachKey(key) {
        document.getElementById(key + 'Count').innerHTML = data[key][key];
      });
  } else {
    console.log("No data available");
  }
})