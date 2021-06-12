let addCartBtn = document.getElementsByClassName("addCart");

// console.log(addCartBtn[0].parentElement);

for (var i = 0; i < addCartBtn.length; i++) {
  var anchor = addCartBtn[i];
  anchor.onclick = function () {
    let arr = JSON.parse(localStorage.getItem("products")) || [];

    const object = {
      image: this.parentElement.children[0].src,
      discount: this.parentElement.children[1].innerHTML,
      name: this.parentElement.children[2].innerHTML,
      Mfr: this.parentElement.children[3].innerHTML,
      originalPrice: this.parentElement.children[4].children[0].innerHTML,
      discountPrice: this.parentElement.children[4].children[1].innerHTML,
    };

    arr.push(object);
    localStorage.setItem("products", JSON.stringify(arr));
  };
}
