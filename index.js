// prompt("Enter you name !!");

$("h1").css("color","orange");

$("button").addClass("btn"); // adding the classes

console.log($("button").css("font-size"));

// $(".btn").html("<em></em>");

$("a").attr("href","https://in.yahoo.com");

// $("a").css("font-size","2rem");

// $("button").click(function(){
//     $("h1").css("color","purple");
// });
//changes the heading color to purple on clicking any button

$("input").keypress(function(event){
console.log(event.key);
});
//gives the key pressed on the console

$("body").keypress(function(event){
// console.log(event.key);
  $("h1").text(event.key);
});
//changes the heading text by keypress

$("h1").on('dblclick',function(){
  $("h1").css("color","red");
});
// on double click color of heading changes to red


// $("button").remove();

// $("button").append("<button>new</button>");

// $("h1").prepend("<button>new</button>");

// $("h1").after("<button>new</button>");

$("h1").before("<button>Intro</button>");


// $("button").on("click",function(){
//   $("h1").hide();
// });
//hides the heading after clicking on the button

// $("button").on("click",function(){
//   $("h1").toggle();
// });


//fadeout
//fadein
//fadetoggle
//slide up
//slide down
//slide toggle

$("button").on("click",function(){
  $("h1").fadeOut().fadeIn().fadeToggle().delay(500).slideUp().slideDown().slideToggle().slideDown().animate({opacity:0.5});
});
