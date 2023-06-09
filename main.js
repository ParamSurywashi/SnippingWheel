let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let number = Math.ceil(Math.random() * 1000);

btn.onclick = function () {
    container.style.transform = "rotate(" + number + "deg)";
    // let result = Math.ceil(number % 360 / 45);
    // let mappedResult = (result === 0) ? 8 : result;
  
    // console.log("Snipping Wheel Result: " + mappedResult);
  
    number += Math.ceil(Math.random() * 1000);
    console.log(number);
}