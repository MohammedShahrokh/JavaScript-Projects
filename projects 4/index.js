var hr = 0;
var min = 0;
var sec = 0;
var timer = false;
var count = 0;

stop = () => {
  timer = false;
};

start = () => {
  timer = true;
  stopwatch();
};

restart = () => {
  timer = false;
  hr=0;
  min=0;
  sec=0;
  count=0;
  document.getElementById("count").innerHTML ="00";
  document.getElementById("sec").innerHTML ="00";
  document.getElementById("min").innerHTML ="00";
  document.getElementById("hr").innerHTML ="00";
};

stopwatch = () => {
  if (timer == true) {
    count = count + 1;

    if (count == 99) {
      sec = sec + 1;
      count = 0;

      if (sec == 60) {
        min = min + 1;
        sec = 0;

        if (min == 60) {
          hr = hr + 1;
          min = 0;
        }
      }
    }

    var hrstring = hr;
    var minstring = min;
    var secstring = sec;
    var countstring = count;

    if (hr < 10) {
      hrstring = "0" + hr;
    }
    if (min < 10) {
      minstring = "0" + min;
    }
    if (sec < 10) {
      secstring = "0" + sec;
    }
    if (count < 10) {
      countstring = "0"+count;
    }

    document.getElementById("count").innerHTML = countstring;
    document.getElementById("sec").innerHTML = secstring;
    document.getElementById("min").innerHTML = minstring;
    document.getElementById("hr").innerHTML = hrstring;

    setTimeout("stopwatch()", 10);
  }
};