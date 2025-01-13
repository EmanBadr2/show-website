// loding screen
$(document).ready(function ( ) {
    $(".landing").fadeOut(3000)
})

// scroll
// backGround for nav   && arrowup hidden/show  && .shadow-text by maincolor
let sectionScroTop = $('#about').offset().top
$(window).scroll(()=>{
   let scrollTop =$(window).scrollTop()
   if( scrollTop >= sectionScroTop ){
   $(".navbar").css('background-color' , 'var(--main-color)' ) 
   $(".arrowUp").fadeIn(1000)
   $(".shadow-text ").css('color' , 'var(--main-color)' )
   }
   else {
    $(".navbar").css('background-color' , 'transparent' )
    $(".arrowUp").fadeOut(1000) 
    $(".shadow-text ").css('color' , '#000' )
   }
})

// active
$(".nav-link").click(function(){
    // add active & remove
    $(this).addClass("active")
    $(this).parent().siblings().children().removeClass("active")
    //// section animate By time
    let sectionHref =$(this).attr('href')
    let sectionScrollTop = $(sectionHref).offset().top
    $("body,html").animate({scrollTop: sectionScrollTop}, 500 )
})

// arrowUp animate
 $(".arrowUp").click(function () {
    $("body,html").animate({scrollTop: 0}, 500 )
 })

// setting 
// 1-hidden innerBox in start
 $(".settings").css({left:  -$(".inner-settings").outerWidth(true)  })
// 2- animatin   by--> 2 way
$(".setting-icon").click(function () {
    // by offset().left
    let left = -( $(".setting-icon").offset().left)
    $(".settings").animate({left: left },500) 
    // by outerWidth()
//     let left =  $(".settings").css("left") 
//     if ( left == "0px" ) {
//       $(".settings").animate({left:  -$(".inner-settings").outerWidth(true)  },500) 
//    }
//    else{
//       $(".settings").animate({left: "0px" },500) 
//    }
})

// click to change color
$(".box").click(function () {
    let color = $(this).css('background-color')
    $(":root").css('--main-color' , color) 
})

// click  to change BackGround
$('.inner-settings .inner-Bg img').click(function () {
    let pathImg = $(this).attr("src")
    $('#home').css('background-image' , `url(${pathImg})`  )
})
// ---------------


