for (var i = 0; i < response.data.length; i++) {

          // Creating and storing a div tag
          var feelingDiv = $("<div>");

          // Creating a paragraph tag with the result item's rating
          var p = $("<p>").text("Rating: " + response.data[i].rating);

          // Creating and storing an image tag
          var feelingImage = $("<img>");
          // Setting the src attribute of the image to a property pulled off the result item
          feelingImage.attr("src", results[i].images.fixed_height.url);

          // Appending the paragraph and image tag to the feelingDiv
          feelingDiv.append(p);
          feelingDiv.append(feelingImage);

          // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
          $("#gifs-appear-here").prepend(feelingDiv);
        }

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