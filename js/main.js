// SHOPPING CART ACTIONS: Product quantity button;
const elProductQuantityIncreaseButtons = document.querySelectorAll('.increase-button');
const elProductQuantityDecreaseButtons = document.querySelectorAll('.decrease-button');
const elCostElements = document.querySelectorAll('.products__card span#cost');
const elProductQuantityElements = document.querySelectorAll('.product-info__quantity');
const elCostTotalElements = document.querySelectorAll('#cost-total');
const elCancelButton = document.getElementById('cancel');
const elSelectButtons = document.querySelectorAll('.select');

elCostTotalElements.forEach(function (element) {
  element.textContent = '0';
});

elProductQuantityIncreaseButtons.forEach(function (button, index) {
  button.addEventListener('click', function () {
    const productQuantityElement = button.parentElement.querySelector('.product-info__quantity');
    const quantity = parseInt(productQuantityElement.textContent, 10) + 1;
    productQuantityElement.textContent = quantity;

    const cost = parseInt(elCostElements[index].textContent, 10);

    updateTotalCost(cost);
  });
});

elProductQuantityDecreaseButtons.forEach(function (button, index) {
  button.addEventListener('click', function () {
    const productQuantityElement = button.parentElement.querySelector('.product-info__quantity');
    const quantity = parseInt(productQuantityElement.textContent, 10);

    if (quantity > 0) {
      productQuantityElement.textContent = quantity - 1;


      const cost = parseInt(elCostElements[index].textContent, 10);


      updateTotalCost(-cost);
    }
  });
});

elCancelButton.addEventListener('click', function () {

  elCostTotalElements.forEach(function (element) {
    element.textContent = '0';
  });


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

    document.querySelectorAll('.credit-card').forEach(function (creditCardElement) {
      creditCardElement.classList.remove('credit-card--selected');
    });


    elSelectButton.parentElement.classList.add('credit-card--selected');


    elSelectButtons.forEach(function (button) {
      button.textContent = 'kartani tanlash';
    });


    elSelectButton.textContent = 'tanlandi!';


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

function simulatePayment() {

  const buyButton = document.querySelector('.btn--buy');
  const loadingElement = document.querySelector('.loading');
  const payingElement = document.querySelector('.paying');
  const lowBalanceElement = document.querySelector('.low-balance');
  const freeElement = document.querySelector('.free');


  buyButton.addEventListener('click', function () {

    const costTotal = parseInt(document.getElementById('cost-total').textContent, 10);
    if (costTotal <= 0) {

      freeElement.style.display = 'flex';
      return;
    }


    const generalBalanceElement = document.getElementById('general-balance');
    const generalBalancePayingElement = document.getElementById('general-balance-paying');


    const generalBalance = parseInt(generalBalanceElement.textContent, 10);

    if (costTotal > generalBalance) {

      lowBalanceElement.style.display = 'flex';
    } else {

      const newGeneralBalance = generalBalance - costTotal;


      generalBalanceElement.textContent = newGeneralBalance + ' so\'m';


      generalBalancePayingElement.textContent = newGeneralBalance + ' so\'m';


      loadingElement.style.display = 'flex';


      setTimeout(function () {
        loadingElement.style.display = 'none';


        payingElement.style.display = 'flex';


        document.getElementById('paid').textContent = document.getElementById('cost-total').textContent;
      }, 3000);
    }
  });
}
