const sliderEl = document.querySelector(".slider2")
const forwardEl = document.querySelector(".forward")
const backwardEl = document.querySelector(".backward")
const earbudsEl = document.querySelector("#earbuds")
const laptopsEl = document.querySelector("#laptops")
const phonesEl = document.querySelector("#phones")
const headphonesEl = document.querySelector("#headphones")
const rightEl1 = document.querySelector(".right1")
const leftEl1 = document.querySelector(".left1")
const rightEl2 = document.querySelector(".right2")
const leftEl2 = document.querySelector(".left2")
const rightEl3= document.querySelector(".right3")
const leftEl3 = document.querySelector(".left3")
const rightEl4 = document.querySelector(".right4")
const leftEl4 = document.querySelector(".left4")
let sliderImg = [
    "Images/slider2.jpg"
]

let earbudsImg = [
    "images/ear8.jpg",
    "Images/ear2.jpg",
    "Images/ear3.jpg",
    "Images/ear4.jpg",
    "Images/ear5.jpg",
    "Images/ear6.jpg",
    "Images/ear7.jpg",
    "Images/ear-1.jpg"
]
let laptopsImg = [
    "Images/lap-1.jpg",
    "Images/lap.jpg",
    "Images/lap2.jpg",
    "Images/lap3.jpg",
    "Images/lap4.jpg",
    "Images/lap5.jpg",
    "Images/lap6.jpg",
    "Images/lap7.jpg"
]
let phonesImg = [
    "Images/phone8.jpg",
    "Images/phone2.jpg",
    "Images/phone3.jpg",
    "Images/phone4.jpg",
    "Images/phone5.jpg",
    "Images/phone6.jpg",
    "Images/phone7.jpg",
    "Images/phone8.jpg"
]
let headphonesImg = [
    "Images/head9.jpg",
    "Images/head1.jpg",
    "Images/head2.jpg",
    "Images/head3.jpg",
    "Images/head4.jpg",
    "Images/head5.jpg",
    "Images/head6.jpg",
    "Images/head7.jpg"
]
let earbudsInfo = [
  "AirPods 3rd Gen $80 ",
  "AirPods 2nd Gen $72 ",
  "AirPods Pro 2nd Gen $99 ",
  "AirPods Pro 1st Gen $75 ",
  "Anker Liberty 2 Pro $30 ",
  "Anker soundcore Liberty 2 Pro $40 ",
  "Anker soundcore R100 $34 ",
  "Anker sprit Dot $28 "
]
let laptopsInfo = [
  "Dell core I5 $240 ",
  "Dell inspiron $342 ",
  "Dell core I5 $362 ",
  "Dell core I7 $650 ",
  "MacBook M2 $850 ",
  "MacMook M1 $600 ",
  "Lenovo MediaPad 3 $450 ",
  "Lenovo MediaPad 2 $380 "
]
let phonesInfo = [
  "Samsung S21 $240 ",
  "Samsumg S22 $430 ",
  "Samsumg A24 $200 ",
  "Iphone VI $80 ",
  "Iphone VIII $124 ",
  "Iphone XI $320 ",
  "Iphone XII $530 ",
  "OPPO F32 $290 "
]
let headphonesInfo = [
  "Redmi Pro M1 $90 ",
  "Redmi Pro M2 $120 ",
  "JBL Ultra $180 ",
  "UnderArmor $110 ",
  "Redmi M4 $150 ",
  "JBL Pro $160 ",
  "EnCore R100 $99 ",
  "EnCore R200 $109 "
]
sliderEl.style.backgroundImage = `url(${sliderImg[0]})`; 
sliderEl.style.backgroundSize = `100%`; 
sliderEl.style.backgroundRepeat = `no-repeat`; 

  let numberProduct1 = 0
  let numberProduct2 = 1
  let numberProduct3 = 2
  let numberProduct4 = 3
  renderSlide(earbudsImg,earbudsEl,earbudsInfo)
  renderSlide(laptopsImg,laptopsEl,laptopsInfo)
  renderSlide(phonesImg,phonesEl,phonesInfo)
  renderSlide(headphonesImg,headphonesEl,headphonesInfo)
function renderSlide(productImg,productEl,productInfo) {
        numberProduct1 = 0
        numberProduct2 = 1
        numberProduct3 = 2
        numberProduct4 = 3
        productEl.innerHTML = `<figure class="product">
              <img class="product1" src="${productImg[numberProduct1]}" width>
              <figcaption class="info">${productInfo[numberProduct1]}<i><button class="add"> + CART </button></i></figcaption>
          </figure>`
        productEl.innerHTML +=`<figure class="product">
              <img class="product1" src="${productImg[numberProduct2]}" width>
              <figcaption class="info">${productInfo[numberProduct2]}<i><button class="add"> + CART </button></i></figcaption>
           </figure>`
           productEl.innerHTML += `<figure class="product">
           <img class="product1" src="${productImg[numberProduct3]}" width>
           <figcaption class="info">${productInfo[numberProduct3]}<i><button class="add"> + CART </button></i></figcaption>
        </figure>`
        productEl.innerHTML += `<figure class="product">
              <img class="product1" src="${productImg[numberProduct4]}" width>
              <figcaption class="info">${productInfo[numberProduct4]}<i><button class="add"> + CART </button></i></figcaption>
           </figure>`
}
  function renderRight(productImg,productEl,productInfo) {
    if ( numberProduct1, numberProduct2, numberProduct3, numberProduct4 < 7) {
        numberProduct1 += 1
        numberProduct2 += 1
        numberProduct3 += 1
        numberProduct4 += 1
        productEl.innerHTML = `<figure class="product">
              <img class="product1" src="${productImg[numberProduct1]}" width>
              <figcaption class="info">${productInfo[numberProduct1]}<i><button class="add"> + CART </button></i></figcaption>
          </figure>`
        productEl.innerHTML +=`<figure class="product">
              <img class="product1" src="${productImg[numberProduct2]}" width>
              <figcaption class="info">${productInfo[numberProduct2]}<i><button class="add"> + CART </button></i></figcaption>
           </figure>`
           productEl.innerHTML += `<figure class="product">
           <img class="product1" src="${productImg[numberProduct3]}" width>
           <figcaption class="info">${productInfo[numberProduct3]}<i><button class="add"> + CART </button></i></figcaption>
        </figure>`
        productEl.innerHTML += `<figure class="product">
              <img class="product1" src="${productImg[numberProduct4]}" width>
              <figcaption class="info">${productInfo[numberProduct4]}<i><button class="add"> + CART </button></i></figcaption>
           </figure>`
    }
    else {
        numberProduct1 = 0
        numberProduct2 = 1
        numberProduct3 = 2
        numberProduct4 = 3
        productEl.innerHTML = `<figure class="product">
              <img class="product1" src="${productImg[numberProduct1]}" width>
              <figcaption class="info">${productInfo[numberProduct1]}<i><button class="add"> + CART </button></i></figcaption>
          </figure>`
        productEl.innerHTML +=`<figure class="product">
              <img class="product1" src="${productImg[numberProduct2]}" width>
              <figcaption class="info">${productInfo[numberProduct2]}<i><button class="add"> + CART </button></i></figcaption>
           </figure>`
           productEl.innerHTML += `<figure class="product">
           <img class="product1" src="${productImg[numberProduct3]}" width>
           <figcaption class="info">${productInfo[numberProduct3]}<i><button class="add"> + CART </button></i></figcaption>
        </figure>`
        productEl.innerHTML += `<figure class="product">
              <img class="product1" src="${productImg[numberProduct4]}" width>
              <figcaption class="info">${productInfo[numberProduct4]}<i><button class="add"> + CART </button></i></figcaption>
           </figure>`
    }
  }

  function renderLeft(productImg,productEl,productInfo) {
    if ( numberProduct1, numberProduct2, numberProduct3, numberProduct4 > 3 ) {
        numberProduct1 += -1
        numberProduct2 += -1
        numberProduct3 += -1
        numberProduct4 += -1
        productEl.innerHTML = `<figure class="product">
              <img class="product1" src="${productImg[numberProduct1]}" width>
              <figcaption class="info">${productInfo[numberProduct1]}<i><button class="add"> + CART </button></i></figcaption>
          </figure>`
        productEl.innerHTML +=`<figure class="product">
              <img class="product1" src="${productImg[numberProduct2]}" width>
              <figcaption class="info">${productInfo[numberProduct2]}<i><button class="add"> + CART </button></i></figcaption>
           </figure>`
           productEl.innerHTML += `<figure class="product">
           <img class="product1" src="${productImg[numberProduct3]}" width>
           <figcaption class="info">${productInfo[numberProduct3]}<i><button class="add"> + CART </button></i></figcaption>
        </figure>`
        productEl.innerHTML += `<figure class="product">
              <img class="product1" src="${productImg[numberProduct4]}" width>
              <figcaption class="info">${productInfo[numberProduct4]}<i><button class="add"> + CART </button></i></figcaption>
           </figure>`
    }
    else  {
        numberProduct1 = 4
        numberProduct2 = 5
        numberProduct3 = 6
        numberProduct4 = 7
        productEl.innerHTML = `<figure class="product">
              <img class="product1" src="${productImg[numberProduct1]}" width>
              <figcaption class="info">${productInfo[numberProduct1]}<i><button class="add"> + CART </button></i></figcaption>
          </figure>`
        productEl.innerHTML +=`<figure class="product">
              <img class="product1" src="${productImg[numberProduct2]}" width>
              <figcaption class="info">${productInfo[numberProduct2]}<i><button class="add"> + CART </button></i></figcaption>
           </figure>`
           productEl.innerHTML += `<figure class="product">
           <img class="product1" src="${productImg[numberProduct3]}" width>
           <figcaption class="info">${productInfo[numberProduct3]}<i><button class="add"> + CART </button></i></figcaption>
        </figure>`
        productEl.innerHTML += `<figure class="product">
              <img class="product1" src="${productImg[numberProduct4]}" width>
              <figcaption class="info">${productInfo[numberProduct4]}<i><button class="add"> + CART </button></i></figcaption>
           </figure>`
    }
  }

  rightEl1.addEventListener("click", function(){
    renderRight(earbudsImg,earbudsEl,earbudsInfo)
  })

  leftEl1.addEventListener("click", function(){
    renderLeft(earbudsImg,earbudsEl,earbudsInfo)
  })

  rightEl2.addEventListener("click", function(){
    renderRight(laptopsImg,laptopsEl,laptopsInfo)
  })

  leftEl2.addEventListener("click", function(){
    renderLeft(laptopsImg,laptopsEl,laptopsInfo)
  })

  rightEl3.addEventListener("click", function(){
    renderRight(phonesImg,phonesEl,phonesInfo)
  })

  leftEl3.addEventListener("click", function(){
    renderLeft(phonesImg,phonesEl,phonesInfo)
  })

  rightEl4.addEventListener("click", function(){
    renderRight(headphonesImg,headphonesEl,headphonesInfo)
  })

  leftEl4.addEventListener("click", function(){
    renderLeft(headphonesImg,headphonesEl,headphonesInfo)
  })

  const menuEl = document.querySelector(".menu-el")
  const popUpMenu = document.querySelector(".pop-up-menu")
  let stat = "Dactive"
  menuEl.addEventListener("click",function() {
    if ( stat === "Dactive") {
      stat = "active"
      popUpMenu.classList.add("active")
      console.log("hi")
    }
    else if (stat === "active") {
      stat = "Dactive"
      popUpMenu.classList.remove("active")
      console.log("yp")
    }
  
  })
popUpMenu.addEventListener("scroll", function() {
  popUpMenu.classList.remove("active")
  console,log("woah")
})
