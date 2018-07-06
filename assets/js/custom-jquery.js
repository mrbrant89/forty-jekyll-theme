// Logo Resize On Scroll
$(document).on('scroll', function() {
    logo = "assets/images/Logo/Logo-White-Full.svg"
    logoAlt = "assets/images/Logo/Logo-White-No-Tagline.svg"
    if ($(document).scrollTop() >= 150) {
      $('#site-logo').css('width', '150px');
      $('#site-logo').css('padding', '0.5em');
      $('#site-logo').attr('src', logoAlt);
    } else {
      $('#site-logo').css('width', '');
      $('#site-logo').css('padding', '');
      $('#site-logo').attr('src', logo);
    }
  });