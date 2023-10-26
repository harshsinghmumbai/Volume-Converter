let Liter = document.getElementById("Liter");
let Milliliter = document.getElementById("Milliliter");
// console.log(Liter,Milliliter);

Liter.addEventListener("input", function () {
  // console.log("You have input something");
  let L = this.value;
  let M = L * 1000;
  //   console.log(M);
  Milliliter.value = M;
});

Milliliter.addEventListener("input", function () {
  // console.log("you have input something");
  let M = this.value;
  let L = M / 1000;
  //   console.log(L);
  Liter.value = L;
}); 
