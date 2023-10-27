const bill = document.getElementById("bill");
const tip = document.getElementById("tip");
const totalAmount = document.getElementById("total");
const tipAmountEl = document.getElementById("tipAmount");

const tipCalculate = document.getElementById("calculate");

tipCalculate.addEventListener("click", () => {
  console.log("click");
  const billValue = bill.value;
  const tipValue = tip.value;

  const tipAmount = billValue * (tipValue / 100);
  const total = Number(billValue) + tipAmount;
  tipAmountEl.innerHTML = `${tipAmount.toFixed(2)} &#8377`; //tofixed is used to round off the value to 2 decimal places
  totalAmount.innerHTML = `${total.toFixed(2)} &#8377`;
});
