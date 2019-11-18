$(".choice").mouseover(function(){
    $(".choice").addClass("small");
    $(this).removeClass("small");
    $(this).addClass("expand");
}
);



$(function() {

    $(".progress").each(function() {
  
      var value = $(this).attr('data-value');
      var left = $(this).find('.progress-left .progress-bar');
      var right = $(this).find('.progress-right .progress-bar');
  
      if (value > 0) {
        if (value <= 50) {
          right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
        } else {
          right.css('transform', 'rotate(180deg)')
          left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
        }
      }
  
    })
  
    function percentageToDegrees(percentage) {
  
      return percentage / 100 * 360
  
    }
  
  });

  function scrl() {

    let w = document.documentElement.clientWidth
    let h = document.documentElement.clientHeight

    let pw = w - 80
    let ph = h - 80

    if (pageYOffset > h) {

        upward.style.top = ph + "px"
        upward.style.left = pw + "px"

        upward.style.display = "block"
    } else upward.style.display = ''
}
window.addEventListener('scroll', scrl)
  

