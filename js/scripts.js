function roboReturn(number) {
  const numberArray = number.split("");
  const beep = ["1"];
  let outputArray = [];
  numberArray.forEach(function(other) {
    if (beep.includes(other[0])) {
      outputArray.push("Beep!");
    }
  })
    return outputArray.join("");       
}