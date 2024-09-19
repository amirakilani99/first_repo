// script.js

document.addEventListener('DOMContentLoaded', () => {
  // Select all necessary elements
  const quantityControls = document.querySelectorAll('.fa-plus-circle, .fa-minus-circle');
  const deleteButtons = document.querySelectorAll('.fa-trash-alt');
  const likeButtons = document.querySelectorAll('.fa-heart');
  const totalPriceElement = document.querySelector('.total');
  
  // Function to update the total price
  function updateTotalPrice() {
    let totalPrice = 0;
    document.querySelectorAll('.card').forEach(card => {
      const unitPrice = parseFloat(card.querySelector('.unit-price').innerText.replace('$', ''));
      const quantity = parseInt(card.querySelector('.quantity').innerText);
      totalPrice += unitPrice * quantity;
    });
    totalPriceElement.innerText = `${totalPrice.toFixed(2)} $`;
  }

  // Function to handle quantity change
  function handleQuantityChange(event) {
    const icon = event.target;
    const card = icon.closest('.card');
    const quantityElement = card.querySelector('.quantity');
    let quantity = parseInt(quantityElement.innerText);
    
    if (icon.classList.contains('fa-plus-circle')) {
      quantity += 1;
    } else if (icon.classList.contains('fa-minus-circle') && quantity > 0) {
      quantity -= 1;
    }
    
    quantityElement.innerText = quantity;
    updateTotalPrice();
  }

  // Function to handle item deletion
  function handleItemDeletion(event) {
    const icon = event.target;
    const card = icon.closest('.card');
    card.remove();
    updateTotalPrice();
  }

  // Function to handle item liking
  function handleItemLike(event) {
    const icon = event.target;
    icon.classList.toggle('liked');
    if (icon.classList.contains('liked')) {
      icon.style.color = 'red'; // Change color when liked
    } else {
      icon.style.color = ''; // Reset color when unliked
    }
  }

  // Attach event listeners
  quantityControls.forEach(control => {
    control.addEventListener('click', handleQuantityChange);
  });
  
  deleteButtons.forEach(button => {
    button.addEventListener('click', handleItemDeletion);
  });

  likeButtons.forEach(button => {
    button.addEventListener('click', handleItemLike);
  });
});
