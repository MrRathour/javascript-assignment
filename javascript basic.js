
// 1.  
function currenttime(){
    let currentdate = new Date();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    console.log(currentdate.getDate());
     let nubeday  = weekday[currentdate.getDay()];
     console.log(nubeday);
}
let result  = currenttime();
console.log(result);

// 2. 
 function printscreen(){
    window.print();
 }

// 3. 
function currendate(){
    let currentdate = new Date();
   let day = currentdate.getDay();
   let year = currentdate.getFullYear();
   let month = currentdate.getMonth();
console.log(month+"/",day+"/",year);
}
let results  = currendate();
console.log(results);

// 4. 
function AreaofTriangle (one , two ,three){
 let s = one + two + three/2;
 return Math.sqrt(s * (s - one) * (s - two) * (s - three))
}
let resultarea = AreaofTriangle(2,4,6);
console.log(resultarea);

// 6.
function FindLeapYear(year){
return (year % 4==0)?(year%400==0):(year%100==0);
}
let leapyearresult = FindLeapYear(2016);
console.log(leapyearresult);

// 7.
for (let year=2014; year<2050; year++){
    let date = new Date(year,0,1);
    if(date.getDay()==0){
        console.log("1st January is being a Sunday" + " " ,year);
    }
}

// 8.
// function randominteger(){
//     let value = prompt("Enter The Number");
//     if(value<=10){
//         window.alert('good work')
//     }
//     else{
//         window.alert('Not matched')
//     }
// }
// console.log(randominteger());

// 9.
today=new Date();
var cmas=new Date(today.getFullYear(), 11, 25);
if (today.getMonth()==11 && today.getDate()>25) 
{
cmas.setFullYear(cmas.getFullYear()+1); 
}  
var one_day=1000*60*60*24;
console.log(Math.ceil((cmas.getTime()-today.getTime())/(one_day))+
" days left until Christmas!");

// 10.

// function multiplication (){
//     let one = prompt('first number');
//     let two = prompt('second number');
//     let total = one*two;
//     window.alert(total);
// }
// multiplication();

// 11.
function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 
cToF(60);
fToC(45);

// 12
// alert(document.url);
















