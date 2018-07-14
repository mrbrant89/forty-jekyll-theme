// Logo Resize On Scroll
$( document ).ready(function() {
  logoAlt = "https://michaelbrant.com/assets/images/Logo/Logo-White-No-Tagline.svg"  
  logo = "https://michaelbrant.com/assets/images/Logo/Logo-White-Full.svg"
    /*
    if ($(document).scrollTop() >= 150) {
      $('#site-logo').css('width', '150px');
      $('#site-logo').css('padding', '0.5em');
      $('#site-logo').attr('src', logoAlt);
    } else {
      if ($('#header').height() <= 52) {
        $('#site-logo').css('width', '150px');
        $('#site-logo').css('padding', '0.5em');
        $('#site-logo').attr('src', logoAlt);
      } else {
        $('#site-logo').css('width', '');
        $('#site-logo').css('padding', '');
        $('#site-logo').attr('src', logo);
      }
    }
    */
    if ( (!$("#header").hasClass("alt")) ) {
      $('#site-logo').css('width', '150px');
      $('#site-logo').css('padding', '0.5em');
      $('#site-logo').attr('src', logoAlt);
    } else {
      $('#site-logo').css('width', '');
      $('#site-logo').css('padding', '');
      $('#site-logo').attr('src', logo);
    }
  });