// document.addEventListener("DOMContentLoaded", () => {});
document.addEventListener("DOMContentLoaded", function () {
  const numbers = document.querySelectorAll(".num");
  const funs = document.querySelectorAll(".fun");
  const res = document.querySelector(".res");
  const clean = document.querySelectorAll(".top-fun");
  const dispLay = document.querySelector(".top-num");
  const dispLayRes = document.querySelector(".top-last-res");
  let f = false;

  numbers.forEach((num) => {
    num.addEventListener("click", () => {
      if (f === true) {
        f = false;
        dispLay.innerHTML = "";
      }
      dispLay.innerHTML += num.innerHTML;
    });
  });

  funs.forEach((fun) => {
    fun.addEventListener("click", () => {
      switch (fun.innerHTML) {
        case "x<sup>2</sup>":
          dispLayRes.innerHTML = dispLay.innerHTML * dispLay.innerHTML;
          dispLay.innerHTML = "";
          break;
        case "√x":
          dispLayRes.innerHTML = Math.sqrt(dispLay.innerHTML).toFixed(2);
          dispLay.innerHTML = "";
          break;
        case "÷":
          dispLay.innerHTML += "/";
          break;
        case "×":
          dispLay.innerHTML += "*";
          break;
        case "+":
          dispLay.innerHTML += "+";
          break;
        case "-":
          dispLay.innerHTML += "-";
          break;
        case "∙":
          dispLay.innerHTML += ".";
          break;
        case ")":
          dispLay.innerHTML += ")";
          break;
        case "(":
          dispLay.innerHTML += "(";
          break;
        default:
          break;
      }
    });
  });

  clean[0].addEventListener("click", () => {
    dispLay.innerHTML = dispLay.innerHTML.slice(0, -1);
  });
  clean[1].addEventListener("click", () => {
    dispLay.innerHTML = "";
  });

  res.addEventListener("click", () => {
    dispLayRes.innerHTML = eval(String(dispLay.innerHTML));
    f = true;
    console.log("true");
  });
});
