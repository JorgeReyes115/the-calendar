// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  //date display in the header.
var now = dayjs().format("dddd, DD/MM/YYYY h:mm:ss");
var displayDate = document.getElementById("currentDay");
displayDate.innerHTML = now;

//added save btn and set text ti local storage.
$(".saveBtn").click(function(event) {
  event.preventDefault();
  var saveText = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(saveText, time);
})

//loop hour time

$(".time-block").each(function () {
  var time = parseInt($(this).attr("id").split("hour-")[1]);

if(now === time) {
  $(this).addClass(present);
  $(this).removeClass(future);
  $(this).removeClass(past);
}
else if(now > time) {
  $(this).addClass(past);
  $(this).removeClass(future);
  $(this).removeClass(present);
}
else if(now < time) {
  $(this).addClass(future);
  $(this).removeClass(past);
  $(this).removeClass(present);
}

});

$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

 
});
