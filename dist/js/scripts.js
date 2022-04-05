// document.addEventListener("DOMContentLoaded", () => {});
document.addEventListener("DOMContentLoaded", function () {
  const numbers = document.querySelectorAll(".num");
  const funs = document.querySelectorAll(".fun");
  const res = document.querySelector(".res");
  const clean = document.querySelector(".top-fun");
  const dispLay = document.querySelector(".top-num");
  const dispLayRes = document.querySelector(".top-last-res");
  const plusMinus = document.querySelector(".fun-inv");

  numbers.forEach((num) => {
    num.addEventListener("click", () => {
      dispLay.innerHTML += num.innerHTML;
    });
  });

  funs.forEach((fun) => {
    fun.addEventListener("click", () => {
      switch (fun.innerHTML) {
        case "x<sup>2</sup>":
          dispLayRes.innerHTML = dispLay.innerHTML * dispLay.innerHTML;
          break;
        case "%":
          break;
        case "√x":
          break;
        case "÷":
          dispLay.innerHTML += "/";
          break;
        case "×":
          dispLay.innerHTML += "*";
          break;
        default:
          break;
      }
    });
  });

  clean.addEventListener("click", () => {
    dispLay.innerHTML = "";
  });

  // %
  // √x
  // ÷
  // ×
  // -
  // +
  // ∙

  // menuLink.forEach((item) => {
  //   item.addEventListener("click", () => {
  //     menu.classList.remove("active");
  //   });
  // });

  // lang
  // const lang = document.querySelector(".footer__lang"),
  //   langSelect = document.querySelector(".footer__lang-select");

  // lang.addEventListener("click", () => {
  //   langSelect.style.display = "block";
  // });
  // langSelect.addEventListener("click", () => {
  //   langSelect.style.display = "none";
  // });

  // // scroll
  // const scrollUp = document.querySelector(".scroll-up");

  // function myFunction() {
  //   if (
  //     document.body.scrollTop > 870 ||
  //     document.documentElement.scrollTop > 870
  //   ) {
  //     scrollUp.style.display = "block";
  //   } else {
  //     scrollUp.style.display = "none";
  //   }
  // }
  // window.onscroll = function () {
  //   myFunction();
  // };

  // //

  // Array.prototype.square = function() {
  //   let arr = new Array();
  //   this.forEach(element => arr.push(element*element));
  //   return arr
  // }

  // Array.prototype.cube = function() {
  //   let arr = new Array();
  //   this.forEach(element => arr.push(element*element*element));
  //   return arr
  // }
});
