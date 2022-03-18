// $(".test .Show1").click(function () {
//   console.log("Hello");
//   $("#target").show(200);
//   $(".Show1").hide(0);
//   $(".Hide1").show(0);
// });
// $(".Hide1").click(function () {
//   $("#target").hide(500);
//   $(".Show1").show(0);
//   $(".Hide1").hide(0);
// });
// // console.log("hello");
// // document.getElementById("target").onclick = function () {
// //   document.getElementById("target").style.display = "none";
// // };

// // window.onload = function () {
// //   // your code
// //   document.getElementById("target").onclick = function () {
// //     document.getElementById("target").style.display = "none";
// //   };
// // };

$(document).on("click", ".Show1 ", function () {
  console.log("Hello");
  $(".target").show(0);
  console.log("Hello2");
  $(".Show1").hide(0);
  $(".Hide1").show(0);
});
$(document).on("click", ".Hide1 ", function () {
  $(".target").hide(0);
  $(".Show1").show(0);
  $(".Hide1").hide(0);
});
