$("button").on("click", function(){

    $("#gifs-appear-here").html("");

    var show = $(this).attr("data-show");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        show + "&api_key=eV52GA91MGFcyR0MLFDZk4029hRjjGga&limit=10";
    
    $.ajax({
        url: queryURL,
        method: "GET"
        })
            // After the data comes back from the API
        .then(function(response) {
              // Storing an array of results in the results variable
            var results = response.data;
            console.log(results);
    
              // Looping over every result item
            for (var i = 0; i < results.length; i++) {
    
                // Only taking action if the photo has an appropriate rating
            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                  // Creating a div with the class "item"
                var gifDiv = $("<div class='item col-lg-4'>");
    
                  // Storing the result item's rating
                var rating = results[i].rating;
    
                  // Creating a paragraph tag with the result item's rating
                var p = $("<p>").text("Rating: " + rating);
    
                  // Creating an image tag
                var showImage = $("<img>");
    
                  // Giving the image tag an src attribute of a proprty pulled off the
                  // result item
                showImage.attr("src", results[i].images.fixed_height.url);
    
                  // Appending the paragraph and personImage we created to the "gifDiv" div we created
                gifDiv.append(p);
                gifDiv.append(showImage);
    
                  // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                $("#gifs-appear-here").prepend(gifDiv);
                }
              }
            });
        });