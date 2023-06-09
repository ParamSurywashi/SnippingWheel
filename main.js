let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let number = Math.ceil(Math.random() * 1000);

btn.onclick = function () {
    container.style.transform = "rotate(" + number + "deg)";
    number += Math.ceil(Math.random() * 1000);
    
    setTimeout(function() {
      const resText = container.style.transform;
      let valueRes = parseInt(resText.split("(")[1].split("deg")[0]);
      
    //  console.log(" ===== >  "+valueRes);

      (valueRes > 380) ? (valueRes = valueRes % 360) : (valueRes);

     // console.log(" **********>  "+valueRes);
      let result;
    if (valueRes >= 0 && valueRes < 45) {
      result = 8;
    } else if (valueRes >= 45 && valueRes < 90) {
      result = 7;
    } else if (valueRes >= 90 && valueRes < 135) {
      result = 6;
    } else if (valueRes >= 135 && valueRes < 180) {
      result = 5;
    } else if (valueRes >= 180 && valueRes < 225) {
      result = 4;
    } else if (valueRes >= 225 && valueRes < 270) {
      result = 3;
    } else if (valueRes >= 270 && valueRes < 315) {
      result = 2;
    } else if (valueRes >= 315 && valueRes < 380) {
        result = 1;
      }
      showPopupBox(result);
    }, 5000);
}

function showPopupBox(value) {
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.textContent = "Result: " + value;
    
   
    document.body.appendChild(popup);
    const closeButton = document.createElement("button");
    closeButton.classList.add("close");
    closeButton.textContent = "Close";

    closeButton.addEventListener("click", function() {
      popup.remove();
    });
    
    popup.appendChild(closeButton);
    
    document.body.appendChild(popup);
  }