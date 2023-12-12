// SHOPPING CART ACTIONS: Product quantity button;
const elProductQuantityIncreaseButtons = document.querySelectorAll('.increase-button');
const elProductQuantityDecreaseButtons = document.querySelectorAll('.decrease-button');

elProductQuantityIncreaseButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    const productQuantityElement = button.parentElement.querySelector('.product-info__quantity');
    productQuantityElement.textContent = parseInt(productQuantityElement.textContent, 10) + 1;
  });
});

elProductQuantityDecreaseButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    const productQuantityElement = button.parentElement.querySelector('.product-info__quantity');
    const quantity = parseInt(productQuantityElement.textContent, 10);

    if (quantity > 0) {
      productQuantityElement.textContent = quantity - 1;
    }
  });
});
