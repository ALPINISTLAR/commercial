// SHOPPING CART ACTIONS: Product quantity button;
const elProductQuantityIncreaseButtons = document.querySelectorAll('.increase-button');
const elProductQuantityDecreaseButtons = document.querySelectorAll('.decrease-button');
const elCostElements = document.querySelectorAll('.products__card span#cost');
const elProductQuantityElements = document.querySelectorAll('.product-info__quantity');
const elCostTotalElements = document.querySelectorAll('#cost-total');
const elCancelButton = document.getElementById('cancel');
const elSelectButtons = document.querySelectorAll('.select');

// Initialize total cost to 0
elCostTotalElements.forEach(function (element) {
  element.textContent = '0';
});

elProductQuantityIncreaseButtons.forEach(function (button, index) {
  button.addEventListener('click', function () {
    const productQuantityElement = button.parentElement.querySelector('.product-info__quantity');
    const quantity = parseInt(productQuantityElement.textContent, 10) + 1;
    productQuantityElement.textContent = quantity;

    // Get the cost of the product
    const cost = parseInt(elCostElements[index].textContent, 10);

    // Update the total cost
    updateTotalCost(cost);
  });
});

elProductQuantityDecreaseButtons.forEach(function (button, index) {
  button.addEventListener('click', function () {
    const productQuantityElement = button.parentElement.querySelector('.product-info__quantity');
    const quantity = parseInt(productQuantityElement.textContent, 10);

    if (quantity > 0) {
      productQuantityElement.textContent = quantity - 1;

      // Get the cost of the product
      const cost = parseInt(elCostElements[index].textContent, 10);

      // Update the total cost
      updateTotalCost(-cost);
    }
  });
});

elCancelButton.addEventListener('click', function () {
  // Reset the total cost to 0 for all elements
  elCostTotalElements.forEach(function (element) {
    element.textContent = '0';
  });

  // Reset the quantity of each product to 0
  elProductQuantityElements.forEach(function (quantityElement) {
    quantityElement.textContent = '0';
  });
});

function updateTotalCost(amount) {
  elCostTotalElements.forEach(function (element) {
    const currentTotal = parseInt(element.textContent, 10) || 0; // Ensure it's a number
    element.textContent = (currentTotal + amount) + ' so\'m';
  });
}



elSelectButtons.forEach(function (elSelectButton) {
  elSelectButton.addEventListener('click', function () {
    // Remove 'credit-card--selected' class from all 'credit-card' elements
    document.querySelectorAll('.credit-card').forEach(function (creditCardElement) {
      creditCardElement.classList.remove('credit-card--selected');
    });

    // Add 'credit-card--selected' class to the parent element of the clicked button
    elSelectButton.parentElement.classList.add('credit-card--selected');

    // Reset textContent for all buttons to "kartani tanlash"
    elSelectButtons.forEach(function (button) {
      button.textContent = 'kartani tanlash';
    });

    // Set textContent to "tanlandi!" only for the clicked button
    elSelectButton.textContent = 'tanlandi!';

    // Update the 'general-balance' element with the value of the closest 'balance' element
    const closestBalance = elSelectButton.closest('.credit-card').querySelector('.balance');
    const generalBalance = document.getElementById('general-balance');
    let balanceClosest = closestBalance.textContent + ` so'm`;
    generalBalance.textContent = balanceClosest;

    document.getElementById('general-balance-paying').textContent = balanceClosest;
  });
});

const closeButtons = document.querySelectorAll('.close--btn');

closeButtons.forEach(function (closeButton) {
  closeButton.addEventListener('click', function () {
    closeButton.parentElement.style.display = 'none';
  });
});



function ret() {
  document.getElementById('paid').textContent = document.getElementById('cost-total').textContent;
}
