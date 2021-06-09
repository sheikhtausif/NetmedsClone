const arr = [
  `https://www.netmeds.com/images/cms/aw_rbslider/slides/1606753561_Category_web.jpg`,
  `https://www.netmeds.com/images/cms/aw_rbslider/slides/1621014292_Category_web.jpg`,
  `https://www.netmeds.com/images/cms/aw_rbslider/slides/1620226380_Category_web.jpg`,
  `https://www.netmeds.com/images/cms/aw_rbslider/slides/1594275598_Category_web_1000X200.jpg`,
];
let imageSlider = document.getElementById("imageSlider");
let img = document.createElement("img");
img.src = arr[0];
imageSlider.append(img);

let i = 0;

setInterval(function () {
  if (i == arr.length) {
    i = 0;
  }
  img.src = arr[i];
  i++;
}, 3000);

const object = [
  {
    disc: `5% OFF`,
    image: `https://www.netmeds.com/images/product-v1/150x150/910016/tri_activ_instant_hand_sanitizer_500_ml_0_1.jpg`,
    name: "Tri-Activ Instant Hand Sanitizer 500 ml",
    mfr: `Piramal Healthcare Ltd`,
    price1: `Rs. 250.0`,
    price2: 247.5,
  },

  {
    disc: `70% OFF`,
    image: `https://www.netmeds.com/images/product-v1/150x150/912708/floh_instant_hand_sanitizer_with_70_ethyl_alcohol_spearmint_essential_oil_5_litre_0_0.jpg`,
    name: `FLOH Instant Hand Sanitizer with 70% Ethyl Alcohol - Spearmint`,
    mfr: `Sharp Mint Limited`,
    price1: `Rs. 2499.0`,
    price2: 749.7,
  },

  {
    disc: `50% OFF`,
    image: `https://www.netmeds.com/images/product-v1/150x150/909365/cura_home_sanitizer_500_ml_0_0.jpg`,
    name: `Medisales PPE Kit`,
    mfr: `Medisales`,
    price1: `Rs. 1499.0`,
    price2: 974.35,
  },

  {
    disc: `20% OFF`,
    image: `https://www.netmeds.com/images/product-v1/150x150/915684/lama_giloy_ghanbati_tablet_60s_0_0.jpg`,
    name: `Lama Giloy ghanbati Tablet 60's`,
    mfr: `Lama Pharmaceuticals`,
    price1: `Rs. 100.0`,
    price2: 80.0,
  },

  {
    disc: `0% OFF`,
    image: `https://www.netmeds.com/images/product-v1/150x150/907575/cura_hand_sanitizer_200_ml_0_0.jpg`,
    name: `Cura Hand Sanitizer 200 ml`,
    mfr: `Cura Pharmaceuticals`,
    price1: ``,
    price2: 100,
  },

  {
    disc: `0% OFF`,
    image: `https://www.netmeds.com/images/product-v1/150x150/313682/dabur_chyawanprash_1_kg_0.jpg`,
    name: `Dabur Chyawanprash Awaleha 1kg`,
    mfr: `Dabur India Ltd`,
    price1: ``,
    price2: 349.0,
  },

  {
    disc: `40% OFF`,
    image: `https://www.netmeds.com/images/product-v1/150x150/907849/sannap_hand_sanitizer_lemon_fragrance_500_ml_0_0.jpg`,
    name: `SanNap Hand Sanitizer - Lemon Fragrance 500 ml`,
    mfr: `San Nap Healthcare`,
    price1: `Rs. 250.0`,
    price2: 150.0,
  },

  {
    disc: `20% OFF`,
    image: `https://www.netmeds.com/images/product-v1/150x150/910015/floh_anti_bacterial_face_mask_kn95_20s_0_0.jpg`,
    name: `Floh Anti Bacterial Face Mask - K N95 (Pack of 20)`,
    mfr: ` Huizhou Green Communication`,
    price1: `Rs. 5000.0`,
    price2: 4000.0,
  },
];

if (localStorage.getItem("products") == null) {
  localStorage.setItem("products", JSON.stringify(object));
}
let data = JSON.parse(localStorage.getItem("products"));
// let productDiv = document.getElementById("products");
let second = document.getElementById("second");

// console.log(data);

/**=======================
 * !      print product data on browser
 *========================**/

function printProduct(elem) {
  let res = "";
  for (item in elem) {
    let el = elem[item];
    res += `
        <div id="productCardCss">
        <div class="discount"><span class="disc">${el.disc}</span></div>
    <div class="posterDivCss">
        <img src=${el.image}>
    </div>
    <div class="textDivCss">
        <p class="p1Css">${el.name}</p>
        <p class="p1Css"><i>Mfr: ${el.mfr}</i></p>
        <p class="p1Css"> <del>${el.price1}</del> <strong>Rs. ${el.price2}</strong></p>
        <button>ADD TO CART</button>
    </div>
</div>
        `;
  }

  second.innerHTML = res;
}
printProduct(data);
