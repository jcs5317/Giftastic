$(document).ready(function () {
  //topic feeling array
  var feelings = ["happy", "excited", "sad", "angry"];
  // function for making buttons to site
  function makeButtons() {
    //deleting the gif button before adding new gif buttons, do not want repeat buttons  
    $("#feelingBtn").empty();

    for (var i = 0; i < feelings.length; i++) {
      var a = $("<button>");
      a.addClass("feeling");
      a.data("name", feelings[i]);
      a.text(feelings[i]);
      $("#feelingBtn").append(a);
    }
  }
  makeButtons();

  // User inputs, store variable, add click event listener to all items into array that are buttons
  $("#addFeeling").on("click", function () {
    event.preventDefault();
    // grabbing and storing the property value from the button 
    var userInput = $("#feeling-input").val().trim().toLowerCase();

    // validating data so there's no empy buttons added to page
    if (!feelings.includes(userInput) && userInput !== "") {
      feelings.push(userInput);
      makeButtons();
    //notification for when input is blank and add is clicked
    } else {
      alert("update your input")
    }
    $("#feeling-input").val("");
  })
//event listener for button
  $(document).on("click", ".feeling", function () {
    emotion = $(this).data("name");
    // Constructing a queryURL using the feeling name
    getGiff(emotion);
  })
  //function to store giphy API URL to get 10 random images associated with topic
  function getGiff(emotion) {
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + emotion + "&api_key=JxvkKgnPRq7412lEXbBvdZju5bpGNuo8&limit=10";

    // Performing an AJAX request with the queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // getting  data back from the request
      .then(function (response) {
        // Looping through each result item
        for (var i = 0; i < response.data.length; i++) {

          // creating and storing a div tag
          var feelingDiv = $("<div>").addClass('giff-wrap');

          // creating a paragraph tag with the rating
          var p = $("<p>").text("Rating: " + response.data[i].rating);

          // creating and storing an image tag
          var feelingImage = $("<img>");
          // Setting the src attribute of the image to a property pulled off the result item
          feelingImage.attr("src", response.data[i].images.fixed_height_still.url.replace(/^http:\/\//i, 'https://'));
          feelingImage.attr('data-still', response.data[i].images.fixed_height_still.url.replace(/^http:\/\//i, 'https://'));
          feelingImage.attr('data-animate', response.data[i].images.fixed_height.url.replace(/^http:\/\//i, 'https://'));
          feelingImage.addClass("gif");
          feelingDiv.append(p);
          feelingDiv.append(feelingImage);

          // Prependng the feelingDiv to the HTML page in the "#gifs-appear-here" div
          $("#gifs-appear-here").prepend(feelingDiv);

        } //end of the for loop
      });
  }

  //creating click function for still and animate image. must begin with src to target right attr for window
  $(document).on("click", "img", function () {
    var src = $(this).attr('src');
    var still = $(this).data("still");
    var animate = $(this).data("animate");

    if (src === still) {
      $(this).attr('src', animate)
    } else {
      $(this).attr('src', still)
    }

  })

});