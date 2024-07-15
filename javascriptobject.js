// 1.

function _keys(obj) {
    if (!isObject(obj)) return [];
    if (Object.keys) return Object.keys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
}
function isObject(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
}
console.log(_keys({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }));


// 2.

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
console.log(student);
delete student.rollno;
console.log(student);

// 3.

//Write a JavaScript program to get the length of an JavaScript object.

Object.objsize = function (Myobj) {
    var osize = 0, key;
    for (key in Myobj) {
        if (Myobj.hasOwnProperty(key)) osize++;
    }
    return osize;
};

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

var objsize = Object.objsize(student);
console.log('Size of the current object : ' + objsize);

// 4.

var library = [
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];

for (var i = 0; i < library.length; i++) {
    var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) {
        console.log("Already read " + book);
    } else {
        console.log("You still need to read " + book);
    }
}

// 5.

function Cylinder(cyl_height, cyl_diameter) {
    this.cyl_height = cyl_height;
    this.cyl_diameter = cyl_diameter;
}

Cylinder.prototype.Volume = function () {
    var radius = this.cyl_diameter / 2;
    return this.cyl_height * Math.PI * radius * radius;
};

var cyl = new Cylinder(7, 4);
// Volume of the cylinder with four decimal places.
console.log('volume = ' + cyl.Volume().toFixed(4));

// 6.

function bubble_Sort(a) {
    var swapp;
    var n = a.length - 1;
    var x = a;
    do {
        swapp = false;
        for (var i = 0; i < n; i++) {
            if (x[i] < x[i + 1]) {
                var temp = x[i];
                x[i] = x[i + 1];
                x[i + 1] = temp;
                swapp = true;
            }
        }
        n--;
    } while (swapp);
    return x;
}

console.log(bubble_Sort([6, 4, 0, 3, -2, 1]));

// 7.

String.prototype.sub_String = function () {
    var subset = [];
    for (var m = 0; m < this.length; m++) {
        for (var n = m + 1; n < this.length + 1; n++) {
            subset.push(this.slice(m, n));
        }
    }
    return subset;
};

console.log("dog".sub_String());

// 8.


function my_Clock() {
    this.cur_date = new Date();
    this.hours = this.cur_date.getHours();
    this.minutes = this.cur_date.getMinutes();
    this.seconds = this.cur_date.getSeconds();
}
my_Clock.prototype.run = function () {
    setInterval(this.update.bind(this), 1000);
};
my_Clock.prototype.update = function () {
    this.updateTime(1);
    console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
};
my_Clock.prototype.updateTime = function (secs) {
    this.seconds += secs;
    if (this.seconds >= 60) {
        this.minutes++;
        this.seconds = 0;
    }
    if (this.minutes >= 60) {
        this.hours++;
        this.minutes = 0;
    }
    if (this.hours >= 24) {
        this.hours = 0;
    }
};
var clock = new my_Clock();
clock.run();


//   9.

function circle(radius) {
    this.radius = radius;
    // area method
    this.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    // perimeter method
    this.perimeter = function () {
        return 2 * Math.PI * this.radius;
    };
}
var c = new circle(3);
console.log('Area =', c.area().toFixed(2));
console.log('perimeter =', c.perimeter().toFixed(2));

// 10.

var library = [
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        libraryID: 1254
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }];

var sort_by = function (field_name, reverse, initial) {

    var key = initial ?
        function (x) {
            return initial(x[field_name]);
        } :
        function (x) {
            return x[field_name];
        };

    reverse = !reverse ? 1 : -1;

    return function (x, y) {
        return x = key(x), y = key(y), reverse * ((x > y) - (y > x));
    };
};


var newobj = library.sort(sort_by('libraryID', true, parseInt));

console.log(newobj);

// 11.

function FindAllMethods(obj) {
    return Object.getOwnPropertyNames(obj).filter(function (property) {
        return typeof obj[property] == "function";
    });
}
//above code finds methods only
//Following code finds both properties and methods 
console.log(FindAllMethods(Math));
console.log(FindAllMethods(Array));
function all_properties(obj) {
    return Object.getOwnPropertyNames(obj);
}

console.log(all_properties(Math));

console.log(all_properties(Array));

// 12.
function parse_URL(url) {
    var a = document.createElement('a');
    a.href = url;
    return {
        source: url,
        protocol: a.protocol.replace(':', ''),
        host: a.hostname,
        port: a.port,
        query: a.search,
        params: (function () {
            var ret = {},
                seg = a.search.replace(/^\?/, '').split('&'),
                len = seg.length,
                i = 0,
                s;
            for (; i < len; i++) {
                if (!seg[i]) {
                    continue;
                }
                s = seg[i].split('=');
                ret[s[0]] = s[1];
            }
            return ret;
        })(),
        file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
        hash: a.hash.replace('#', ''),
        path: a.pathname.replace(/^([^\/])/, '/$1'),
        relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
        segments: a.pathname.replace(/^\//, '').split('/')
    };
}

console.log(parse_URL('https://github.com/pubnub/python/search?utf8=%E2%9C%93&q=python'));

// <--------------------JAVASCRIPT VALIDATION -------------------->

// 1.

function is_boolean(value) {
    return value === true || value === false || toString.call(value) === '[object Boolean]';
}

console.log(is_boolean(true));

console.log(is_boolean('bar'));

// 2.

function is_Error(input) {
    return input instanceof Error || toString.call(input) === '[object Error]';
}

console.log(is_Error(new Error('foo')));
console.log(is_Error(100));
console.log(is_Error('foo'));

// 3.
function is_nan(val) {
    return val !== val;
}

console.log(is_nan(NaN));

console.log(is_nan('bar'));


// 4.

function is_null(val) {
    return val === null;
} a

console.log(is_null(null));

console.log(is_null('bar'));


// 5.

function is_number(value) {
    return !isNaN(value) && toString.call(value) === '[object Number]';
}

console.log(is_number(NaN));

console.log(is_number(42.32));

console.log(is_number(72));

// 6.

function is_object(value) {
    var datatype = typeof value;
    return datatype === 'function' || datatype === 'object' && !!value;
}

console.log(is_object({ name: 'Robert' }));

console.log(is_object('bar'));

console.log(is_object(72));

// 7.


function is_json(value) {
    return toString.call(value) === '[object Object]';
}

console.log(is_json({ name: 'Robert' }));

console.log(is_json('bar'));

console.log(is_json(72));

// 8.

function is_regexp(value) {
    return toString.call(value) === '[object RegExp]';
}

console.log(is_regexp(/test/));

console.log(is_regexp('bar'));

console.log(is_regexp(72));

// 9.

function is_char(value) {
    if (Object.prototype.toString.call(value) !== '[object String]')
        return false;
    return value && value.length === 1;
}

console.log(is_char('f'));
console.log(is_char('*'));

// 10.

function is_sameType(value1, value2) {
    if (is_nan(value1) || is_nan(value2)) {
        return is_nan(value1) === is_nan(value2);
    }
    return toString.call(value1) === toString.call(value2);
}

function is_nan(val) {
    return val !== val;
}

console.log(is_sameType('12', 100));
console.log(is_sameType('12', '100'));
console.log(is_sameType(12, 100));

// <------------------other question------------>

// 1.

let addition = (a, b) => a + b;

let num1 = 25;
let num2 = 25;
let sum = addition(num1, num2);
console.log("Sum of given numbers is :", sum);
window.alert("Sum of given numbers is :", sum)

// 2.

function alphabet_order(str) {
    return str.split('').sort().join('');
}
console.log(alphabet_order("webmaster"));

// 3.

function unique_char(str1) {
    var str = str1;
    var uniql = "";
    for (var x = 0; x < str.length; x++) {

        if (uniql.indexOf(str.charAt(x)) == -1) {
            uniql += str[x];

        }
    }
    return uniql;
}
console.log(unique_char("thequickbrownfoxjumpsoverthelazydog"));

// 4. Pending

// 5.   

function changetheimage() {
    document.getElementById('changeimg').src = "demo.jpg";
}

6.

let result = document.getElementById("GFG");

function myFuncchabgecolor(color) {
    document.body.style.background = color;
}
function myFunc() {
    changeColor('yellow');
    result.innerHTML = "Background Color changed";
}

// 7.






























































