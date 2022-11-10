var animation = anime({
    targets: '.proj',
    translateY: 50,
    opacity: 1,
    easing: 'easeInOutSine',
    autoplay: false
  });

window.onscroll=function(e){
    animation.seek(window.pageYOffset * 1.35);
    console.log(window.pageYOffset);
};
