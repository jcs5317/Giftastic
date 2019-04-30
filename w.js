$(document).on("click", "img", function () {
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $(this).attr("data-state");
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });

/*<script>
     (document).ready(function() {

var feelings = ["happy", "excited", "sad", "angry"
];    
//})

// function for making buttons to site
function makeButtons(arrayToUse, classToAdd, areaToAddTo) {
    
    $(areaToAddTo).empty();
    for (var i = 0; i < arrayToUse.length; i++){
        var a = $("<button>");
        a.addClass(classToAdd);
        a.attr("data-type", arrayToUse[i]);
        a.text(arrayToUse[i]);
        $(areaToAddTo).append(a);
    }
}
$(document).on("click", "feeling-button", function(){
    $("#feelings").empty();
    $("feeling-button").removeClass("active");
    $(this).addClass("active");

    var type = $(this).attr("data-type");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=JxvkKgnPRq7412lEXbBvdZju5bpGNuo8&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        console.log(queryURL);

          console.log(response);
        var results = response.data;

        for (var i = 0; i < results.length; i++){
        var feelingDiv = $("<div class=\"feeling-item\">");   
        } 
        
    })
});
  </script>
  */