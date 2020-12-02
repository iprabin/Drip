let data = `[
    {
       "coffee":[
          {
             "name":"Drip Coffee",
             "image":"Photos/blah.png",
            "alt":"coffee cup 3 sizes",
             "size":{
                "s":"1.50",
                "m":"2.00",
                "l":"2.50"
             }
          },
          {
             "name":"Latte",
             "des":"Espresso and steamed milk.",
             "image":"Photos/lg-test.png",
             "alt":"coffee cup large size",
             "size":{
                "s":"3.50",
                "m":"4.00",
                "l":"4.50"
             },
             "options":[
                "Regular",
                "Decaf"
             ]
          },
          {
             "name":"Sweet Latte",
             "des":"Latte with many flavors.",
             "alt":"coffee cup medium size",
             "image":"Photos/med-logo.png",
             "size":{
                "s":"3.50",
                "m":"4.00",
                "l":"4.50"
             },
             "flavors":[
                "Vanilla",
                "Caramel",
                "Mocha",
                "Lavender",
                "Cardamom",
                "Spicy Mocha"
             ],
             "options":[
                "Regular",
                "Decaf"
             ]
          },
          {
             "name":"Cappuccino",
             "des":"Espresso and Steamed Milk. 6oz Beverage.",
             "alt":"coffee cup small size",
             "image":"Photos/sm-logo.png",
             "size":{
                "s":"3.25"
             },
             "options":[
                "Regular",
                "Decaf"
             ]
          },
          {
             "name":"Cortado",
             "des":"Espresso and Steamed Milk. 5oz Beverage.",
             "alt":"coffee cup small size",
             "image":"Photos/sm-logo.png",
             "size":{
                "s":"3.00"
             },
             "options":[
                "Regular",
                "Decaf"
             ]
          },
          {
             "name":"Chai",
             "des":"Black Tea, Spices and Steamed Milk.",
             "alt":"coffee cup 3 sizes",
             "image":"Photos/blah.png",
             "size":{
                "s":"3.50",
                "m":"4.00",
                "l":"4.50"
             }
          },
          {
             "name":"Hot Tea",
             "des":"Black and green teas.",
             "alt":"coffee cup 3 sizes",
             "image":"Photos/blah.png",
             "size":{
                "s":"3.00",
                "m":"3.50",
                "l":"4.00"
             },
             "flavors":[
                "Chamomile",
                "Lemon",
                "Green"
             ]
          },
          {
             "name":"Americano",
             "des":"Espresso and Hot Water.",
             "alt":"coffee cup large size",
             "image":"Photos/lg-test.png",
             "size":{
                "s":"2.50",
                "m":"3.00",
                "l":"3.50"
             },
             "options":[
                "Regular",
                "Decaf"
             ]
          },
          {
             "name":"Iced Coffee",
             "image":"Photos/iced.jpg",
             "alt":"iced coffee in plastic cup with straw",
             "size":{
                "s":"1.50",
                "m":"2.00",
                "l":"2.50"
             }
          },
          {
             "name":"Iced Latte",
             "des":"Espresso and milk over ice.",
             "alt":"iced latte in plastic cup with straw",
             "image":"Photos/lat.png",
             "size":{
                "s":"3.50",
                "m":"4.00",
                "l":"4.50"
             },
             "options":[
                "Regular",
                "Decaf"
             ]
          },
          {
             "name":"Iced Sweet Latte",
             "image":"Photos/lat.png",
             "alt":"iced latte in plastic cup with straw",
             "des":"Latte with many flavors over ice.",
             "size":{
                "s":"3.50",
                "m":"4.00",
                "l":"4.50"
             },
             "flavors":[
                "Vanilla",
                "Caramel",
                "Mocha",
                "Lavender",
                "Cardamom",
                "Spicy Mocha"
             ],
             "options":[
                "Regular",
                "Decaf"
             ]
          },
          {
            "name":"Iced Tea",
            "alt":"iced tea in plastic cup with straw",
            "image":"Photos/iced-t.png",
            "size":{
               "s":"3.50",
               "m":"4.00",
               "l":"4.50"
            }
         }
       ]
    },
    {
       "pastries":[
          {
             "name":"Cinnamon Roll",
             "image":"Photos/cin.png",
             "alt":"cinnamon roll with icing",
             "des":"Freshly baked, gooey cinnamon rolls topped with caramel icing.",
             "size":{
               "s":"3.50"
            }
          },
          {
             "name":"Donuts",
             "alt":"Strawberry filled donut",
             "image":"Photos/do.png",
             "des":"Freshly made donuts.",
             "size":{
               "s":"3.50"
            },
             "flavors":[
                "Blueberry",
                "Peanut Butter Chocolate",
                "Strawberry",
                "Leamon Raspberry"
             ]
          },
          {
             "name":"Chocolate Chip Cookie",
             "alt":"chocolate chip cookie",
             "image":"Photos/cook.png",
             "des":"Freshly baked and gooey.",
             "size":{
               "s":"1.75"
            }
          },
          {
             "name":"Muffin",
             "image":"Photos/muff.png",
             "alt":"muffin",
             "des":"Freshly baked muffin.",
             "size":{
               "s":"3.30"
            },
             "flavors":[
                "Pumpkin Walnut",
                "Blueberry"
             ]
          },
          {
             "name":"Croissants",
             "image":"Photos/cross.png",
             "alt":"buttery croissante",
             "des":"Freshly baked French Croissants.",
             "size":{
               "s":"2.50"
            }
          },
          {
             "name":"Kringle",
             "alt":"Kringle sliced",
             "image":"Photos/k.png",
             "des":"Freshly Baked in a buttery crust.",
             "size":{
               "s":"4.50"
            },
             "flavors":[
                "Raspberry",
                "Almond",
                "Pecan",
                "Maple Walnut"
             ]
          }
       ]
    }
 ]`;

let json = JSON.parse(data);
let coffee = json[0].coffee;
let pastry = json[1].pastries;
var cart = [];
var prevRSelection = null;
var prevS = null;
var prevF = null;
var isMobile = false;

const minusCart = (obj, type) => {
   let value = Number(obj.value);

   if (type == 1) {
      cart[value].qty += 1;
      $(`#qty-crt[value='${value}']`).text(`${cart[value].qty}`);
      $(`#cart-prc[value='${value}']`).text(`$${(cart[value].qty * Number(cart[value].price)).toFixed(2)}`);

      let numitem = Number($('#count').text());
      newItm = numitem + 1;
      $('#count').text(`${newItm}`);

      let sub = (Number($('#sub-total').text()) + Number(cart[value].price));
      let tax = (sub * 0.07);
      let total = (sub + tax);
      $('#sub-total').text(`${sub.toFixed(2)}`);
      $('#tax').text(`${tax.toFixed(2)}`);
      $('#total').text(`${total.toFixed(2)}`);
   }
   else if (type == 2) {
      cart[value].qty -= 1;
      if (cart[value].qty == 0) {
         let numitem = Number($('#count').text());
         newItm = numitem - 1;
         $('#count').text(`${newItm}`);
         cart.splice(value, 1)[0];
         handleCartItem();
         return;
      }
      $(`#qty-crt[value='${value}']`).text(`${cart[value].qty}`);
      $(`#cart-prc[value='${value}']`).text(`$${(cart[value].qty * Number(cart[value].price)).toFixed(2)}`);

      let numitem = Number($('#count').text());
      newItm = numitem - 1;
      $('#count').text(`${newItm}`);

      let sub = (Number($('#sub-total').text()) - Number(cart[value].price));
      let tax = (sub * 0.07);
      let total = (sub + tax);
      $('#sub-total').text(`${sub.toFixed(2)}`);
      $('#tax').text(`${tax.toFixed(2)}`);
      $('#total').text(`${total.toFixed(2)}`);
   }
   else {
      let numitem = Number($('#count').text());
      let newItm = cart[value].qty;
      newItm = numitem - newItm;
      $('#count').text(`${newItm}`);
      cart.splice(value, 1)[0];
      handleCartItem();
   }
};

const mobileConfig = () => {
   $(".navbar").addClass('bg-light');
   $(".nav-link").removeClass('nav-tra');
   $(".card").css({ "margin-top": "90px" });
};

const webConfig = () => {
   $(".navbar").removeClass('bg-light');
   $(".nav-link").addClass('nav-tra');
   $(".card").css({ "margin-top": "0px" })
};

const clearData = () => {
   $("#item").on("hidden.bs.modal", function () {
      $('#price').text('');
      $('#model-img').attr('src', '');
      $('#name').text('');
      $('#qty').text('1');
      $('#sizes').empty();
      $('#flavors').empty();
      $('#options').empty();
      $('#succ').hide();
      $('#err').hide();
      prevS = null;
      prevRSelection = null;
      prevF = null;
   });
}

const handleCartItem = () => {
   var sub = 0;
   if (cart.length > 0) {
      $('#empty').hide();
      $('#check-info').show();
   }
   else {
      $('#empty').show();
      $('#check-info').hide();
   }
   $('#cartItems').empty();
   var numItm;
   cart.forEach(function (item, index) {
      sub += Number(item.price) * item.qty;
      $('#cartItems').append(
         `<div class="card mb-3" style="max-width: 540px;">
         <div class="row no-gutters" style="border-bottom: 1px solid #f5f5f5;">
         <div class="col-sm-4"><img src="${item.image}" alt="${item.alt}" title=${item.name} class="card-img"></div><div class="col-sm-8">
            <div class="card-body"><div class="row">
               <div class="col-8"><h5 class="card-title" style="padding:0px;margin:0px">${item.name}</h5></div>
               <div class="col-4"><b><p class="card-text" style="padding:0px;margin:0px" id="cart-prc" value="${index}">$${(item.price * item.qty).toFixed(2)}</p></b></div>
               ${item.size ? `<div class="col-12">Size: ${item.size}</div>` : ''}
               ${item.flavor ? `<div class="col-12">Flavor: ${item.flavor}</div>` : ''}
               <div class="d-flex mr-auto">   
                  <button type="button" class="btn btn-light btn-sm" value="${index}" id="minus-crt" onclick="minusCart(this,2);" >-</button>
                  <p class="pl-2 pr-2 pt-2" id="qty-crt" value="${index}"> ${item.qty}</p>
                  <button type="button" class="btn btn-light btn-sm" value="${index}" id="plus-crt" onclick="minusCart(this,1);">+</button>
               </div>
               <div class="col-12 text-center">
                  <button type="button" class="btn btn-danger btn-sm" value="${index}" id="rmv" onclick="minusCart(this,3);" >Remove</button>
               </div>
            </div>
            </div>
         </div></div></div>`
      );
   });
   let tax = sub * 0.07;
   let total = tax + sub;
   $('#sub-total').text(`${sub.toFixed(2)}`);
   $('#tax').text(`${tax.toFixed(2)}`);
   $('#total').text(`${total.toFixed(2)}`);

}

const handlePlus = () => {
   $('#plus').click(() => {
      let qty = Number($('#qty').text()) + 1;
      $('#qty').text(`${qty}`);
   });
};

const handleMinus = () => {
   $('#minus').click(() => {
      var qty = Number($('#qty').text());
      if (qty > 1)
         $('#qty').text(`${qty - 1}`);
   });
};

const handleCart = () => {
   $('#addtocart').click(() => {
      let id = Number($('#name').attr('name'));
      let value = $('#name').attr('value');
      var item;
      if (value == 'food')
         item = pastry[id];
      else {
         item = coffee[id];
      }
      if (item.size.l && prevS == null) {
         $('#err').show();
         return;
      }
      if (item.flavors && prevF == null) {
         $('#err').show();
         return;
      }
      if (item.options && prevRSelection == null) {
         $('#err').show();
         return;
      }
      let name = $('#name').text();
      let image = $('#model-img').attr('src');
      let qty = Number($('#qty').text());
      var type, flavor;
      if (prevRSelection != null)
         type = prevRSelection.value;
      if (prevF != null)
         flavor = prevF.value;
      var price;
      var size;

      if (prevS == null || prevS.value == 's') {
         price = item.size.s;
         size = "Small"
      }
      else if (prevS.value == 'm') {
         price = item.size.m;
         size = "Medium"
      }
      else {
         price = item.size.l;
         size = "Large"
      }

      let cartItem = { name, image, qty, type, flavor, price, size };
      cart.push(cartItem);
      let numitem = Number($('#count').text());
      var newItm = 0;
      if (numitem == 0) {
         newItm = cart[0].qty;
      }
      else {
         newItm = numitem + qty;
      }
      $('#count').text(`${newItm}`);
      $('#err').hide();
      $('#succ').show();
      setTimeout(function () { $('#item').modal('toggle'); }, 500);
   });
};

const handleSizeSelection = (selected) => {
   prevS = selected;
   let item = coffee[selected.id];
   var price;
   if (selected.value == 's') {
      price = item.size.s;
   }
   else if (selected.value == 'm') {
      price = item.size.m;
   }
   else {
      price = item.size.l;
   }
   $('#price').text(`$${price}`);
};

const handleFlavorSelection = (selected) => {
   prevF = selected;
};

const handleRadio = (button) => {
   if (prevRSelection)
      prevRSelection.checked = false;

   prevRSelection = button;
};

const handleData = (id, food) => {
   var item;
   if (food == 1) {
      item = coffee[id];
      $('#name').attr('value', 'coffee');
   }
   else {
      item = pastry[id];
      $('#name').attr('value', 'food');
   }
   $('#name').text(item.name);
   $('#name').attr('name', id);

   $('#model-img').attr('src', item.image);
   $('#model-img').attr('alt', item.alt);
   $('#model-img').attr('title', item.name);
   if (item.size.l) {
      $('#price').text(`$${item.size.s} - $${item.size.l}`);
      $('#sizes').append(
         `<div class="form-group">
            <label>Sizes</label>
            <select class="form-control" id="size-select">
               <option value="n" selected disabled>Select a Size</option>
               <option onclick="handleSizeSelection(this);" id ="${id}" value="s">Small</option>
               <option onclick="handleSizeSelection(this);" id ="${id}" value="m">Medium</option>
               <option onclick="handleSizeSelection(this);" id ="${id}" value="l">Large</option>
            </select>
         </div>`
      );
   }
   else {
      $('#price').text(`$${item.size.s}`);
   }
   if (item.flavors) {
      $('#flavors').append(
         `<div class="form-group">
            <label>Flavors</label>
            <select class="form-control" id="flavors-select">
               <option value="n" selected disabled>Select a Flavor</option>
            </select>
         </div>`
      );
      item.flavors.forEach(function (elem, index) {
         $('#flavors-select').append(
            `<option onclick="handleFlavorSelection(this);" value="${elem}">${elem}</option>`
         );
      })
   }
   if (item.options) {
      item.options.forEach(function (elem, index) {
         $('#options').append(
            `
               <div class="form-check pb-2">
                  <input class="form-check-input" type="radio" value="${elem}"  onclick="handleRadio(this);">
                  <label class="form-check-label">${elem}</label>
               </div>
            `
         );
      })
   }
};

const configureView = (id, item) => {
   item.forEach(function (element, index) {
      $(`${id}`).append(
         `<div class="col-lg-4 col-md-6 col-sm-12 pad" id = ${index} 
            ${id == '#grid' ? `onclick="handleData(this.id,1);">` : `onclick="handleData(this.id,2);">`}
                <button type="button" class="btn pad shadow" data-toggle="modal" data-target="#item">
                    <div class="card" style="width: 100%;min-height:478px;">
                    <img src=${element.image} alt="${element.alt}" title="${element.name}" class="card-img-top">
                        <div class="card-body">
                        ${element.des ? `<h3>${element.name}</h3><p class="card-text">${element.des}</p>` : `<h3>${element.name}</h3>`}
                        </div>
                    </div>
                </button>
          </div>`
      );
   });
};

$(window).resize(function () {
   let width = $(window).width();
   if (width <= 760) {
      mobileConfig();
      isMobile = true;
      $('#count').hide();
      $('#logo').addClass('logo');
      $('#logo').removeClass('logo-white')
   }
   else {
      webConfig();
      $('#count').show();
      $('#logo').addClass('logo-white');
      $('#logo').removeClass('logo')
      isMobile = false;
   }
});

const setupFunc = () => {
   $('#image-overlay').fadeIn(1000);
   $('#err').hide();
   $('#succ').hide();
   $('#check-info').hide();
   clearData();
   handlePlus();
   handleMinus();
   handleCart();

   let width = $(window).width();
   if (width <= 760) {
      $('#count').hide();
      mobileConfig();
      isMobile = true;
   }
   else {
      webConfig();
      isMobile = false;
      $('#count').show();
   }
}

const clearCart = () => {
   cart = [];
   $('#count').text('0');
}

const logoLogic = (scroll_pos) => {
   if (scroll_pos < $('#image-overlay').height() - 90 && !isMobile) {
      $(".navbar").removeClass('bg-light');
      $(".nav-link").addClass('nav-tra');
      $("#count").css({ "top": '28px' })
      $('#logo').addClass('logo-white');
      $('#logo').removeClass('logo')
   }
   else {
      $(".navbar").addClass('bg-light');
      $(".nav-link").removeClass('nav-tra');
      $("#count").css({ "top": '28px' });
      $('#logo').addClass('logo');
      $('#logo').removeClass('logo-white')
   }
}

$(document).ready(function () {
   if (isMobile) {
      $('#logo').addClass('logo');
      $('#logo').removeClass('logo-white')
   }
   var scroll_pos = 0;
   $(document).scroll(function () {
      scroll_pos = $(this).scrollTop();
      logoLogic(scroll_pos);
   });
});
function delay(ms) {
   return new Promise(resolve => setTimeout(resolve, ms)); //not my code
}

$("form").submit(function (e) {
   e.preventDefault();
   let backup = $('#contact').html()
   $('#contact').empty();
   $('#contact').append(
      `  <div class="container">
            <div class"shadow pt-5 pb-5" style="text-align:center;height:680px;">
               <h1 style="padding-top:${isMobile ? `60%` : `20%`};"> Thank You!</h1>
               <h6 class ="p-2"> We will get back to you as soon as possible.</h6> 
               <p style="color:green;">
                  <svg width="5em" height="5em" viewBox="0 0 16 16" class="bi bi-check-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                  </svg>
               </p>
            </div>
         </div>
      `
   );
   setTimeout(function () {
      $('#contact').empty();
      $('#contact').append(backup);
   }, 3000);
});
configureView('#grid', coffee);
configureView('#food', pastry);
setupFunc();