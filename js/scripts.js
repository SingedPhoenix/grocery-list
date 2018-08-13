$(document).ready(function() { // Initializes the function

  $("#groceryList").submit(function(event) {
    event.preventDefault(); // Prevents errors
    var itemsLists = []; // Creates a blank array for the inputs to be put into
    for (var i = 0; i < $('.grocItem').length; i++) { // Collects each input
      var grocery = "#grocery-item" + (i + 1); // loops through each input
      if ($(grocery).val()); { // if grocery has an inputted value, !== blank
        itemsLists.push($(grocery).val()); // then it will be added to itemsLists array
    }
  }

itemsLists = itemsLists.sort(); // Alphabetizes the array
itemsLists = itemsLists.map(function(grocery) { // Go through the array one by one
  grocery = grocery.toUpperCase(); // and then converts it to uppercase
  return grocery;
});
itemsLists.forEach(function(item) {
  $("#displayList").append('<li>' + item + '</li>'); // Creates the list with loops
});

$("#groceryList").hide(); // Hides the form
});
});
