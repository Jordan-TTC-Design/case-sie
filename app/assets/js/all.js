$(document).ready(() => {
  // console.log('Hello Bootstrap4');
  //aos套件
  AOS.init({
    once: true,
  });
  //電腦版header往下滾時的轉換效果
  $(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
      $('.header__nav').addClass('header--scroll');
      $('.header__logoBox').addClass('header--scroll');
      $('.logoBox__txt').hide();

    } else {
      $('.header__nav').removeClass('header--scroll');
      $('.header__logoBox').removeClass('header--scroll');
      $('.logoBox__txt').show();

    }
  });
  //滾動到最上面
  $("#pageUp").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 800);
  })
  //header menu的滾動
  $(".header__nav li a,.this").click(function (event) {
    event.preventDefault()
    //先中止前一個項目
    event.stopPropagation()
    //開始
    var scrollPoint = 0
    // console.log('ok');
    //對應menu的a的title
    var sectionTitle = this.title;
    var id = "#section-" + sectionTitle;
    // console.log(id);
    //找到每個section位置y值
    scrollPoint = $(id).offset().top;
    var lastScrollPoint = scrollPoint - 120;
    // console.log(scrollPoint);
    // console.log(lastScrollPoint);
    //進行運動
    $("html,body").animate({ scrollTop: lastScrollPoint }, 800);
  });
  //bottom menu的滾動
  $(".bottom-menu li a,.this").click(function (event) {
    event.preventDefault()
    //先中止前一個項目
    event.stopPropagation()
    //開始
    var scrollPoint = 0
    // console.log('ok');
    //對應menu的a的title
    var sectionTitle = this.title;
    let id = "#section-" + sectionTitle;
    // console.log(id);
    //找到每個section位置y值
    scrollPoint = $(id).offset().top;
    var lastScrollPoint = scrollPoint - 120;
    // console.log(scrollPoint);
    // console.log(lastScrollPoint);
    //進行運動
    $("html,body").animate({ scrollTop: lastScrollPoint }, 800);
  });
  //展開漢堡選單
  $('.header__nav--hamburger').click(function(e){
    e.preventDefault();
    // $(this).toggleClass('open');
    $('.mobile-nav-wrap').toggleClass('disabled');
    $('.bg-black').toggleClass('disabled');
  });
});