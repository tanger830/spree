$(function() {
  var calculator_select = $('select#calc_type')
  var original_calc_type = calculator_select.attr('value');
  $('.calculator-settings-warning').hide();
  calculator_select.change(function() {
    if (calculator_select.attr('value') == original_calc_type) {
      $('div.calculator-settings').show();
      $('.calculator-settings-warning').hide();
      $('.calculator-settings input').prop("disabled", false);
    } else {
      $('div.calculator-settings').hide();
      $('.calculator-settings-warning').show();
      $('.calculator-settings input').prop("disabled", true);
    }
  });
})
