var reviewForm = document.getElementById('review-form');
var reviewContainer = document.getElementById('review-container');


// This section of code was made with help from the Week 9 Lab Resources and Mozilla documentation:
// https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/submit 
reviewForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var newReview = document.createElement("article");

    // Create review and clear inputs
    var username = document.createElement('h4');
    username.textContent = document.getElementById('name-input').value;
    document.getElementById('name-input').value = '';

    var selectedRating = document.querySelector('input[name="rating"]:checked')?.value;
    var starString = "";
    for (var i = 0; i < selectedRating; i++) {
      starString += '\u2605';
    }
    if (starString != '') {
      var rating = document.createElement('h4');
      rating.textContent = starString;
    }

    var review = document.createElement('p');
    review.textContent = document.getElementById('review-input').value;
    document.getElementById('review-input').value = '';

    // Add review to article
    newReview.append(username, rating, review);

    // Add article to review list
    reviewContainer.append(newReview);
});

