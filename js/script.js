$(document).ready(function(){
  
    $(".slide-box").slick({
      slidesToShow: 4 ,
      infinite: false , 
      arrows: false , 
    })
    
    //슬라이드 좌우버튼
    // 영역에 마우스 올리면 다음 버튼 생김
    //버튼 누르면 이전 버튼 + 바 오른쪽 이동 + 다음 버튼 사라짐
    // 이전 버튼..마우스 떠나면 이전 버튼 사라짐
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