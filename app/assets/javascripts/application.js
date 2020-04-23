//= require jquery
//= require rails-ujs
//= require_tree .
//= require select2

$(document).ready(function(){
  // Turn on js-selectable class so that it becomes SELCT 2 tag
  $('.js-searchable').select2({
    theme: "bootstrap",
    multiple: true,
    allowClear: true,
    minimumInputLength: 3,
    placeholder: "Search User",

  });
});
