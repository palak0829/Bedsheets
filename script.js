function offer(){

alert("🎉 Welcome! Flat 20% OFF Today");

}

let buttons=document.querySelectorAll(".card button");

buttons.forEach(function(btn){

btn.addEventListener("click",function(){

alert("Product Added to Cart");

});

});