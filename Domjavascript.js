// 1. 
// function javascriptstyle() {
//     //font styles added by JS:
//     text.style.fontSize = "14pt";
//     text.style.fontFamily = "Comic Sans MS";
//     text.style.color = "green";
// }


// 2.

// function getFormvalue() {
//     var x = document.getElementById("form1");
//     for (var i = 0; i < x.length; i++) {
//         if (x.elements[i].value != 'Submit') {
//             console.log(x.elements[i].value);
//         }
//     }
// }

// 3.
// function chancgecolorofpara() {
//     document.getElementById('changecolor').style.backgroundColor = 'red';
// }

// 4.

// function getAttributes() {
//     var u = document.getElementById("w3r").href;
//     alert('The value of the href attribute of the link is : ' + u);
//     var v = document.getElementById("w3r").hreflang;
//     alert('The value of the hreflang attribute of the link is : ' + v);
//     var w = document.getElementById("w3r").rel;
//     alert('The value of the rel attribute of the link is : ' + w);
//     var x = document.getElementById("w3r").target;
//     alert('The value of the taget attribute of the link is : ' + x);
//     var y = document.getElementById("w3r").type;
//     alert('The value of the type attribute of the link is : ' + y);
// }

// 5.

// function insert_Row() {
//     var x = document.getElementById('sampleTable').insertRow(0);
//     var y = x.insertCell(0);
//     var z = x.insertCell(1);
//     y.innerHTML = "New Cell1";
//     z.innerHTML = "New Cell2";
// }

// 6.

// function changeContent()
// {
// rn = window.prompt("Input the Row number(0,1,2)", "0");
// cn = window.prompt("Input the Column number(0,1)","0");
// content = window.prompt("Input the Cell content");  
// var x=document.getElementById('myTable').rows[parseInt(rn,10)].cells;
// x[parseInt(cn,10)].innerHTML=content;
// }

// 7.

// function createTable()
// {
// rn = window.prompt("Input number of rows", 1);
// cn = window.prompt("Input number of columns",1);

//  for(var r=0;r<parseInt(rn,10);r++)
//   {
//    var x=document.getElementById('myTable').insertRow(r);
//    for(var c=0;c<parseInt(cn,10);c++)  
//     {
//      var y=  x.insertCell(c);
//      y.innerHTML="Row-"+r+" Column-"+c; 
//     }
//    }
// }

// 9.

// function getOptions() {
//     var x = document.getElementById("mySelect");
//     var txt1 = "No. of items : ";
//     var i;
//     l = document.getElementById("mySelect").length;
//     txt1 = txt1 + l;
//     for (i = 0; i < x.length; i++) {
//         txt1 = txt1 + "\n" + x.options[i].text;
//     }
//     alert(txt1);
// }

// // 10.

// function volume_sphere()
//  {
//   var volume;
//   var radius = document.getElementById('radius').value;
//   radius = Math.abs(radius);
//   volume = (4/3) * Math.PI * Math.pow(radius, 3);
//   volume = volume.toFixed(4);
//   document.getElementById('volume').value = volume;
//   return false;
//  } 
// window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

// 11.

// function display_random_image() {
//     var theImages = [{
//         src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
//         width: "240",
//         height: "160"
//     }, {
//         src: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
//         width: "320",
//         height: "195"
//     }, {
//         src: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
//         width: "500",
//         height: "343"
//     }];

//     var preBuffer = [];
//     for (var i = 0, j = theImages.length; i < j; i++) {
//         preBuffer[i] = new Image();
//         preBuffer[i].src = theImages[i].src;
//         preBuffer[i].width = theImages[i].width;
//         preBuffer[i].height = theImages[i].height;
//     }

//     // create random image number
//     function getRandomInt(min, max) {
//         //  return Math.floor(Math.random() * (max - min + 1)) + min;

//         imn = Math.floor(Math.random() * (max - min + 1)) + min;
//         return preBuffer[imn];
//     }

//     // 0 is first image,   preBuffer.length - 1) is  last image

//     var newImage = getRandomInt(0, preBuffer.length - 1);

//     // remove the previous images
//     var images = document.getElementsByTagName('img');
//     var l = images.length;
//     for (var p = 0; p < l; p++) {
//         images[0].parentNode.removeChild(images[0]);
//     }
//     // display the image  
//     document.body.appendChild(newImage);
// }

// 12.

//First create a list of all bold items 
// var bold_Items;
// window.onload = getBold_items();

// // Collect all <strong> tags
// function getBold_items() {
//     bold_Items = document.getElementsByTagName('strong');
// }
// // iterate all bold tags and change color  
// function highlight() {
//     for (var i = 0; i < bold_Items.length; i++) {
//         bold_Items[i].style.color = "green";
//     }
// }

// // On mouse out highlighted words become black
// function return_normal() {
//     for (var i = 0; i < bold_Items.length; i++) {
//         bold_Items[i].style.color = "black";
//     }
// }


// 13.

//First create a list of all bold items 
// var bold_Items;
// window.onload = getBold_items();

// // Collect all <strong> tags
// function getBold_items() 
// {
//   bold_Items = document.getElementsByTagName('strong'); 
// }
// // iterate all bold tags and change color  
// function highlight() 
// {
//    for (var i=0; i<bold_Items.length; i++)
//    {                                                    
//     bold_Items[i].style.color = "green";
//     }
// }

// // On mouse out highlighted words become black
// function return_normal()
// {
//   for (var i=0; i<bold_Items.length; i++) 
//   {
//        bold_Items[i].style.color = "black";
//   }
// }

// <-------------------------javascript drawing------------------>

// 1.

// function draw() {
//     var canvas = document.getElementById('canvas');
//     if (canvas.getContext) {
//         var context = canvas.getContext('2d');

//         context.fillRect(20, 20, 100, 100);
//         context.clearRect(40, 40, 60, 60);
//         context.strokeRect(45, 45, 50, 50);
//     }
// }

// 2.

// function draw() {
//     var canvas = document.getElementById('circle');
//     if (canvas.getContext) {
//         var ctx = canvas.getContext('2d');
//         var X = canvas.width / 2;
//         var Y = canvas.height / 2;
//         var R = 45;
//         ctx.beginPath();
//         ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
//         ctx.lineWidth = 3;
//         ctx.strokeStyle = '#FF0000';
//         ctx.stroke();
//     }
// }

// 3.

// function draw() {
//     var canvas = document.getElementById("canvas");
//     if (canvas.getContext) {
//         var context = canvas.getContext("2d");

//         context.fillStyle = "rgb(256,0,0)";
//         context.fillRect(15, 10, 55, 50);

//         context.fillStyle = "rgba(0, 0, 200, 0.6)";
//         context.fillRect(35, 30, 55, 50);
//     }
// }

// 4.

// function draw() {
//     var canvas = document.getElementById('canvas');
//     if (canvas.getContext) {
//         var context = canvas.getContext('2d');

//         context.beginPath();
//         context.moveTo(75, 75);
//         context.lineTo(10, 75);
//         context.lineTo(10, 25);
//         context.fill();
//     }
// }


// 5.

// function draw() {
//     var canvas = document.getElementById('canvas');
//     if (canvas.getContext) {
//         var context = canvas.getContext('2d');
//         context.beginPath();
//         // Outer circle
//         context.arc(75, 75, 50, 0, Math.PI * 2, true);
//         context.moveTo(110, 75);
//         // Mouth 
//         context.arc(75, 75, 35, 0, Math.PI, false);
//         // Lefy and Right eye
//         context.moveTo(55, 65);
//         context.arc(60, 65, 5, 0, Math.PI * 2, true);
//         context.arc(90, 65, 5, 0, Math.PI * 2, true);
//         context.stroke();
//     }
// }


// 6.

// function draw() {
//     var ctx = document.getElementById("myCanvas").getContext("2d");
//     var counter = 0;
//     for (var i = 0; i < 6; i++) {
//         for (var j = 0; j < 6; j++) {
//             //Start from white and goes to black
//             ctx.fillStyle = "rgb(" + Math.floor(255 - 42.5 * i) + "," + Math.floor(255 - 42.5 * i) +
//                 "," + Math.floor(255 - 42.5 * j) + ")";
//             ctx.beginPath();
//             if (i === counter && j === counter) {
//                 //creates the circles
//                 ctx.arc(25 + j * 50, 30 + i * 50, 20, 0, Math.PI * 2, true);
//                 ctx.fill();
//                 //creates a border around the circles so white one will be vissible
//                 ctx.stroke();
//             }
//         }
//         counter++;
//     }
// }
// draw();






















