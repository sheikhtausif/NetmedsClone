let itemsInCart = document.getElementById('itemsInCart');

let getCount = JSON.parse(localStorage.getItem('count'));
console.log(getCount)
itemsInCart.textContent = getCount;