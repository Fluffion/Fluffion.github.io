window.onload = function() {
  var titles = ['the big red thing’s site', '<-- slugcat fella', 'T.W.O.A.T.', 'psst, play Rain World', 'the site'];
  var random = Math.floor(Math.random() * titles.length);
  var titleElement = document.getElementById('title')
  titleElement.innerHTML = titles[random];
}
  
  var textArray = [
  ":3",
  "yello",
  "haii",
  "yo waddup",
  "listen to Lemon Demon",
  "listen to Tally Hall",
  "listen to glass beach",
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
  "'an unimaginable gift.'",
  "'an unimaginable curse.'",
  "porls...",
  "gadzooks!",
  "you should click that big title there ^",
  "meow",
  "bark",
  "say it ain't so!",
  "'this moment, right here! it is where we are meant to be.'",
  "'swim with the tide or against it.'",
  "creature of secrets",
  "anybody got $12.76",
  "kinda want McDonald's",
  "'how strange it is to be anything at all'",
  "could really go for some McDonald's",
  "these fishes gay. good for them, good for them.",
  "fat free",
  "contains trans fats",
  "'the irony is not lost on me, mouse!'",
  "no eta",
  "play Rain World!",
  "woah",
  "whoa",
  "like sleep like death",
  
  ];
  var randomNumber = Math.floor(Math.random() * textArray.length);
  document.getElementById("randomNumber").innerHTML = textArray[randomNumber];