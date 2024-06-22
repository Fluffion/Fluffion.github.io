function startTime() {
    offset = 1;
    var today = new Date();
    var h = today.getUTCHours();
    var m = today.getUTCMinutes();
    var s = today.getUTCSeconds();
    h = h + offset;
    if (h > 24) {
      h = h - 24;
    }
    if (h < 0) {
      h = h + 24;
    }
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(function() {
      startTime()
    }, 500);
  }
  
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i
    };
    return i;
  }
  
  startTime()

  var textArray = [
  ":3",
  "yello",
  "haii",
  "yo waddup",
  "listen to Lemon Demon",
  "fortnite",
  "eating Burger King",
  "paws",
  "definitely a cat",
  "definitely a fox",
  "meow",
  "hungry",
  "undefined",
  "defined!",
  "creature of secrets",
  "anybody got $12.76",
  "kinda want McDonald's",
  "could really go for some McDonald's",
  "fat free",
  "no eta",
  "play Rain World!",
  "woah",
  "whoa",
  
  ];
  var randomNumber = Math.floor(Math.random() * textArray.length);
  document.getElementById("randomNumber").innerHTML = textArray[randomNumber];