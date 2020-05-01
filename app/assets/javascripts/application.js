//= require jquery
//= require rails-ujs
//= require_tree .
//= require select2

$(document).ready(function(){
  // Turn on js-selectable class so that it becomes SELCT 2 tag
  $('.js-searchable').select2({
    theme: "bootstrap",
    multiple: false,
    allowClear: true,
    minimumInputLength: 3,
    placeholder: "Search By Email",
    width: '400px',
    dropdownAutoWidth: 'true',
    // closeOnSelect: false,


  });
});

// $('#id').select2('focus');



// document.getElementById("MyElement").classList.add('MyClass');

// document.getElementById("MyElement").classList.remove('MyClass');

// if ( document.getElementById("MyElement").classList.contains('MyClass') )

// // document.getElementById("MyElement").classList.toggle('MyClass');
// $(document).on('focus', '.select2-selection.select2-selection--single', function (e) {
//   $(this).closest(".select2-container").siblings('select:enabled').select2('open');
// });

// // steal focus during close - only capture once and stop propogation
// $('select.select2').on('select2:closing', function (e) {
//   $(e.target).data("select2").$selection.one('focus focusin', function (e) {
//     e.stopPropagation();
//   });
// });



// $('#id').select2('open'); will set focus and open the select2 ready for search.

// var list = $("#fancy").select2({
//   closeOnSelect: false
// }).on("select2:closing", function(e) {
//   e.preventDefault();
// }).on("select2:closed", function(e) {
//   list.select2("open");
// });
// list.select2("open");
