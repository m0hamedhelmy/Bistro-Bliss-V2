// الوقت
setInterval(()=> {
    const d = new Date();
let text = d.toLocaleTimeString();
document.getElementById("demo").innerHTML = text;
},100)
// الوقت
// top
var totop =document.querySelector(".totop")
window.onscroll=function(){
    if(window.scrollY>300){
        totop.style.display="flex"
      
    }else{  totop.style.display="none"}
}
totop.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})
// top
// // open
var menu_icon = document.querySelector(".fa-bars")
var menu_list = document.querySelector(".down_nav div ul")

// open

menu_icon.addEventListener("click",()=>{
   
  
menu_icon.classList.toggle("open")
  menu_list.classList.toggle("open")
  
})


// slider header
$(document).ready(function(){
    $('.slider_head').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3000,
        prevArrow:".prev_arrow",
        nextArrow:".next_arrow"
    });
  });
                  
// slider header
// slider header
$(document).ready(function(){
    $('.slid_card').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:1500,
        prevArrow:".prevv_arrow",
        nextArrow:".nextt_arrow",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                }
              },
        ]
    });
  });
                  
// // slider header



var dark  = document.querySelector(".fa-moon")
var sun  = document.querySelector(".fa-sun")

sun.addEventListener("click",()=>{
    document.body.classList.remove("dark") 
    sun.style.display="none"
    dark.style.display="block"

})


dark.addEventListener("click",()=>{
    document.body.classList.add("dark") 
     dark.style.display="none"
    sun.style.display="block"

})




$(window).scroll(function(){
  if(window.scrollY > 1550){
$(".about .container img").fadeIn(1000)
$("section h4").slideDown(1000)
$(".about .container .details_about b").show(1000)
$(".about .container .details_about button").fadeIn(1000)
$(".about .container .details_about p").show(1000)

  }else{
    $(".about .container img").fadeOut(1000)
    $("section h4").slideUp(1000)
$(".about .container .details_about b").hide(1000)
$(".about .container .details_about button").fadeOut(1000)
$(".about .container .details_about p").hide(1000)
  }
})

$(window).scroll(function(){
  if(window.scrollY > 400 ){
$(".top_products h3").slideDown(1000)



  }else{
    $(".top_products h3").slideUp(1000)
  }
})




// $(window).scroll(function(){
//   if(window.scrollY > 2300 ){
// $(".Servceis h5").slideDown(1000)
// $(".Servceis b").show(1000)


//   }else{
//     $(".Servceis h5").slideUp(1000)
//     $(".Servceis b").hide(1000)
   

//   }
// // console.log(window.scrollY)
// })


// console.log(window.scrollY)

// $(window).scroll(function(){
//   if(window.scrollY > 2900){
// $("section h2").slideDown(1000)
// $(".contact p").show(1000)

//   }else{
//     $("section h2").slideUp(1000)
//     $(".contact p").hide(1000)

//   }
// // 
// })
$(window).scroll(function(){
  if(window.scrollY > 60){
    // $("body").addClass("dark")
$(".down_nav").css({
 
      position:"fixed",top:"0",width:"100%",zIndex:"10000",
  
})
  }
  if(window.scrollY < 50){
    $(".down_nav").css({
top:"45px"
    })
}
}
)


var  cart_icone =document.querySelector(".fa-cart-shopping")
var shopping_cart = document.querySelector(".cart")
var close_cart =document.querySelector(".fa-circle-xmark")


cart_icone.onclick =function (){
  shopping_cart.classList.add("open")
}
close_cart.addEventListener("click",()=>{
  shopping_cart.classList.remove("open")
})





// --------------------------------products----------

var product =[
    {
        id: 1,
        img:"images/cake.4fafc2298ff06519b8af.jpg",
        namee:"chocolate",
        price:100,
        dis_price:30,
        count:1,
        co:1
    },
    {
        id: 2,
        img:"images/salad-table.jpg",
        namee:" Salad",
        price:30,
        dis_price:10,
        count:1,
        co:1
    }
    ,
    {
        id: 3,
        img:"images/plate-1.png",
        namee:"Greek Salad",
        price:60,
        dis_price:20,
        count:1,
        co:1
    }
    ,
    {
        id: 4,
        img:"images/chicken.fca7477c5c7841670903.jpg",
        namee:"chicken",
        price:140,
        dis_price:30,
        count:1,
        co:1
    }
    ,
    {
        id: 5,
        img:"images/Beza.c92c864b913a1945fea4.jpg",
        namee:"Pizza",
        price:100,
        dis_price:40,
        count:1,
        co:1
    }
    ,
    {
        id: 6,
        img:"images/donut.jpg",
        namee:"Sweet Donut",
        price:100,
        dis_price:30,
        count:1,
        co:1
    }
    ,
    {
        id: 7,
        img:"images/botatos.f885e427d7e0d007da79.jpg",
        namee:"French fries",
        price:200,
        dis_price:50,
        count:1,
        co:1
    }
    ,
    {
        id: 8,
        img:"images/meat.15b0b9ce2af6b75247c7.jpg",
        namee:"Meat",
        price:300,
        dis_price:100,
        count:1,
         co:1
    },
    {
      id: 9,
      img:"images/cake.4fafc2298ff06519b8af.jpg",
      namee:"chocolate",
      price:100,
      dis_price:30,
      count:1,
      co:1
  },
  {
      id: 10,
      img:"images/salad-table.jpg",
      namee:" Salad",
      price:30,
      dis_price:10,
      count:1,
      co:1
  }
  ,
  {
      id: 11,
      img:"images/plate-1.png",
      namee:"Greek Salad",
      price:60,
      dis_price:20,
      count:1,
      co:1
  }
  ,
  {
      id: 12,
      img:"images/chicken.fca7477c5c7841670903.jpg",
      namee:"chicken",
      price:140,
      dis_price:30,
      count:1, 
      co:1
  }
  ,
  {
      id: 13,
      img:"images/Beza.c92c864b913a1945fea4.jpg",
      namee:"Pizza",
      price:100,
      dis_price:40,
      count:1,
      co:1

  }
  ,
  {
      id: 14,
      img:"images/donut.jpg",
      namee:"Sweet Donut",
      price:100,
      dis_price:30,
      count:1,
      co:1
  }
  ,
  {
      id: 15,
      img:"images/botatos.f885e427d7e0d007da79.jpg",
      namee:"French fries",
      price:200,
      dis_price:50,
      count:1,
      co:1
  }
  ,
  {
      id: 16,
      img:"images/meat.15b0b9ce2af6b75247c7.jpg",
      namee:"Meat",
      price:300,
      dis_price:100,
      count:1,
      co:1
  },
  

]



// -------------------------------------------------
var container =document.querySelector(".container_product")

var  cart_product =document.querySelector(".cart_product")
var num =document.querySelector(".top_nav .right span")
var total =document.querySelector(".totall span")
var cout =document.querySelector(".pro .btn .cout")


function set_items_in_html(){

    var items=""
    for(var i =0 ; i < product.length ; i++){
      items+=`
      <div class="card" >
        <div>
            <img src="${product[i].img}" alt="">
        </div>
         <div class="card_detail">
            <b>${product[i].namee}</b>
            <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </div>
            <strong>$${product[i].price}.00<del>$${product[i].dis_price}.00</del> </strong>
            <button class="add_to_cart"  onclick="add_to_cartt(${i})">Add To Cart</button>
         </div>
    </div>`
    }
    container.innerHTML=items
 

   
}

set_items_in_html()




var cart
if(localStorage.getItem('cart')== null){
 cart =[]
}else{
  cart = JSON.parse(localStorage.getItem('cart'))

 
}




function add_to_cartt(index){
 
  
localStorage.setItem("cart",JSON.stringify(cart))



  if (product[index].co == 1 ) {
    cart.push(product[index])

++product[index].co

  }else if(product[index].co == 1000){
    console.log(false)
    product[index].co == 1

  } 
  

display_products()

}


function display_products(){
  var items="" 
  var totall = 0

  
cart.map((value,index)=>{
  totall += (value.price*value.count - value.dis_price*value.count)

  items+=`
      <div class="pro">
            <img src="${value.img}" alt="">
            <div>
                <p>${value.namee}</p>
                <p>$${value.price*value.count}.00</p>
                <span>$${value.dis_price*value.count}.00</span>
            </div>
            <div class="btn">
                <button onclick='plus(${index})' class="plus" >+</button>
                <span class="cout">${value.count}</span>
                <button onclick='minus(${index})' class="minus">-</button>
            </div>
            <i onclick="delete_product(${index})"  class="fa-solid fa-trash" ></i>
           </div>
  `

})
total.innerHTML= `$${totall}.00`
if(cart.length > 0){
cart_product.innerHTML=items
num.innerHTML=cart.length
num.style.color="#f83d50"
}else{
  cart_product.innerHTML="Your Cart Is Empty"
  cart_product.style.textAlign ="center"
  num.innerHTML=cart.length
  num.style.color="#fff"
}


}

function plus(number){
  ++cart[number].count
  display_products()
}

function minus(number){
  if( cart[number].count > 1 ){
    --cart[number].count
    display_products()
  }else{
    delete_product(number)
  }
}





display_products()
function delete_product(number){
  cart.splice( number , 1)
  
  localStorage.setItem("cart",JSON.stringify(cart))

  display_products()
  

}


