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
  "definitely a slugcat",
  "wawa",
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