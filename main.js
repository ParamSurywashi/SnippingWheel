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

      console.log(" **********>  "+valueRes);
      let result;
    if (valueRes >= 0 && valueRes < 50) {
      result = 8;
    } else if (valueRes >= 50 && valueRes < 95) {
      result = 7;
    } else if (valueRes >= 95 && valueRes < 140) {
      result = 6;
    } else if (valueRes >= 140 && valueRes < 185) {
      result = 5;
    } else if (valueRes >= 185 && valueRes < 230) {
      result = 4;
    } else if (valueRes >= 230 && valueRes < 275) {
      result = 3;
    } else if (valueRes >= 275 && valueRes < 320) {
      result = 2;
    } else if (valueRes >= 320 && valueRes < 380) {
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