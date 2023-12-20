/**
 * 1. add evenListner deposit button
 * 2.get deposit amount from the deposit input field
 * 3. convert string deposit amount to a amount to a number type
 * 4. clear the input field
 * 5. get the previous deposit total
 */

// step 11
document.getElementById("depositBtn").addEventListener("click", function () {
  //   step 2
  const depositeInput = document.getElementById("depositInput");
  const depositField = depositeInput.value;
  const depositeAmount = parseFloat(depositField);

  // clear input field
  // step 3
  depositeInput.value = "";
  // step 4
  const depositElement = document.getElementById("depositElement");
  const depositeAmountTotal = depositElement.innerText;
  const depositeAmountSiting = parseFloat(depositeAmountTotal);
  // step -5
  const totalBalaceAmount = depositeAmountSiting + depositeAmount;
  depositElement.innerText = totalBalaceAmount;

  // step -6 = current blanc total
  const blancElement = document.getElementById("blanceElement");
  const blanceAmountTotal = blancElement.innerText;
  const blanceAmountTotalString = parseFloat(blanceAmountTotal);

  // step -7 add total blanc element

  const newCurrentBlanceElement = blanceAmountTotalString + depositeAmount;
  blancElement.innerText = newCurrentBlanceElement;
});
