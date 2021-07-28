/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {

 document.getElementById('tbody') = '';

}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let table_body = document.getElementById('cart');

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

  let items = cart.items;
  for(let i = 0; i < items.length; i++){
    console.log(items[i]);

    let tr1 = document.createElement('tr');
    table_body.appendChild(tr1);

    let tdl = document.createElement('td');
    tr1.appendChild(tdl);
    tdl.textContent  = 'X';
    
    tdl = document.createElement('td');
    tr1.appendChild(tdl);
    tdl.textContent = `${items[i].product} , ${items[i].quantity}`;

  }
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item


  // TODO: Save the cart back to local storage

  localStorage.setItem('cart', JSON.stringify(cart.items));

  // TODO: Re-draw the cart table

  renderCart();

}

// This will initialize the page and draw the cart on screen
renderCart();
