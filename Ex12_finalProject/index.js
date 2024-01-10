$(window).scroll(
  function(){
    // 화면의 위쪽을 기준으로 값을 가져오는 애 50보다 크다 -> 스크로를 조금이라도 내렸다
    if($(this).scrollTop()> 50){
      $('header, .btn-top').addClass('active');
    }else{
      //가장 위인 상태
      $('header, .btn-top').removeClass('active');
    }
  }
);