// 1. convert number into string then reverse the number and then join it.
function reversenumber(number){
number = number + "";
return  number.split('').reverse().join('');
}
console.log(reversenumber(34534));

// 2.
//  function checkpalindrom(srt_value){
//    let val = srt_value.split('').reverse().join('');
//    if(val.toLowerCase()===srt_value.toLowercase()){
//     console.log(srt_value + 'is a palindrom');
//    }
//    else{
//     console.log(srt_value + 'is not a palindrom');
//    }
//  }
//  checkpalindrom('madam');

//  3.

let Combinations = (str) => {
    let combinationsval = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length + 1; j++) {
            combinationsval.push(str.slice(i, j));
        }
    }
    return combinationsval;
}
console.log(Combinations('Dog'));

// 4. convert into string and then sort then join 
function alphabet(str)
  {
return str.split('').sort().join('');
  }
console.log(alphabet("webmaster"));

// 5.
function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));

// 6.
function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(find_longest_word('Web Development Tutorial'));

// 7.
function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowel_count("The quick brown fox"));

// 8.
function checkprime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  console.log(checkprime(37));
  console.log(checkprime(36));
  
// 9.
function detect_data_type(value)
{
var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
if (typeof value === "object" || typeof value === "function") 
    {
     for (x = 0, len = dtypes.length; x < len; x++) 
     {
            if (value instanceof dtypes[x])
            {
                return dtypes[x];
            }
      }
    }
    
    return typeof value;
}
console.log(detect_data_type(12));
console.log(detect_data_type('w3resource'));
console.log(detect_data_type(false));

// 10.
function matrix(n) {
    var i;
    var j;

    for (i=0; i < n; i++)
    {
      for (j=0; j < n; j++)
      {
           if (i === j)
           {
            
             console.log(' 1 ');
           }
                  
           else 
            {
             console.log(' 0 ');}
            }
       }
   }
matrix(4);

// 11.
// Define a function named Second_Greatest_Lowest that finds the second smallest and second
//  largest numbers in an array
function Second_Greatest_Lowest(arr_num) {
    arr_num.sort(function(x, y) {
      return x - y;
    });
    var uniqa = [arr_num[0]];
    var result = [];
    for (var j = 1; j < arr_num.length; j++) {
      if (arr_num[j - 1] !== arr_num[j]) {
        uniqa.push(arr_num[j]);
      }
    }
    result.push(uniqa[1], uniqa[uniqa.length - 2]);
  
    return result.join(',');
  }
  console.log(Second_Greatest_Lowest([1, 2, 3, 4, 5])); 
  
// 12.

function perfect(number) {
    var temp = 0;
    for (var i = 1; i <= number / 2; i++) {
      if (number % i === 0) {
        temp += i;
      }
    }
    if (temp === number && temp !== 0) {
      console.log("It is a perfect number.");
    } else {
      console.log("It is not a perfect number.");
    }
  }
  perfect(28); 

// 13.

function factors(n)
{
 var num_factors = [], i;
 
 for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
  if (n % i === 0)
  {
   num_factors.push(i);
   if (n / i !== i)
    num_factors.push(n / i);
  }
 num_factors.sort(function(x, y)
   {
     return x - y;});  // numeric sort
     return num_factors;
    }
console.log(factors(15));  // [1,3,5,15] 
console.log(factors(16));  // [1,2,4,8,16] 
console.log(factors(17));  // [1,17]

//   14.
function amountTocoins(amount, coins) 
{
 if (amount === 0) 
  {
     return [];
   } 
 else
   {
     if (amount >= coins[0]) 
       {
        left = (amount - coins[0]);
        return [coins[0]].concat( amountTocoins(left, coins) );
        } 
      else
        {
         coins.shift();
         return amountTocoins(amount, coins);
        }
    }
} 
console.log(amountTocoins(46, [25, 10, 5, 2,1]));

// 15.
function exp(b,n)
{
        var ans = 1;
        for (var i =1; i <= n; i++)
        {
                ans = b * ans;        
        }
        return ans;
}
console.log(exp(2, 3));

// 16.
function unique_char(str1){
 var str=str1;
 var uniql="";
 for (var x=0;x < str.length;x++){
 if(uniql.indexOf(str.charAt(x))==-1) {
  uniql += str[x];  
}
  }
  return uniql;  
}  
console.log(unique_char("thequickbrownfoxjumpsoverthelazydog"));

// 17.
function count(string) {
    let string1 = string.split("").sort().join("");
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
      if (string1[i] == string[i + 1]) {
        counter++;
      } else {
        console.log(string1[i] + " " + counter);
        counter = 0;
      }
    }
  }
  count("thequickbrownfoxjumpsoverthelazydog");

// 18.
function array_binarySearch(narray, delement) {
    var mposition = Math.floor(narray.length / 2);
 
    if (narray[mposition] === delement){
       return mposition;
    }
    else if (narray.length === 1) 
    {
       return null;
    }
    else if (narray[mposition] < delement) {
       var arr = narray.slice(mposition + 1);
       var res = array_binarySearch(arr, delement);
       if (res === null)
       {
          return null;
       }
       else {
          return mposition + 1 + res;
       }
    }
    else {
       var arr1 = narray.slice(0, mposition);
       return array_binarySearch(arr1, delement);
    }
 }
 
  var myArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
  console.log(array_binarySearch(myArray, 6));

// 19.
// function BiggerElements(val)
//    {
//      return function(evalue, index, array)
//      {
//      return (evalue >= val);
//      };
//    }
// var result = [11, 45, 4, 31, 64, 10]. filter(BiggerElements(10));
// console.log(result);

// 20.
// function makeid(l)
// {
// var text = "";
// var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
// for(var i=0; i < l; i++ )
// {  
// text += char_list.charAt(Math.floor(Math.random() * char_list.length));
// }
// return text;
// }
// console.log(makeid(8));

// 21.

// Function to get all possible subsets with a fixed length
function getSubsetsWithLength(arr, length) {
    const result = [];

    // Recursive function to generate subsets
    function generateSubsets(currentSubset, start) {
        if (currentSubset.length === length) {
            result.push([...currentSubset]); // Add a copy of the currentSubset to the result
            return;
        }

        for (let i = start; i < arr.length; i++) {
            currentSubset.push(arr[i]);
            generateSubsets(currentSubset, i + 1);
            currentSubset.pop();
        }
    }

    generateSubsets([], 0);
    return result;
}

// Example usage:
const inputArray = [1, 2, 3];
const subsetLength = 2;
const resultSubsets = getSubsetsWithLength(inputArray, subsetLength);

// Log the result to the console
console.log(resultSubsets);


// 22.

function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

console.log(char_count('w3resource.com', 'o'));

// 23.

function find_FirstNotRepeatedChar(str) {
  var arra1 = str.split('');
  var result = '';
  var ctr = 0;
 
  for (var x = 0; x < arra1.length; x++) {
    ctr = 0;
 
    for (var y = 0; y < arra1.length; y++) 
    {
      if (arra1[x] === arra1[y]) {
        ctr+= 1;
      }
    }
 
    if (ctr < 2) {
      result = arra1[x];
      break;
    }
  }
  return result;
}
console.log(find_FirstNotRepeatedChar('abacddbec'));

// 24.
function buble_short(a){
 var n = a.length;
 var x=a;
 let swapp;
 do{
    swapp=false;
    for(let i=0; i<n-1; i++){
      if(x[i]<x[i+1]){
        var temp = x[i];
        x[i]=x[i+1];
        temp=x[i+1];
          swapp = true; 
      }
    }
    n--;
 }
 while(swapp);
 return x;
}

console.log(buble_short( [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

// 25.

function longet_countryname(country_name){
  return country_name.reduce(function(lname , country){
    return lname.length > country.length ? lname : country;
  })
}
console.log(longet_countryname(["Australia", "Germany", "United States of America"]));


// // 26.

// function longest_substring_without_repeating_characters(input) {
//   var chars = input.split('');
//   var curr_char;
//   var str = "";
//   var longest_string = "";
//   var hash = {};
//   for (var i = 0; i < chars.length; i++) {
//   curr_char = chars[i];
//   if (!hash[chars[i]]) 
//   { 
//   str += curr_char; 
//   hash[chars[i]] = {index:i};
//   }
//   else 
//   {
//   if(longest_string.length <= str.length)
//   {
//   longest_string = str;
//   }
//   var prev_dupeIndex = hash[curr_char].index;
//   var str_FromPrevDupe = input.substring(prev_dupeIndex + 1, i);
//   str = str_FromPrevDupe + curr_char;
//   hash = {};
//   for (var j = prev_dupeIndex + 1; j <= i; j++) {
//   hash[input.charAt(j)] = {index:j};
//   }
//   }
//   }
//   return longest_string.length > str.length ? longest_string : str;
//   }
//   console.log(longest_substring_without_repeating_characters("google.com")); 
  
//   console.log(longest_substring_without_repeating_characters("example.com")); 


// 27. Write a JavaScript function that returns the longest palindrome in a given string.

function is_Palindrome(str1) {
  var rev = str1.split("").reverse().join("");
  return str1 == rev;
  }
  
  function longest_palindrome(str1){
  var max_length = 0,
  maxp = '';
  for(var i=0; i < str1.length; i++) 
  {
  var subs = str1.substr(i, str1.length);
  for(var j=subs.length; j>=0; j--) { /* Iterate through each possible substring from the end of the current substring      */
  var sub_subs_str = subs.substr(0, j); /* Create a sub-substring from the beginning of the current substring to the current position */
  if (sub_subs_str.length <= 1)
  continue;
  if (is_Palindrome(sub_subs_str))
  {
  if (sub_subs_str.length > max_length) 
  {
  max_length = sub_subs_str.length;
  maxp = sub_subs_str;
       }
  }
  }
  }
  return maxp;
  }
  console.log(longest_palindrome("abracadabra"));
  
  console.log(longest_palindrome("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE")); 


// 28.Write a JavaScript program to pass a 'JavaScript function' as parameter.

function greet() {
  return 'Hello';
}
function name(user, func){
  const message = func();
  console.log(`${message} ${user}`);
}

name('John', greet);
name('Jack', greet);
name('Sara', greet);

// 29.Write a JavaScript function to get the function name.
function abc() {
  console.log( arguments.callee.name );
}
abc();


























