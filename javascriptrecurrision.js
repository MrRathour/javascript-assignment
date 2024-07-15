// 1.Write a JavaScript program to calculate the factorial of a number.
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the
// product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3
// x 2 x 1 = 120

function factorial(x) {
    if (x === 0) {
        return 1;
    }
    return x * factorial(x - 1);

}
console.log(factorial(5));

// 2. Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers

var a = 3456 //First number
var b = 568;  //Second number 
var gcd;
while (a != b) {
    if (a > b) {
        a = a - b;
    }
    else {
        b = b - a;
    }
}
gcd = a;
console.log(gcd);

// 3. Write a JavaScript program to get the integers in range (x, y).

var range = function (start_num, end_num) {
    if (end_num - start_num === 2) {
        return [start_num + 1];
    }
    else {
        var list = range(start_num, end_num - 1);
        list.push(end_num - 1);
        return list;
    }
};
console.log(range(2, 9));

// 4. Write a JavaScript program to compute the sum of an array of integers.

// Creating array
let arr = [4, 8, 7, 13, 12];

function sumArray(arr, index) {
    if (index === arr.length) {
        return 0;
    }
    return arr[index] + sumArray(arr, index + 1);
}

console.log("Sum is " + sumArray(arr, 0));

// 5. Write a JavaScript program to compute the exponent of a number.

// Recursive function to compute Power
function pow(n, p) {
    if (p == 1) return n;
    return n * pow(n, p - 1);
}
let n = 8;
let power = 3;
console.log(pow(n, power));

// 6.Write a JavaScript program to get the first n Fibonacci numbers.

function fibonacciSeries(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
}
// Example: Generate the first 10 numbers in the Fibonacci series
console.log(fibonacciSeries(10));

// 7.Write a JavaScript program to check whether a number is even or not.

// const number = prompt("Enter a number: ");
// if (number % 2 == 0) {
//     console.log("The number is even.");
// }
// else {
//     console.log("The number is odd.");
// }

// 8. Write a merge sort program in JavaScript.








// <-----------------------javascript conditional loop------------------------------->

// 1. Write a JavaScript program that accept two integers and display the larger.

function displaylarger(one, two) {
    if (one > two) {
        console.log(one + ' is greater ');
    }
    else {
        console.log(two + ' is greater');
    }
}
displaylarger(3, 5);

// 2. Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign.

var x = 3;
var y = -7;
var z = 2;
if (x > 0 && y > 0 && z > 0) {
    alert("The sign is +");
}
else if (x < 0 && y < 0 && z < 0) {
    console.log("The sign is -");
}
else if (x > 0 && y < 0 && z < 0) {
    console.log("The sign is +");
}
else if (x < 0 && y > 0 && z < 0) {
    console.log("The sign is +");
}
else {
    console.log("The sign is -");
}

// 3. . Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.
function threenumber(three_number) {
    let value = three_number.sort();
    console.log(value.reverse());
}
threenumber([0, -1, 4]);

// 4.Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result.

var a = -5;
var b = -2;
var c = -6;
var d = 0;
var f = -1;

if (a > b && a > c && a > d && a > f) {
    console.log(a);
} else if (b > a && b > c && b > d && b > f) {
    console.log(b);
} else if (c > a && c > b && c > d && c > f) {
    console.log(c);
} else if (d > a && d > c && d > b && d > f) {
    console.log(d);
} else {
    console.log(f);
}

// 5.Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// will check if the current number is odd or even, and display a message to the
// screen.

function oddeven() {
    for (var x = 0; x <= 15; x++) {
        if (x === 0) {
            console.log(x + " is even");
        }
        else if (x % 2 === 0) {
            console.log(x + " is even");
        }
        else {
            console.log(x + " is odd");
        }
    }
}
oddeven();

// 6. Write a JavaScript program which compute, the average marks of the following
// students Then, this average is used to determine the corresponding grade.

var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

var Avgmarks = 0;

for (var i = 0; i < students.length; i++) {
    Avgmarks += students[i][1];
    var avg = (Avgmarks / students.length);
}

console.log("Average grade: " + (Avgmarks) / students.length);

if (avg < 60) {
    console.log("Grade : F");
}
else if (avg < 70) {
    console.log("Grade : D");
}
else if (avg < 80) {
    console.log("Grade : C");
} else if (avg < 90) {
    console.log("Grade : B");
} else if (avg < 100) {
    console.log("Grade : A");
}

// 7. . Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five
// print "Buzz". For numbers which are multiples of both three and five print 

for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log(i + " Fizz");
    }
    else if (i % 5 === 0) {
        console.log(i + " Buzz");
    }
    else {
        console.log(i);
    }
}
// 8. pending
// 9. 
function three_digit_armstrong_number() {
    for (var i = 1; i < 10; ++i) {
        for (var j = 0; j < 10; ++j) {
            for (var k = 0; k < 10; ++k) {
                var pow = (Math.pow(i, 3) + Math.pow(j, 3) + Math.pow(k, 3));
                var plus = (i * 100 + j * 10 + k);
                if (pow == plus) {
                    console.log(pow);
                }
            }
        }
    }
}
three_digit_armstrong_number();

// 10. Write a JavaScript program to construct the following pattern, using a nested for loop.

var x, y, chr;
for (x = 1; x <= 6; x++) {
    for (y = 1; y < x; y++) {
        chr = chr + ("*");
    }
    console.log(chr);
    chr = '';
}

// 11. Write a JavaScript program to compute the greatest common divisor (GCD)
// of two positive integers.

var a = 2154; //First number
var b = 458;  //Second number 
var gcd;
// according to eucludiean number
while (a != b) {
    if (a > b) {
        a = a - b;
    }
    else {
        b = b - a;
    }
}
gcd = a;
console.log(gcd);

// 12. Write a JavaScript program to sum the multiples of 3 and 5 under 1000.

var sum = 0;
for (var x = 0; x < 1000; x++) {
    if (x % 3 === 0 || x % 5 === 0) {
        sum += x;
    }
}
console.log(sum);

// <-----------------------javascript array------------------------------>

// 1. Write a JavaScript function to check whether an `input` is an array or not.

checkinputarray = function (input) {
    if (toString.call(input) === "[object Array]")
        return true;
    return false;
};
console.log(checkinputarray('w3resource'));
console.log(checkinputarray([1, 2, 4, 0]));

// 2. Write a JavaScript function to clone an array.

let original_array = [1, 2, 4, 0];
let clone_array = [...original_array];
console.log(clone_array);

// 3. Write a JavaScript function to get the first element of an array. Passing a
// parameter 'n' will return the first 'n' elements of the array.(PENDING)

// 4. Write a JavaScript function to get the last element of an array. Passing a
// parameter 'n' will return the last 'n' elements of the array

last = function (array, n) {
    if (array == null)
        return void 0;
    if (n == null)
        return array[array.length - 1];
    return array.slice(Math.max(array.length - n, 0));
};

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6));

// 5. Write a simple JavaScript program to join all elements of the following array into a string.
myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join('+'));

// 6. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers.

// var num=window.prompt();
// var str = num.toString();
// var result = [str[0]];

// for(var x=1; x<str.length; x++)
//   {
//     if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
//      {
//       result.push('-', str[x]);
//      }
//     else
//      {
//       result.push(str[x]);
//      }
//   }
// console.log(result.join(''));

// 7. Write a JavaScript program to sort the items of an array

var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
var arr2 = [];
var min = arr1[0];
var pos;
max = arr1[0];
for (i = 0; i < arr1.length; i++) {
    if (max < arr1[i]) max = arr1[i];
}

for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr1.length; j++) {
        if (arr1[j] != "x") {
            if (min > arr1[j]) {
                min = arr1[j];
                pos = j;
            }
        }
    }
    arr2[i] = min;
    arr1[pos] = "x";
    min = max;
}
console.log(arr2);

// 8. Write a JavaScript program to find the most frequent item of an array.(PENDING)

// 9. Write a JavaScript program which accept a string as input and swap the case of each character


str = 'c';
var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LOWER = 'abcdefghijklmnopqrstuvwxyz';
var result = [];

for (var x = 0; x < str.length; x++) {
    if (UPPER.indexOf(str[x]) !== -1) {
        result.push(str[x].toLowerCase());
    }
    else if (LOWER.indexOf(str[x]) !== -1) {
        result.push(str[x].toUpperCase());
    }
    else {
        result.push(str[x]);
    }
}
console.log(result.join(''));

// 10.

// 11. Write a JavaScript program to find the sum of squares of a numeric vector

var arr_ = [0, 1, 2, 3, 4];
console.log(SumofSq(arr_));
function SumofSq(Arr) {
    sum = 0;
    for (var i = 0; i < Arr.length; i++) {
        sum = sum + Arr[i] * Arr[i];

    }
    return sum;
}

// 12.  Write a JavaScript program to compute the sum and product of an array of integers

var array = [1, 2, 3, 4, 5, 6],
    s = 0,
    p = 1,
    i;
for (i = 0; i < array.length; i += 1) {
    s += array[i];
    p *= array[i];
}
console.log('Sum : ' + s + ' Product :  ' + p);

// 13. pending

// 14.   4. Write a JavaScript program to remove duplicate items from an array (ignore
// case sensitivity).

function removeDuplicates(num) {
    var x,
        len = num.length,
        out = [],
        obj = {};

    for (x = 0; x < len; x++) {
        obj[num[x]] = 0;
    }
    for (x in obj) {
        out.push(x);
    }
    return out;
}
var Mynum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
result = removeDuplicates(Mynum);
console.log(Mynum);
console.log(result);

//   15.  . We have the following arrays :
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th","st","nd","rd"]
// Write a JavaScript program to display the colors in the following way :
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."

// doubt 

var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

function Ordinal(n) {
    var o = ["th", "st", "nd", "rd"],
        x = n % 100;
    return x + (o[(x - 20) % 10] || o[x] || o[0]);
}

for (n = 0; n < color.length; n++) {
    var ordinal = n + 1;

    var output = (Ordinal(ordinal) + " choice is " + color[n] + ".");

    console.log(output);
}

// 16. Find the leap years in a given range of years.

function leap_year_range(st_year, end_year) {
    var year_range = [];
    for (var i = st_year; i <= end_year; i++) {
        year_range.push(i);
    }
    var new_array = [];

    year_range.forEach(
        function (year) {
            if (test_LeapYear(year))
                new_array.push(year);
        });

    return new_array;
}

function test_LeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
        return year;
    } else {
        return false;
    }
}

console.log(leap_year_range(2000, 2012));

// 17. . Write a JavaScript program to shuffle an array.
function shuffle(arra1) {
    var ctr = arra1.length, temp, index;

    // While there are elements in the array
    while (ctr > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * ctr);
        // Decrease ctr by 1
        ctr--;
        // And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}
var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(shuffle(myArray));

// 18.Write a JavaScript program to perform a binary search

function binary_Search(items, value) {
    var firstIndex = 0,
        lastIndex = items.length - 1,
        middleIndex = Math.floor((lastIndex + firstIndex) / 2);

    while (items[middleIndex] != value && firstIndex < lastIndex) {
        if (value < items[middleIndex]) {
            lastIndex = middleIndex - 1;
        }
        else if (value > items[middleIndex]) {
            firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((lastIndex + firstIndex) / 2);
    }

    return (items[middleIndex] != value) ? -1 : middleIndex;
}
var items = [1, 2, 3, 4, 5, 7, 8, 9];
console.log(binary_Search(items, 1));
console.log(binary_Search(items, 5));

// 19. There are two arrays with individual values, write a JavaScript program to
// compute the sum of each individual index value from the given arrays.

function Arrayssum(array1, array2) {
    var result = [];
    var ctr = 0;
    var x = 0;

    if (array1.length === 0)
        return "array1 is empty";
    if (array2.length === 0)
        return "array2 is empty";

    while (ctr < array1.length && ctr < array2.length) {
        result.push(array1[ctr] + array2[ctr]);
        ctr++;
    }
    if (ctr === array1.length) {
        for (x = ctr; x < array2.length; x++) {
            result.push(array2[x]);
        }
    }
    else {
        for (x = ctr; x < array1.length; x++) {
            result.push(array1[x]);
        }
    }
    return result;
}

console.log(Arrayssum([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]));


// 20. Write a JavaScript program to find duplicate values in a JavaScript array.

function find_duplicate_in_array(arra1) {
    var object = {};
    var result = [];

    arra1.forEach(function (item) {
        if (!object[item])
            object[item] = 0;
        object[item] += 1;
    })
    for (var prop in object) {
        if (object[prop] >= 2) {
            result.push(prop);
        }
    }
    return result;
}
console.log(find_duplicate_in_array([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]));

// 21. . Write a JavaScript program to flatten a nested (any depth) array. If you pass
// shallow, the array will only be flattened a single level.


var flatten = function (a, shallow, r) {
    if (!r) { r = [] }
    if (shallow) {
        return r.concat.apply(r, a);
    }
    for (var i = 0; i < a.length; i++) {
        if (a[i].constructor == Array) {
            flatten(a[i], shallow, r);
        } else {
            r.push(a[i]);
        }
    }
    return r;
}

console.log(flatten([1, [2], [3, [[4]]], [5, 6]]));

console.log(flatten([1, [2], [3, [[4]]], [5, 6]], true));

// 22. Write a JavaScript program to compute the union of two arrays.
function union(arra1, arra2) {

    if ((arra1 == null) || (arra2 == null))
        return void 0;

    var obj = {};

    for (var i = arra1.length - 1; i >= 0; --i)
        obj[arra1[i]] = arra1[i];

    for (var i = arra2.length - 1; i >= 0; --i)
        obj[arra2[i]] = arra2[i];

    var res = [];

    for (var n in obj) {

        if (obj.hasOwnProperty(n))
            res.push(obj[n]);
    }

    return res;
}
console.log(union([1, 2, 3], [100, 2, 1, 10]));

// 23.
function differenceOf2Arrays(array1, array2) {
    var temp = [];
    array1 = array1.toString().split(',').map(Number);
    array2 = array2.toString().split(',').map(Number);

    for (var i in array1) {
        if (array2.indexOf(array1[i]) === -1) temp.push(array1[i]);
    }
    for (i in array2) {
        if (array1.indexOf(array2[i]) === -1) temp.push(array2[i]);
    }
    return temp.sort((a, b) => a - b);
}

console.log(differenceOf2Arrays([1, 2, 3], [100, 2, 1, 10]));
console.log(differenceOf2Arrays([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));

// 24. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and
// 'NaN' values from an array.

function filter_array(test_array) {
    var index = -1,
        arr_length = test_array ? test_array.length : 0,
        resIndex = -1,
        result = [];

    while (++index < arr_length) {
        var value = test_array[index];

        if (value) {
            result[++resIndex] = value;
        }
    }

    return result;
}
console.log(filter_array([NaN, 0, 15, false, -22, '', undefined, 47, null]));


// 25.
var library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
];

function compare_to_sort(x, y) {
    if (x.title < y.title)
        return -1;
    if (x.title > y.title)
        return 1;
    return 0;
}

console.log(library.sort(compare_to_sort));
26.
function twoSum(nums, target_num) {
    var map = [];
    var indexnum = [];

    for (var x = 0; x < nums.length; x++) {
        if (map[nums[x]] != null) {
            index = map[nums[x]];
            indexnum[0] = index;
            indexnum[1] = x;
            break;
        }
        else {
            map[target_num - nums[x]] = x;
        }
    }
    return indexnum;
}

console.log(twoSum([10, 20, 10, 40, 50, 60, 70], 50));

// 27.
var library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
];

function property_value(array, property_key) {
    var arr = [],
        index = -1,
        arrlen = array.length, array_items;

    while (++index < arrlen) {
        array_items = array[index];

        if (array_items.hasOwnProperty(property_key)) {
            arr[arr.length] = array_items[property_key];
        }
    }

    return arr;
}

console.log(property_value(library, 'title'));

console.log(property_value(library, 'author'));

// 28.

function common_substring(data) {
    var i, ch, memo, idx = 0
    do {
        memo = null
        for (i = 0; i < data.length; i++) {
            ch = data[i].charAt(idx)
            if (!ch) break
            if (!memo) memo = ch
            else if (ch != memo) break
        }
    } while (i == data.length && idx < data.length && ++idx)

    return (data[0] || '').slice(0, idx)
}

//   30.
function merge_array(array1, array2) {
    var result_array = [];
    var arr = array1.concat(array2);
    var len = arr.length;
    var assoc = {};

    while (len--) {
        var item = arr[len];

        if (!assoc[item]) {
            result_array.unshift(item);
            assoc[item] = true;
        }
    }

    return result_array;
}


var array1 = [1, 2, 3];

var array2 = [2, 30, 1];

console.log(merge_array(array1, array2));

// 31.

const array = [2, 5, 9];

console.log(array);

const index = array.indexOf(5);
if (index > -1) { // only splice array when item is found
    array.splice(index, 1); // 2nd parameter means remove one item only
}

// array = [2, 9]
console.log(array);

// 32.

function contains(arr, element) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true;
        }
    }
    return false;
}
arr = [2, 5, 9, 6];
console.log(contains(arr, 5));

// 33.

arr = [1, 3, 6, 3, -5];
console.log(arr);
arr.length = 0;
console.log(arr);

// 34. Write a JavaScript function to get nth largest element from an unsorted array.

function nthlargest(arra, highest) {
    var x = 0,
        y = 0,
        z = 0,
        temp = 0,
        tnum = arra.length,
        flag = false,
        result = false;

    while (x < tnum) {
        y = x + 1;

        if (y < tnum) {
            for (z = y; z < tnum; z++) {

                if (arra[x] < arra[z]) {
                    temp = arra[z];
                    arra[z] = arra[x];
                    arra[x] = temp;
                    flag = true;
                } else {
                    continue;
                }
            }
        }

        if (flag) {
            flag = false;
        } else {
            x++;
            if (x === highest) {

                result = true;
            }
        }
        if (result) {
            break;
        }
    }
    return (arra[(highest - 1)]);
}

console.log(nthlargest([43, 56, 23, 89, 88, 90, 99, 652], 4));

// 35.

function random_item(items) {

    return items[Math.floor(Math.random() * items.length)];

}

var items = [254, 45, 212, 365, 2543];
console.log(random_item(items));

// 36.

function array_filled(n, val) {
    return Array.apply(null, Array(n)).map(Number.prototype.valueOf, val);
}

console.log(array_filled(6, 0));

// 37.

function array_filled(n, val) {
    return Array.apply(null, Array(n)).map(String.prototype.valueOf, val);
}

console.log(array_filled(3, 'default value'));
console.log(array_filled(4, 'password'));

// 38.
function move(arr, old_index, new_index) {
    while (old_index < 0) {
        old_index += arr.length;
    }
    while (new_index < 0) {
        new_index += arr.length;
    }
    if (new_index >= arr.length) {
        var k = new_index - arr.length;
        while ((k--) + 1) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr;
}
console.log(move([10, 20, 30, 40, 50], 0, 2));

// 39.

function filter_array(test_array) {
    var index = -1,
        arr_length = test_array ? test_array.length : 0,
        resIndex = -1,
        result = [];

    while (++index < arr_length) {
        var value = test_array[index];

        if (value) {
            result[++resIndex] = value;
        }
    }

    return result;
}
console.log(filter_array([NaN, 0, 15, false, -22, '', undefined, 47, null]));

// 40.
function array_range(start, len) {
    var arr = new Array(len);
    for (var i = 0; i < len; i++, start++) {
        arr[i] = start;
    }
    return arr;
}


console.log(array_range(1, 4));

console.log(array_range(-6, 4));

// 41.

function rangeBetwee(start, end) {

    if (start > end) {
        var arr = new Array(start - end + 1);
        for (var i = 0; i < arr.length; i++, start--) {
            resarrult[i] = start;
        }
        return arr;
    }
    else {
        var arro = new Array(end - start + 1);

        for (var j = 0; j < arro.length; j++, start++) {
            arro[j] = start;
        }
        return arro;
    }
}

console.log(rangeBetwee(4, 7));
console.log(rangeBetwee(-4, 7));

// 42.

function difference(arr1, arr2) {

    var a1 = flatten(arr1, true);
    var a2 = flatten(arr2, true);

    var a = [], diff = [];
    for (var i = 0; i < a1.length; i++)
        a[a1[i]] = false;
    for (i = 0; i < a2.length; i++)
        if (a[a2[i]] === true) { delete a[a2[i]]; }
        else a[a2[i]] = true;
    for (var k in a)
        diff.push(k);
    return diff;
}

var flatten = function (a, shallow, r) {
    if (!r) { r = []; }
    if (shallow) {
        return r.concat.apply(r, a);
    }
    for (i = 0; i < a.length; i++) {
        if (a[i].constructor == Array) {
            flatten(a[i], shallow, r);
        } else {
            r.push(a[i]);
        }
    }
    return r;
};
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));


// <-----------------------javascript dates------------------------------->


// 1.

var is_date = function (input) {
    if (Object.prototype.toString.call(input) === "[object Date]")
        return true;
    return false;
};

console.log(is_date("October 13, 2014 11:13:00"));
console.log(is_date(new Date(86400000)));
console.log(is_date(new Date(99, 5, 24, 11, 33, 30, 0)));
console.log(is_date([1, 2, 4, 0]));

// 2.

var curday = function (sp) {
    today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //As January is 0.
    var yyyy = today.getFullYear();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    return (mm + sp + dd + sp + yyyy);
};
console.log(curday('/'));
console.log(curday('-'));

// 3.

var getDaysInMonth = function (month, year) {
    return new Date(year, month, 0).getDate();
};
console.log(getDaysInMonth(1, 2012));
console.log(getDaysInMonth(2, 2012));
console.log(getDaysInMonth(9, 2012));
console.log(getDaysInMonth(12, 2012));

// 4.

var month_name = function (dt) {
    mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return mlist[dt.getMonth()];
};
console.log(month_name(new Date("10/11/2009")));
console.log(month_name(new Date("11/13/2014")));

// 5.

var compare_dates = function (date1, date2) {
    if (date1 > date2) return ("Date1 > Date2");
    else if (date1 < date2) return ("Date2 > Date1");
    else return ("Date1 = Date2");
}

console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));
console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));
console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));


// 6.

var add_minutes = function (dt, minutes) {
    return new Date(dt.getTime() + minutes * 60000);
}
console.log(add_minutes(new Date(2014, 10, 2), 30).toString());

// 7.

var is_weekend = function (date1) {
    var dt = new Date(date1);

    if (dt.getDay() == 6 || dt.getDay() == 0) {
        return "weekend";
    }
}

console.log(is_weekend('Nov 15, 2014'));
console.log(is_weekend('Nov 16, 2014'));
console.log(is_weekend('Nov 17, 2014'));

// 8.

function diff_days(dt2, dt1) {

    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60 * 24);
    return Math.abs(Math.round(diff));

}

dt1 = new Date(2014, 10, 2);
dt2 = new Date(2014, 10, 6);
console.log(diff_days(dt1, dt2));

dt1 = new Date("October 13, 2014 08:11:00");
dt2 = new Date("October 19, 2014 11:13:00");
console.log(diff_days(dt1, dt2));

// 9.   

var lastday = function (y, m) {
    return new Date(y, m + 1, 0).getDate();
}
console.log(lastday(2014, 0));
console.log(lastday(2014, 1));
console.log(lastday(2014, 11));

// 10.
var yesterday = function (date1) {
    var dt = new Date(date1);
    return new Date((dt.setDate(dt.getDate() - 1))).toString();
}
console.log(yesterday('Nov 15, 2014'));
console.log(yesterday('Nov 16, 2015'));
console.log(yesterday('Nov 17, 2016'));

// 11.

function max_date(all_dates) {
    var max_dt = all_dates[0],
        max_dtObj = new Date(all_dates[0]);

    all_dates.forEach(function (dt, index) {
        var current_dtObj = new Date(dt);

        if (current_dtObj > max_dtObj) {
            max_dt = dt;
            max_dtObj = new Date(dt);
        }
    });
    return max_dt;
}
console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03']));

// 12.
function min_date(all_dates) {
    var min_dt = all_dates[0],
        min_dtObj = new Date(all_dates[0]);
    all_dates.forEach(function (dt, index) {
        if (new Date(dt) < min_dtObj) {
            min_dt = dt;
            min_dtObj = new Date(dt);
        }
    });
    return min_dt;
}
console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03']));

// 13.

function timeConvert(n) {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return num + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s).";
}

console.log(timeConvert(200));

// 14.
function days_of_a_year(year) {
    return isLeapYear(year) ? 366 : 365;
}
function isLeapYear(year) {
    return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}

console.log(days_of_a_year(2015));
console.log(days_of_a_year(2016));

// 15.

function quarter_of_the_year(date) {
    var month = date.getMonth() + 1;
    return (Math.ceil(month / 3));
}


console.log(quarter_of_the_year(new Date()));
console.log(quarter_of_the_year(new Date(2015, 1, 21)));
console.log(quarter_of_the_year(new Date(2015, 10, 18)));

// 16.

function days_passed(dt) {
    var current = new Date(dt.getTime());
    var previous = new Date(dt.getFullYear(), 0, 1);

    return Math.ceil((current - previous + 1) / 86400000);
}
console.log(days_passed(new Date(2015, 0, 15)));
console.log(days_passed(new Date(2015, 11, 14)));

// 17.

function Unix_timestamp(t) {
    var dt = new Date(t * 1000);
    var hr = dt.getHours();
    var m = "0" + dt.getMinutes();
    var s = "0" + dt.getSeconds();
    return hr + ':' + m.substr(-2) + ':' + s.substr(-2);
}

console.log(Unix_timestamp(1412743274));

// 18.

function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

console.log(calculate_age(new Date(1982, 11, 4)));

console.log(calculate_age(new Date(1962, 1, 1)));

// 19.

function day_of_the_month(d) {
    return (d.getDate() < 10 ? '0' : '') + d.getDate();
}

d = new Date();
console.log(day_of_the_month(d));

d = new Date(2015, 10, 1);
console.log(day_of_the_month(d));

// 20

Date.shortDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function short_Days(dt) {
    return Date.shortDays[dt.getDay()];
}

dt = new Date();
console.log(short_Days(dt));

dt = new Date(2015, 10, 1);
console.log(short_Days(dt));

// 21.

Date.longDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function long_Days(dt) {
    return Date.longDays[dt.getDay()];
}

dt = new Date();
console.log(long_Days(dt));

dt = new Date(2015, 10, 1);
console.log(long_Days(dt));

// 22.

function ISO8601_week_no(dt) {
    var tdt = new Date(dt.valueOf());
    var dayn = (dt.getDay() + 6) % 7;
    tdt.setDate(tdt.getDate() - dayn + 3);
    var firstThursday = tdt.valueOf();
    tdt.setMonth(0, 1);
    if (tdt.getDay() !== 4) {
        tdt.setMonth(0, 1 + ((4 - tdt.getDay()) + 7) % 7);
    }
    return 1 + Math.ceil((firstThursday - tdt) / 604800000);
}

dt = new Date();
console.log(ISO8601_week_no(dt));

dt = new Date(2015, 10, 1);
console.log(ISO8601_week_no(dt));

// 23.

function english_ordinal_suffix(dt) {
    return dt.getDate() + (dt.getDate() % 10 == 1 && dt.getDate() != 11 ? 'st' : (dt.getDate() % 10 == 2 && dt.getDate() != 12 ? 'nd' : (dt.getDate() % 10 == 3 && dt.getDate() != 13 ? 'rd' : 'th')));
}

dt = new Date();
console.log(english_ordinal_suffix(dt));

dt = new Date(2015, 10, 1);
console.log(english_ordinal_suffix(dt));

// 24. 

function ISO8601_week_no(dt) {
    var tdt = new Date(dt.valueOf());
    var dayn = (dt.getDay() + 6) % 7;
    tdt.setDate(tdt.getDate() - dayn + 3);
    var firstThursday = tdt.valueOf();
    tdt.setMonth(0, 1);
    if (tdt.getDay() !== 4) {
        tdt.setMonth(0, 1 + ((4 - tdt.getDay()) + 7) % 7);
    }
    return 1 + Math.ceil((firstThursday - tdt) / 604800000);
}

dt = new Date();
console.log(ISO8601_week_no(dt));

dt = new Date(2015, 10, 1);
console.log(ISO8601_week_no(dt));

// 25.

Date.longMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function full_month(dt) {
    return Date.longMonths[dt.getMonth()];
}

dt = new Date();
console.log(full_month(dt));

dt = new Date(2015, 10, 1);
console.log(full_month(dt));

// 26.

function numeric_month(dt) {
    return (dt.getMonth() < 9 ? '0' : '') + (dt.getMonth() + 1);
}
dt = new Date();
console.log(numeric_month(dt));

dt = new Date(2015, 10, 1);
console.log(numeric_month(dt));

// 27.

Date.shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function short_months(dt) {
    return Date.shortMonths[dt.getMonth()];
}

dt = new Date();
console.log(short_months(dt));

dt = new Date(2015, 10, 1);
console.log(short_months(dt));

// 28.
function full_year(dt) {
    return dt.getFullYear();
}
dt = new Date();
console.log(full_year(dt));

dt = new Date(2015, 10, 1);
console.log(full_year(dt));

// 29.

function sort_year(dt) {
    return ('' + dt.getFullYear()).substr(2);
}

dt = new Date();
console.log(sort_year(dt));

dt = new Date(1989, 10, 1);
console.log(sort_year(dt));

// 30.

function lower_am_pm(dt) {
    return dt.getHours() < 12 ? 'am' : 'pm';
}

dt = new Date();
console.log(lower_am_pm(dt));

dt = new Date(1989, 10, 1);
console.log(lower_am_pm(dt));

// 31.

function upper_am_pm(dt) {
    return dt.getHours() < 12 ? 'AM' : 'PM';
}

dt = new Date();
console.log(upper_am_pm(dt));

dt = new Date(1989, 10, 1);
console.log(upper_am_pm(dt));

// 32.

function internet_time(dt) {
    return Math.floor((((dt.getUTCHours() + 1) % 24) + dt.getUTCMinutes() / 60 + dt.getUTCSeconds() / 3600) * 1000 / 24);
}

dt = new Date();
console.log(internet_time(dt));

dt = new Date(1989, 10, 1);
console.log(internet_time(dt));

// 33.

function hours_with_zeroes(dt) {
    return ((dt.getHours() % 12 || 12) < 10 ? '0' : '') + (dt.getHours() % 12 || 12);
}

dt = new Date();
console.log(hours_with_zeroes(dt));

dt = new Date(1989, 10, 1);
console.log(hours_with_zeroes(dt));

// 34.
function hours_without_zeroes(dt) {
    return dt.getHours();
}

dt = new Date();
console.log(hours_without_zeroes(dt));

dt = new Date(1989, 10, 1);
console.log(hours_without_zeroes(dt));

// 35.

function minutes_with_leading_zeros(dt) {
    return (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes();
}

dt = new Date();
console.log(minutes_with_leading_zeros(dt));

dt = new Date(1989, 10, 1);
console.log(minutes_with_leading_zeros(dt));

// 36.

function seconds_with_leading_zeros(dt) {
    return (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes();
}

dt = new Date();
console.log(seconds_with_leading_zeros(dt));

dt = new Date(1989, 10, 1);
console.log(seconds_with_leading_zeros(dt));

// 37.

function seconds_with_leading_zeros(dt) {
    return /\((.*)\)/.exec(new Date().toString())[1];
}

dt = new Date();
console.log(seconds_with_leading_zeros(dt));

dt = new Date(1989, 10, 1);
console.log(seconds_with_leading_zeros(dt)); ''

// 38.


function daylights_savings(dt) {
    var dst = null;
    for (var i = 0; i < 12; ++i) {
        var d = new Date(dt.getFullYear(), i, 1);
        var offset = dt.getTimezoneOffset();

        if (dst === null)
            dst = offset;
        else if (offset < dst) {
            dst = offset;
            break;
        }
        else if (offset > dst)
            break;
    }
    return (dt.getTimezoneOffset() == dst) | 0;
}

dt = new Date();
console.log(daylights_savings(dt));

dt = new Date(1989, 10, 1);
console.log(daylights_savings(dt));

// 39.
function diff_to_GMT(dt) {
    return (-dt.getTimezoneOffset() < 0 ? '-' : '+') + (Math.abs(dt.getTimezoneOffset() / 60) < 10 ? '0' : '') + (Math.abs(dt.getTimezoneOffset() / 60)) + '00';
}

dt = new Date();
console.log(diff_to_GMT(dt));

dt = new Date(1989, 10, 1);
console.log(diff_to_GMT(dt));


// 40.

function timezone_offset_in_seconds(dt) {
    return -dt.getTimezoneOffset() * 60;
}

dt = new Date();
console.log(timezone_offset_in_seconds(dt));

dt = new Date(1989, 10, 1);
console.log(timezone_offset_in_seconds(dt));

// 41.
function add_years(dt, n) {
    return new Date(dt.setFullYear(dt.getFullYear() + n));
}

dt = new Date();
console.log(add_years(dt, 10).toString());

dt = new Date(2014, 10, 2);
console.log(add_years(dt, 10).toString());

// 42.

function add_weeks(dt, n) {
    return new Date(dt.setDate(dt.getDate() + (n * 7)));
}

dt = new Date();
console.log(add_weeks(dt, 10).toString());

dt = new Date(2014, 10, 2);
console.log(add_weeks(dt, 10).toString());


// 43.
function add_months(dt, n) {
    return new Date(dt.setMonth(dt.getMonth() + n));
}

dt = new Date();
console.log(add_months(dt, 10).toString());

dt = new Date(2014, 10, 2);
console.log(add_months(dt, 10).toString());

// 44.

function diff_minutes(dt2, dt1) {

    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= 60;
    return Math.abs(Math.round(diff));

}

dt1 = new Date(2014, 10, 2);
dt2 = new Date(2014, 10, 3);
console.log(diff_minutes(dt1, dt2));

// 45.

function diff_hours(dt2, dt1) {

    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60);
    return Math.abs(Math.round(diff));

}
dt1 = new Date(2014, 10, 2);
dt2 = new Date(2014, 10, 3);

console.log(diff_hours(dt1, dt2));
dt1 = new Date("October 13, 2014 08:11:00");
dt2 = new Date("October 13, 2014 11:13:00");
console.log(diff_hours(dt1, dt2));

// 46.

function diff_days(dt2, dt1) {

    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60 * 24);
    return Math.abs(Math.round(diff));

}

dt1 = new Date(2014, 10, 2);
dt2 = new Date(2014, 10, 6);
console.log(diff_days(dt1, dt2));

dt1 = new Date("October 13, 2014 08:11:00");
dt2 = new Date("October 19, 2014 11:13:00");
console.log(diff_days(dt1, dt2));

// 47.
function diff_weeks(dt2, dt1) {

    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60 * 24 * 7);
    return Math.abs(Math.round(diff));

}

dt1 = new Date(2014, 10, 2);
dt2 = new Date(2014, 10, 11);
console.log(diff_weeks(dt1, dt2));

dt1 = new Date("June 13, 2014 08:11:00");
dt2 = new Date("October 19, 2014 11:13:00");
console.log(diff_weeks(dt1, dt2));

// 48.

function diff_months(dt2, dt1) {

    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60 * 24 * 7 * 4);
    return Math.abs(Math.round(diff));

}

dt1 = new Date(2014, 10, 2);
dt2 = new Date(2014, 10, 11);
console.log(diff_months(dt1, dt2));

dt1 = new Date("June 13, 2014 08:11:00");
dt2 = new Date("October 19, 2014 11:13:00");
console.log(diff_months(dt1, dt2));

// 49.

function diff_years(dt2, dt1) {

    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60 * 24);
    return Math.abs(Math.round(diff / 365.25));

}

dt1 = new Date(2014, 10, 2);
dt2 = new Date(2014, 10, 11);
console.log(diff_years(dt1, dt2));

dt1 = new Date("June 13, 2014 08:11:00");
dt2 = new Date("October 19, 2017 11:13:00");
console.log(diff_years(dt1, dt2));

// 50.

function startOfWeek(date) {
    var diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);

    return new Date(date.setDate(diff));

}

dt = new Date();

console.log(startOfWeek(dt).toString());

// 51.

function endOfWeek(date) {
    var lastday = date.getDate() - (date.getDay() - 1) + 6;
    return new Date(date.setDate(lastday));
}
dt = new Date();
console.log(endOfWeek(dt).toString());

// 52.

function startOfMonth(date) {

    return new Date(date.getFullYear(), date.getMonth(), 1);

}

dt = new Date();

console.log(startOfMonth(dt).toString());

// 53.

function endOfMonth(date) {

    return new Date(date.getFullYear(), date.getMonth() + 1, 0);

}

dt = new Date();

console.log(endOfMonth(dt).toString());

// <--------------javascript string---------------------->

// 1.

is_string = function (input) {
    if (Object.prototype.toString.call(input) === '[object String]')
        return true;
    else
        return false;
};
console.log(is_string('w3resource'));
console.log(is_string([1, 2, 4, 0]));

// 2.

is_Blank = function (input) {
    if (input.length === 0)
        return true;
    else
        return false;
}
console.log(is_Blank(''));
console.log(is_Blank('abc'));

// 3.

string_to_array = function (str) {
    return str.trim().split(" ");
};
console.log(string_to_array("Robin Singh"));

// 4.

truncate_string = function (str1, length) {

    if ((str1.constructor === String) && (length > 0)) {
        return str1.slice(0, length);
    }
};
console.log(truncate_string("Robin Singh", 4));

// 5.
abbrev_name = function (str1) {
    var split_names = str1.trim().split(" ");
    if (split_names.length > 1) {
        return (split_names[0] + " " + split_names[1].charAt(0) + ".");
    }
    return split_names[0];
};
console.log(abbrev_name("Robin Singh"));

// 6.

protect_email = function (user_email) {
    var avg, splitted, part1, part2;
    splitted = user_email.split("@");
    part1 = splitted[0];
    avg = part1.length / 2;
    part1 = part1.substring(0, (part1.length - avg));
    part2 = splitted[1];
    return part1 + "...@" + part2;
};

console.log(protect_email("robin_singh@example.com"));

// 7.

string_parameterize = function (str1) {
    return str1.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");
};
console.log(string_parameterize("Robin Singh from USA."));

// 8.

capitalize = function (str1) {
    return str1.charAt(0).toUpperCase() + str1.slice(1);
}

console.log(capitalize('js string exercises'));

// 9.

function capital_letter(str) {
    str = str.split(" ");
    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    return str.join(" ");
}
console.log(capital_letter("Write a JavaScript program to capitalize the first letter of each word of a given string."));

// 10.

swapcase = function swapcase(str) {
    return str.replace(/([a-z]+)|([A-Z]+)/g, function (match, chr) {
        return chr ? match.toUpperCase() : match.toLowerCase();
    });
}
console.log(swapcase('AaBbc'));

// 11.

camelize = function camelize(str) {
    return str.replace(/\W+(.)/g, function (match, chr) {
        return chr.toUpperCase();
    });
}

console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));

// 12.

function uncamelize(str, separator) {
    // Assume default separator is a single space.
    if (typeof (separator) == "undefined") {
        separator = " ";
    }
    // Replace all capital letters by separator followed by lowercase one
    var str = str.replace(/[A-Z]/g, function (letter) {
        return separator + letter.toLowerCase();
    });
    // Remove first separator
    return str.replace("/^" + separator + "/", '');
}
console.log(uncamelize('helloWorld'));
console.log(uncamelize('helloWorld', '-'));
console.log(uncamelize('helloWorld', '_'));


// 13.

repeat = function repeat(str, count) {
    if (typeof (count) == "undefined") {
        count = 1;
    }
    return count < 1 ? '' : new Array(count + 1).join(str);
}
console.log(repeat('Ha!'));
console.log(repeat('Ha!', 2));
console.log(repeat('Ha!', 3));

// 14.

insert = function insert(main_string, ins_string, pos) {
    if (typeof (pos) == "undefined") {
        pos = 0;
    }
    if (typeof (ins_string) == "undefined") {
        ins_string = '';
    }
    return main_string.slice(0, pos) + ins_string + main_string.slice(pos);
}
console.log(insert('We are doing some exercises.'));
console.log(insert('We are doing some exercises.', 'JavaScript '));
console.log(insert('We are doing some exercises.', 'JavaScript ', 18));

// 15.

function humanize(number) {
    if (number % 100 >= 11 && number % 100 <= 13)
        return number + "th";

    switch (number % 10) {
        case 1: return number + "st";
        case 2: return number + "nd";
        case 3: return number + "rd";
    }

    return number + "th";
}
console.log(humanize(1));
console.log(humanize(20));
console.log(humanize(302));

// 16.

text_truncate = function (str, length, ending) {
    if (length == null) {
        length = 100;
    }
    if (ending == null) {
        ending = '...';
    }
    if (str.length > length) {
        return str.substring(0, length - ending.length) + ending;
    } else {
        return str;
    }
};
console.log(text_truncate('We are doing JS string exercises.'))
console.log(text_truncate('We are doing JS string exercises.', 19))
console.log(text_truncate('We are doing JS string exercises.', 15, '!!'))

// 17.

string_chop = function (str, size) {
    if (str == null) return [];
    str = String(str);
    size = ~~size;
    return size > 0 ? str.match(new RegExp('.{1,' + size + '}', 'g')) : [str];
}
console.log(string_chop('w3resource'));
console.log(string_chop('w3resource', 2));
console.log(string_chop('w3resource', 3));

// 18.

// Source: https://bit.ly/3hEZdCl
// Function to count the occurrences of a substring within a main string
const count_substr = (str, searchValue) => {
    let count = 0, // Initialize a counter variable
        i = 0; // Initialize an index variable

    while (true) {
        const r = str.indexOf(searchValue, i);

        // If the searchValue is found in the string
        if (r !== -1) {
            // Increment the counter by 1 and update the index to start searching from the next position
            [count, i] = [count + 1, r + 1];
        } else {
            // If the searchValue is not found, return the final count
            return count;
        }
    }
};

// Test cases
console.log(count_substr("The quick brown fox jumps over the lazy dog", 'the'));
console.log(count_substr("The quick brown fox jumps over the lazy dog", 'fox'));

// 19.

function escape_html(str) {

    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();

    var map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };

    return str.replace(/[&<>"']/g, function (m) { return map[m]; });
}
console.log(escape_html('PHP & MySQL'));
console.log(escape_html('3 > 2'));

// 20.

function formatted_string(pad, user_str, pad_pos) {
    if (typeof user_str === 'undefined')
        return pad;
    if (pad_pos == 'l') {
        return (pad + user_str).slice(-pad.length);
    }
    else {
        return (user_str + pad).substring(0, pad.length);
    }
}
console.log(formatted_string('0000', 123, 'l'));
console.log(formatted_string('00000000', 123, ''));

// 21.


function repeat_string(string, count) {
    if ((string == null) || (count < 0) || (count === Infinity) || (count == null)) {
        return ('Error in string or count.');
    }
    count = count | 0; // Floor count.
    return new Array(count + 1).join(string);
}

console.log(repeat_string('a', 4));
console.log(repeat_string('a'));
console.log(repeat_string('a', -2));
console.log(repeat_string('a', Infinity));


// 22.

function subStrAfterChars(str, char, pos) {
    if (pos == 'b')
        return str.substring(str.indexOf(char) + 1);
    else if (pos == 'a')
        return str.substring(0, str.indexOf(char));
    else
        return str;
}

console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':', 'a'));

console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E', 'b'));

// 23.
function strip(str) {
    return str.replace(/^\s+|\s+$/g, '');
}

console.log(strip('w3resource '));
console.log(strip(' w3resource'));
console.log(strip(' w3resource  '));

// 24.

function truncate(str, no_words) {
    return str.split(" ").splice(0, no_words).join(" ");
}
console.log(truncate('The quick brown fox jumps over the lazy dog', 4));

// 25.

function alphabetize_string(str) {

    return str.split('').sort().join('').trim();

}
console.log(alphabetize_string('United States'));

// 26.

function remove_first_occurrence(str, searchstr) {
    var index = str.indexOf(searchstr);
    if (index === -1) {
        return str;
    }
    return str.slice(0, index) + str.slice(index + searchstr.length);
}

console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));


// 27.

function ascii_to_hexa(str) {
    var arr1 = [];
    for (var n = 0, l = str.length; n < l; n++) {
        var hex = Number(str.charCodeAt(n)).toString(16);
        arr1.push(hex);
    }
    return arr1.join('');
}

console.log(ascii_to_hexa('12'));
console.log(ascii_to_hexa('100'));

// 28.

function hex_to_ascii(str1) {
    var hex = str1.toString();
    var str = '';
    for (var n = 0; n < hex.length; n += 2) {
        str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
    }
    return str;
}
console.log(hex_to_ascii('3132'));
console.log(hex_to_ascii('313030'));

// 29.

function search_word(text, word) {

    var x = 0, y = 0;

    for (i = 0; i < text.length; i++) {
        if (text[i] == word[0]) {
            for (j = i; j < i + word.length; j++) {
                if (text[j] == word[j - i]) {
                    y++;
                }
                if (y == word.length) {
                    x++;
                }
            }
            y = 0;
        }
    }
    return "'" + word + "' was found " + x + " times.";
}

console.log(search_word('The quick brown fox', 'fox'));
console.log(search_word('aa, bb, cc, dd, aa', 'aa'));


// 30.

function string_endsWith(str, suffix) {

    if (((str === null) || (str === '')) || ((suffix === null) || (suffix === ''))) {
        return false;
    }
    else {
        str = str.toString();
        suffix = suffix.toString();
    }
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

console.log(string_endsWith('JS PHP PYTHON', 'PYTHON'));

console.log(string_endsWith('JS PHP PYTHON', ''));


// 31.

function escape_html(str) {

    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();

    var map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };

    return str.replace(/[&<>"']/g, function (m) { return map[m]; });
}
console.log(escape_html('PHP & MySQL'));
console.log(escape_html('3 > 2'));


// 32.

function remove_non_ascii(str) {

    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();

    return str.replace(/[^\x20-\x7E]/g, '');
}

console.log(remove_non_ascii('äÄçÇéÉêPHP-MySQLöÖÐþúÚ'));

// 33.
function remove_non_word(str) {
    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();

    var PATTERN = /[^\x20\x2D0-9A-Z\x5Fa-z\xC0-\xD6\xD8-\xF6\xF8-\xFF]/g;

    return str.replace(PATTERN, '');
}
console.log(remove_non_word('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'));

// 34.

function sentenceCase(str) {
    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();

    return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}

console.log(sentenceCase('PHP exercises. python exercises.'));

// 35.
const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');
console.log(stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'));

// 36.

function zeroFill(number, width, osign) {
    var num = '' + Math.abs(number),
        zerosw = width - num.length,
        sign = number >= 0;
    return (sign ? (osign ? '+' : '') : '-') +
        Math.pow(10, Math.max(0, zerosw)).toString().substr(1) + num;
}

console.log(zeroFill(120, 5, '-'));

console.log(zeroFill(29, 4));

// 37.

function compare_strings(str1, str2) {
    var areEqual = str1.toUpperCase() === str2.toUpperCase();
    return areEqual;
}

console.log(compare_strings('abcd', 'AbcD'));
console.log(compare_strings('ABCD', 'Abce'));

// 38.

function case_insensitive_search(str, search_str) {
    var result = str.search(new RegExp(search_str, "i"));

    if (result > 0)
        return 'Matched';
    else
        return 'Not Matched';
}

console.log(case_insensitive_search('JavaScript Exercises', 'exercises'));

console.log(case_insensitive_search('JavaScript Exercises', 'Exercises'));

console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess'));

// <--------------------- javascript validation regular--------------->
// 1.

function upper_case(str) {
    regexp = /^[A-Z]/;
    if (regexp.test(str)) {
        console.log("String's first character is uppercase");
    }
    else {
        console.log("String's first character is not uppercase");
    }
}
upper_case('Abcd');
upper_case('abcd');

// 2.

function is_creditCard(str) {
    regexp = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;

    if (regexp.test(str)) {
        return true;
    }
    else {
        return false;
    }
}

console.log(is_creditCard("378282246310006"));

console.log(is_creditCard("37828224630006"));

// 3.

function valid_email(str) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mailformat.test(str)) {
        console.log("Valid email address!");
    }
    else {
        console.log("You have entered an invalid email address!");
    }
}

valid_email('me-info@example.com');

// 4.
function is_dateString(str) {
    regexp = /^(1[0-2]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}$/;

    if (regexp.test(str)) {
        return true;
    }
    else {
        return false;
    }
}

console.log(is_dateString("01/01/2015"));

console.log(is_dateString("01/22/2015"));

console.log(is_dateString("32/01/2015"));

// 5.

function Trim(str) {
    var result;
    if (typeof str === 'string') {
        result = str.replace(/^\s+|\s+$/g, '');
        return result;
    }
    else {
        return false;
    }
}
console.log(Trim(' w3resource '));

// 6.

function count_words() {
    str1 = document.getElementById("InputText").value;
    //exclude  start and end white-space
    str1 = str1.replace(/(^\s*)|(\s*$)/gi, "");
    //convert 2 or more spaces to 1  
    str1 = str1.replace(/[ ]{2,}/gi, " ");
    // exclude newline with a start spacing  
    str1 = str1.replace(/\n /, "\n");
    document.getElementById("noofwords").value = str1.split(' ').length;
}

// 7.

function is_IP(str) {
    regexp = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;

    if (regexp.test(str)) {
        return true;
    }
    else {
        return false;
    }
}

console.log(is_IP('198.156.23.5'));
console.log(is_IP("172.16.0.1"));

// 8.

function vowel_Count(str) {

    return str.replace(/[^aeiou]/g, "").length;
}

console.log(vowel_Count("Python"));
console.log(vowel_Count("w3resource.com"));

// 9.

function is_url(str) {
    regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (regexp.test(str)) {
        return true;
    }
    else {
        return false;
    }
}

console.log(is_url("http://www.example.com"));
console.log(is_url("https://www.example.com"));
console.log(is_url("www.example.com"));

// 10. 

function is_alphaNumeric(str) {
    regexp = /^[A-Za-z0-9]+$/;

    if (regexp.test(str)) {
        return true;
    }
    else {
        return false;
    }
}

console.log(is_alphaNumeric("37828sad"));

console.log(is_alphaNumeric("3243#$sew"));

// 11.

function is_timeString(str) {
    regexp = /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/;

    if (regexp.test(str)) {
        return true;
    }
    else {
        return false;
    }
}

console.log(is_timeString("11:35:30"));

console.log(is_timeString("90:90:90"));

// 12. 
function is_usZipCode(str) {
    regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;

    if (regexp.test(str)) {
        return true;
    }
    else {
        return false;
    }
}

console.log(is_usZipCode("03201-2150"));

console.log(is_usZipCode("7892"));

// 13.

function is_ukPostCode(str) {
    regexp = /^[A-Z]{1,2}[0-9RCHNQ][0-9A-Z]?\s?[0-9][ABD-HJLNP-UW-Z]{2}$|^[A-Z]{2}-?[0-9]{4}$/;

    if (regexp.test(str)) {
        return true;
    }
    else {
        return false;
    }
}

console.log(is_ukPostCode("B294HJ"));

console.log(is_ukPostCode("7892"));

// 14.

function is_caPostalCode(str) {
    regexp = /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]\s?[0-9][A-Z][0-9]$/;

    if (regexp.test(str)) {
        return true;
    }
    else {
        return false;
    }
}

console.log(is_caPostalCode("K8V3Y1"));

console.log(is_caPostalCode("K8V 3Y1"));

console.log(is_caPostalCode("Z4V4X1"));

// 15.

function is_socialSecurity_Number(str) {
    regexp = /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/;

    if (regexp.test(str)) {
        return true;
    }
    else {
        return false;
    }
}

console.log(is_socialSecurity_Number("019-90-5680"));

console.log(is_socialSecurity_Number("K8V-3Y1"));

// 16.

function is_hexadecimal(str) {
    regexp = /^[0-9a-fA-F]+$/;

    if (regexp.test(str)) {
        return true;
    }
    else {
        return false;
    }
}

console.log(is_hexadecimal("ffffff"));

console.log(is_hexadecimal("fz5500"));

// 17.

function is_hexcolor(str) {
    regexp = /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;

    if (regexp.test(str)) {
        return true;
    }
    else {
        return false;
    }
}

console.log(is_hexcolor("#444"));

console.log(is_hexcolor("#3333"));

// 18.

function is_domain(str) {
    regexp = /^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i;

    if (regexp.test(str)) {
        return true;
    }
    else {
        return false;
    }
}

console.log(is_domain('www.example.com'));
console.log(is_domain('www.npm.co.uk'));

// 19.

function is_html(str) {
    regexp = /<([a-z]+) *[^/]*?>/;

    if (regexp.test(str)) {
        return true;
    }
    else {
        return false;
    }
}

console.log(is_html(''));

console.log(is_html(''));

console.log(is_html('.selector'));

// 20.

function is_alphaDash(str) {
    regexp = /^[a-z0-9_\-]+$/i;

    if (regexp.test(str)) {
        return true;
    }
    else {
        return false;
    }
}

console.log(is_alphaDash('12-133'));

console.log(is_alphaDash('100_23'));

// 21.

function thousands_separators(num) {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
}

console.log(thousands_separators(1000));
console.log(thousands_separators(10000.23));
console.log(thousands_separators(100000));

// <----------------javascript Dom------------------------>

// 1.






































































































