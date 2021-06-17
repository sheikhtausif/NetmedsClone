let itemsInCart = document.getElementById('itemsInCart');

let getCount = JSON.parse(localStorage.getItem('count'));
console.log(getCount)
itemsInCart.textContent = getCount;

let userLoginName = document.getElementById('userLoginName');
userLoginName.textContent = "Admin"

userLoginName.setAttribute('href', '#')