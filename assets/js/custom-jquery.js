// Logo Resize
$(document).on('scroll', function() {
    logo = "{{ site.logo | absolute_url }}"
    logoAlt = "{{ site.logoAlt | absolute_url }}"
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