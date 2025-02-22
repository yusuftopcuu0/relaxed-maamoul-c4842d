// const procButton = document.getElementById("procButton");

// procButton.addEventListener("click", function () {});

// const input1 = document.getElementById("item1");
// const input2 = document.getElementById("item2");
// console.log(input2);

// const btn = document.getElementById("btnHesap");
// btn.onclick = function () {
//   const s1 = Number(document.getElementById("item1").value);
//   const s2 = Number(document.getElementById("item2").value);
//   var result;
//   if (document.getElementById("addition").checked) {
//     result = Addition(s1, s2);
//   } else if (document.getElementById("subtraction ").checked) {
//     result = Subtraction(s1, s2);
//   } else if (document.getElementById("multiply ").checked) {
//     result = Multiply(s1, s2);
//   } else if (document.getElementById("divide").checked) {
//     result = Divide(s1, s2);
//   } else {
//     result = "Make a Choice...";
//   }
//   document.getElementById("kutuToplam").innerHTML = "Result : " + result;
// };

function Addition(a, b) {
  return a + b;
}
function Subtraction(a, b) {
  return a - b;
}
function Multiply(a, b) {
  return a * b;
}
function Divide(a, b) {
  return b !== 0 ? (a / b).toFixed(2) : "Cannot divide by zero!";
}

const btn = document.querySelector("#procButton");

btn.addEventListener("click", function (event) {
  event.preventDefault();
  const s1 = document.getElementById("item1").value;
  const numberizedS1 = Number(s1);
  console.log(numberizedS1);
  const s2 = document.getElementById("item2").value;
  const numberizedS2 = Number(s2);
  console.log(numberizedS2);

  let result;

  if (document.getElementById("addition").checked) {
    result = Addition(numberizedS1, numberizedS2);
  } else if (document.getElementById("subtraction").checked) {
    result = Subtraction(numberizedS1, numberizedS2);
  } else if (document.getElementById("multiply").checked) {
    result = Multiply(numberizedS1, numberizedS2);
  } else if (document.getElementById("divide").checked) {
    result = Divide(numberizedS1, numberizedS2);
  } else {
    result = "Make a Choice...";
  }

  let i = (document.getElementById("boxTotal").innerHTML =
    "Result : " + result);
});
