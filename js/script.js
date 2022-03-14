$(document).ready(function(){
  // 제품슬라이드박스
    $(".slide-box").slick({
      slidesToShow: 4 ,
      infinite: false , 
      arrows: false , 
    })
    // 스토어 슬라이드박스
    var indexNum = 0
  
  setInterval(function(){
     if(indexNum > 2){
      indexNum = 0
    }
    $(".content").css({"left" : -1100 * indexNum })
    indexNum++
  }, 3000);
  
    
    $(".slide-wrap").mouseover(function(){
      $(".arrows-btn > .next-btn").addClass("active")
    });
    $(".slide-wrap").mouseleave(function(){
      $(".arrows-btn > .next-btn").removeClass("active")
    });

    $(".arrows-btn > .prev-btn").click(function(){
      $(".slide-box").slick('slickPrev')
    })

    $(".arrows-btn > .next-btn").click(function(){
      $(".slide-box").slick('slickNext')
    })
    // 프로그레스 바
    $('.slide-box').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      console.log(nextSlide);
    });
    
})