$(document).ready(function(){

  $('.square').click(
    function() {
      var selectedSquare = $(this);

      $.ajax({
        url: "https://flynn.boolean.careers/exercises/api/random/int",
        method: "GET",
        success: function(data) {
          var responseNumber = data.response;
          // console.log(responseNumber);
          if (responseNumber <= 5) {
            selectedSquare.addClass('yellow');
          } else {
            selectedSquare.addClass('green');
          }
          selectedSquare.text(responseNumber)
        },
        error: function(status, error) {
          console.log(status, error);
          alert("There's an error: " + status + error )
        }
      });
  });
});
