// Logo Resize
$(document).on('scroll', function() {
    if ($(document).scrollTop() >= 150) {
      $('#site-logo').css('width', '150px');
      $('#site-logo').css('padding', '0.5em');
    } else {
      $('#site-logo').css('width', '');
      $('#site-logo').css('padding', '');
    }
  });