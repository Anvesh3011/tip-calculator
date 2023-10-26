const bill = document.getElementById("bill");
const tip = document.getElementById("tip");
const totalAmount = document.getElementById("total");

const tipCalculate = document.getElementById("calculate");

tipCalculate.addEventListener("click", () => {
  console.log("click");
  const billValue = bill.value;
  const tipValue = tip.value;

  const tipAmount = billValue * (tipValue / 100);
  const total = Number(billValue) + tipAmount;
  totalAmount.innerHTML = `${total} &#8377`;
});
