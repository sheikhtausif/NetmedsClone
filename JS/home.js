const sliderArr = ['https://www.netmeds.com/images/cms/aw_rbslider/slides/1623246675_Web_homevdas.jpg', 'https://www.netmeds.com/images/cms/aw_rbslider/slides/1619783794_Web_homertte.jpg', 'https://www.netmeds.com/images/cms/aw_rbslider/slides/1619784158_Home_bannerma25.jpg', 'https://www.netmeds.com/images/cms/aw_rbslider/slides/1622469732_free_webhomed.jpg', 'https://www.netmeds.com/images/cms/aw_rbslider/slides/1623419271_Home_Page_New.jpg']

let imgSlider = document.getElementById('mainSlider');

let imgSlide = document.createElement('img');
imgSlider.append(imgSlide);

imgSlide.src = sliderArr[0];

let i = 0;
setInterval(function () {
    if (i == sliderArr.length) {
        i = 0;
    }
    imgSlide.src = sliderArr[i++];
}, 2500)

itemsInCart = document.getElementById('itemsInCart');

getCount = JSON.parse(localStorage.getItem('count'));
console.log(getCount)
itemsInCart.textContent = getCount;
