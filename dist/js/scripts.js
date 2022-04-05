// document.addEventListener("DOMContentLoaded", () => {});
document.addEventListener("DOMContentLoaded", function () {
  const numbers = document.querySelectorAll(".num");
  const funs = document.querySelectorAll(".fun");
  const res = document.querySelector(".res");
  const clean = document.querySelector(".top-fun");
  const dispLay = document.querySelectorAll(".top-num");
  const operator = document.querySelector(".top-operator");
  const plusMinus = document.querySelector(".fun-inv");

  let numberOne = 0,
    numberTwo = 0,
    flag = false;

  numbers.forEach((num) => {
    // numberOne
    if (flag == false) {
      console.log('if false');
      num.addEventListener("click", () => {
        dispLay[0].innerHTML += num.innerHTML;
      });
      numberOne = dispLay[0].innerHTML;
    }
    // numberTwo
    if (flag == true) {
      console.log('if true');
      num.addEventListener("click", () => {
        dispLay[1].innerHTML += num.innerHTML;
      });
      numberOne = dispLay[1].innerHTML;
    }
  });

  funs.forEach((fun) => {
    fun.addEventListener("click", () => {
      operator.innerHTML = fun.innerHTML;
      flag = true;
      console.log(`flag: ${flag}`);
    });
  });

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
