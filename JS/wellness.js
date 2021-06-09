let addToCartButton = document.getElementsByClassName("addToCart");

let arr = JSON.parse(localStorage.getItem("Products")) || [];

for (var i = 0; i < addToCartButton.length; i++) {
  var anchor = addToCartButton[i];
  anchor.onclick = function () {
    const object = {
      image: this.parentElement.children[0].src,
      discount: this.parentElement.children[1].innerHTML,
      name: this.parentElement.children[2].innerHTML,
      Mfr: this.parentElement.children[3].innerHTML,

      originalPrice: this.parentElement.children[4].children[0].innerHTML,
      discountPrice: this.parentElement.children[4].children[1].innerHTML,
    };

    // let arr = localStorage.getItem("Products");
    // if (arr == null) {
    //   arr = [];
    // } else {
    //   arr = JSON.parse(arr);
    // }
    arr.push(object);
    localStorage.setItem("products", JSON.stringify(arr));
  };
}
