//= require jquery
//= require rails-ujs
//= require_tree .
//= require select2

$(document).ready(function(){
  // Turn on js-selectable class so that it becomes SELCT 2 tag
  $('.js-searchable').select2({
    placeholder: "Choose a User",
    allowClear: true,
    width: 120,
    theme: "bootstrap"
  });
});
