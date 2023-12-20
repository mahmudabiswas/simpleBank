document.getElementById("withdrawBtn").addEventListener("click", function () {
  const withdrawInput = document.getElementById("withdrawInput");
  const withdrawInputAmount = withdrawInput.value;
  const withdrawInputAmountString = parseFloat(withdrawInputAmount);

  // sept-2 get the withdraw amount

  const withdrawAmount = document.getElementById("withdrawAmount");
  const withdrawAmountField = withdrawAmount.innerText;
  const withdrawAmountFieldString = parseFloat(withdrawAmountField);

  // sept-3 set the withdraw amount with withdraw field

  const newWithdrawAmount =
    withdrawAmountFieldString + withdrawInputAmountString;
  withdrawAmount.innerText = newWithdrawAmount;

  // clear the input field
  withdrawInput.value = "";
  // sept-4 get the blanc field
  const blanceElement = document.getElementById("blanceElement");
  const blanceAmountTotal = blanceElement.innerText;
  const blanceAmountSiting = parseFloat(blanceAmountTotal);

  // sept-5 set the withdraw and total blanc element
  const newBlanceElement = blanceAmountSiting - withdrawInputAmountString;
  blanceElement.innerText = newBlanceElement;
});
