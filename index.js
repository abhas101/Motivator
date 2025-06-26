console.log("Happy developing ✨");

var quotes = [
  "Code is like humor. When you have to explain it, it’s bad.",
  "First, solve the problem. Then, write the code.",
  "Don't fear bugs — debug like a pro!",
  "Every great developer you know once wrote bad code. Keep going!",
  "In JavaScript, even undefined has a purpose. So do you.",
  "Console.log your progress — even small wins count!",
  "A journey of a thousand lines begins with a single `function()`.",
  "Break the problem, not your spirit.",
  "When code breaks, your mindset shouldn’t.",
  "You’re not stuck — you’re just learning something new."
];

// 
let currentIndex = 0;

var quote = document.getElementById("quote")
var button = documentj.getElementById("btn")

function showNextQuote() {
  currentIndex = (currentIndex + 1) % quotes.length;
  quote.textContent = quotes[currentIndex];
}

quote.textContent = quotes[currentIndex];
button.addEventListener("click", showNextQuote);


