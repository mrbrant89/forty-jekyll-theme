// Logo Resize On Scroll
$( document ).ready(function() {
  logo = "https://michaelbrant.com/assets/images/Logo/Logo-White-No-Tagline.svg"  
  logoAlt = "https://michaelbrant.com/assets/images/Logo/Logo-White-Full.svg"
    if ( $("#header").hasClass("alt") ) {
      $('#site-logo').css('width', '');
      $('#site-logo').css('padding', '');
      $('#site-logo').attr('src', logoAlt);
    } else {
      $('#site-logo').css('width', '150px');
      $('#site-logo').css('padding', '0.5em');
      $('#site-logo').attr('src', logo);
    }
  });

  $(document).on('scroll', function() {
    logo = "https://michaelbrant.com/assets/images/Logo/Logo-White-No-Tagline.svg"  
    logoAlt = "https://michaelbrant.com/assets/images/Logo/Logo-White-Full.svg"
      if ( $("#header").hasClass("alt") ) {
        $('#site-logo').css('width', '');
        $('#site-logo').css('padding', '');
        $('#site-logo').attr('src', logoAlt);
      } else {
        $('#site-logo').css('width', '150px');
        $('#site-logo').css('padding', '0.5em');
        $('#site-logo').attr('src', logo);
      }
    });    