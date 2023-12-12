// SHOPPING CART ACTIONS: Product quantity button;
const elProductQuantityIncreaseButtons = document.querySelectorAll('.increase-button');
const elProductQuantityDecreaseButtons = document.querySelectorAll('.decrease-button');
const elCostElements = document.querySelectorAll('.products__card span#cost');
const elProductQuantityElements = document.querySelectorAll('.product-info__quantity');
const elCostTotalElements = document.querySelectorAll('#cost-total');
const elCancelButton = document.getElementById('cancel');

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
