//= require jquery
//= require rails-ujs
//= require_tree .
//= require select2

$(document).ready(function(){
  // Turn on js-selectable class so that it becomes SELCT 2 tag
  $('.users-search').select2({
    theme: "bootstrap",
    multiple: false,
    allowClear: true,
    minimumInputLength: 3,
    placeholder: "Search By Name or Username",
    width: '400px',
    dropdownAutoWidth: 'true',
    // closeOnSelect: false,


  });
});

$(document).ready(function(){
  // Turn on js-selectable class so that it becomes SELCT 2 tag
  $('.state-search').select2({
    theme: "bootstrap",
    multiple: false,
    allowClear: true,

    placeholder: "Select State",
    width: '100px',
    dropdownAutoWidth: 'true',
    // closeOnSelect: false,


  });
});

