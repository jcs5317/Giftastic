$(document).ready(function () {

  //topic feeling array
  var feelings = ["happy", "excited", "sad", "angry"
  ];
  // function for making buttons to site
  function makeButtons() {
    //deleting the gif button before adding new gif buttons, do not want repeat buttons  
    $("#feelingBtn").empty();
    console.log("Make Buttons function fired");
    console.log(feelings);
    for (var i = 0; i < feelings.length; i++) {
      var a = $("<button>");
      a.addClass("feeling");
      a.attr("data-name", feelings[i]);
      a.text(feelings[i]);
      $("#feelingBtn").append(a);
    }
  }
  makeButtons();

  // User inputs, store variable, add click event listener to all items into array that are buttons
  $("#addFeeling").on("click", function () {
    event.preventDefault();
    // Grabbing and storing the property value from the button
    userInput = $("#feeling-input").val().trim();
    console.log(userInput);
    feelings.push(userInput);
    console.log(feelings);
    makeButtons();
  })
  $(document).on("click", ".feeling", function () {
    emotion = $(this).data();
  })
  // Constructing a queryURL using the feeling name
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + emotion + "&api_key=JxvkKgnPRq7412lEXbBvdZju5bpGNuo8&limit=4";

  // Performing an AJAX request with the queryURL
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // After data comes back from the request
    .then(function (response) {
      console.log(queryURL);

      console.log(response);

      // Looping through each result item
      for (var i = 0; i <response.data.length; i++) {

        // Creating and storing a div tag
        var feelingDiv = $("<div>");

        // Creating a paragraph tag with the rating
        var p = $("<p>").text("Rating: " + response.data[i].rating);

        // Creating and storing an image tag
        var feelingImage = $("<img>");
        // Setting the src attribute of the image to a property pulled off the result item
        feelingImage.attr("src", response.data[i].images.fixed_height_still.url.replace(/^http:\/\//i, 'https://'));
        feelingImage.attr('data-still', response.data[i].images.fixed_height_still.url.replace(/^http:\/\//i, 'https://'));
        feelingImage.attr('data-animate', response.data[i].images.fixed_height.url.replace(/^http:\/\//i, 'https://'));
        feelingImage.attr('data-state', "still");
        feelingImage.addClass("gif");
        feelingDiv.append(p);
        feelingDiv.append(feelingImage);

        // Prependng the feelingDiv to the HTML page in the "#gifs-appear-here" div
        $("#gifs-appear-here").prepend(feelingDiv);
        // Appending the paragraph and image tag to the feelingDiv

      } //end of the for loop
      
    });
    });