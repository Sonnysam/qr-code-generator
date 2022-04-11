<<<<<<< HEAD
// $(document).ready(function () {
//   $("#btnSubmit").click(function () {
//     if (!$("#url").val()) {
//       alert("Please enter a URL!");
//     } else {
//       $("#imgQr").attr(
//         "src",
//         "https://chart.googleapis.com/chart?cht=qr&chs=400&chl=" +
//           $("#url").val()
//       );
//     }
//   });
// });
=======
// Variables:
const counter = document.getElementById('counter');
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const reset = document.getElementById('reset');

// Variable to track count
var count = 0;
counter.innerHTML = count;

// Increment count
increment.addEventListener('click', () => {
    count++;
    counter.innerHTML = count;
});
// Decrement count
decrement.addEventListener('click', () => {
    count--;
    counter.innerHTML = count;
});
// Reset count
reset.addEventListener('click', () => {
    count = 0;
    counter.innerHTML = count;
});







 



>>>>>>> a2f44966eae348c00937c127d20196cf68dab885
