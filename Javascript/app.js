$(document).ready(function() {
//topic feeling array
    var feelings = ["happy", "excited", "sad", "angry"
];
// function for making buttons to site
function makeButtons() {
    
  
    for (var i = 0; i < feelings.length; i++){
        var a = $("<button>");
        a.addClass("feeling");
        a.attr("data-name", feelings[i]);
        a.text(feelings[i]);
        $("#feelingBtn").append(a);
    }
}
//function to show gif data
function renderArea(){
//deleting the gif button before adding new gif buttons, do not want repeat buttons
$("#feelingBtn").empty();

 // Adding click event listener to all buttons
 $("#addFeeling").on("click", function() {
    event.preventDefault();
    // Grabbing and storing the property value from the button
    userInput = $("feeling-input").val().trim();
    console.log(userInput);
    feelings.push(userInput);
    console.log(feelings);
    makeButtons();
 })
 $(document).on ("click", ".feeling", function(){
     var feeling = $(this).data("name");
     console.log(x);
 })
    // Constructing a queryURL using the feeling name
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      feeling + "&api_key=JxvkKgnPRq7412lEXbBvdZju5bpGNuo8&limit=4";

    // Performing an AJAX request with the queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // After data comes back from the request
      .then(function(response) {
        console.log(queryURL);

        console.log(response);

        // Looping through each result item
        
      });
});