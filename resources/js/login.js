(function() {
  var $btSubmit = $('.js-bt-submit');
  var $inputPass = $('.js-input-pass');
  var $inputUsername = $('.js-input-username');
  var $inputDomain = $('.js-input-domain');
  var $formLogin = $('.js-form-login');


  $inputUsername.focus();

  $btSubmit.hover(function () {
    $(this).css('background-color', 'rgb(42, 100, 150)');
  }, function () {
    $(this).css('background-color', 'rgb(50, 118, 177)');
  });

})();