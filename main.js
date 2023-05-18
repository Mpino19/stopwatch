$(function() {
  msec = 0;
  sec = 0;
  min = 0;
  hour = 0;
  
  $("#start").click(function() {
    timer = setInterval("countUp()", 100);
    $(this).prop("disabled", true);
    $("#stop, #reset").prop("disabled", false);
  });
  
  $("#stop").click(function() {
    clearInterval(timer);
    $(this).prop("disabled", true);
    $("#start, #reset").prop("disabled", false);
  });
  
  $("#reset").click(function() {
    msec = 0;
    sec = 0;
    min = 0;
    hour = 0;
    clearInterval(timer);
    $("#time").html("0:0:0:0");
    $("#start").prop("disabled", false);
    $("#stop, #reset").prop("disabled", true);
  });
});

function countUp () {
  msec += 1;
    if(msec > 9) {
      msec = 0;
      sec += 1;
    }
    if(sec > 59) {
      sec = 0;
      min += 1;
    }
    if(min > 59) {
      min = 0;
      hour += 1;
    }

  $("#time").html(hour + ":" + min + ":" + sec + ":" + msec);
}