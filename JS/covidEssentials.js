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
