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


  // 100vh для Chrome на телефонах
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  // let vh = window.innerHeight * 0.01;
  // // Then we set the value in the --vh custom property to the root of the document
  // document.documentElement.style.setProperty("--vh", `${vh}px`);

  // // We listen to the resize event
  // window.addEventListener("resize", () => {
  //   // We execute the same script as before
  //   let vh = window.innerHeight * 0.01;
  //   document.documentElement.style.setProperty("--vh", `${vh}px`);
  // });
});
