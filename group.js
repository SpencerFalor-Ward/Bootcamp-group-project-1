
//textRazor api code
function testAPI() {
  $.ajax({
    url: " https://cors-anywhere.herokuapp.com/https://api.textrazor.com",
    method: "POST",
    timeout: 0,
    headers: {
      "x-textrazor-key":
        "c8a64d61fcc45077687314db86948b8faf8546ee880318cd0d603f5f",
      Type: "application/x-www-form-urlencoded"
    },
    data: {
      extractors: "words,partOfSpeech",
      text:
        "Spain's stricken Bankia expects to sell off its vast portfolio of industrial holdings that includes a stake in the parent company of British Airways and Iberia."
    }
  }).done(function(response) {
    console.log(response);
  });
}
testAPI();







var tester = ["face", "goog", "brexit"]

// Emoji-api
// https://emoji-api.com/emojis - emojis with group, subgroup, name, etc
// https://emoji-api.com/emojis?search=computer - emoji search by keyword (computer in this case)
// https://emoji-api.com/categories - emoji categories
// https://emoji-api.com/categories/travel-places - all emojis within a single category


// an array to populate with emoji names for searching
var emojiArray =[];

// ajax query of the database- can be altered with above parameters
$("#button").click(function() {
  var inputText = $("#inputField").val();
  
  var queryURL = "https://emoji-api.com/emojis" 
  $.ajax({
    url: queryURL,
    method: "GET"
  })
  .then(function(response){
    console.log(response);
  for (let i = 0; i < response.length; i++) {
    // this creates an array of all of the emoji names 
    emojiArray.push(response[i].slug);
    
    
  }
  console.log(emojiArray);
  allIndexOf(emojiArray);  

  })
})

var spain = "face"

function allIndexOf (emojiArray) {
  var indices = [];
  for (let i = 0; i < emojiArray.length; i++) {
    emojiYes = emojiArray[i].search("car")
    if (emojiYes > -1) {
      indices.push(i)
    }
  }
  console.log(indices);
}




// an array to populate with emoji names for searching
var emojiArray =[];

// ajax query of the database- can be altered with above parameters
$("#button").click(function() {
  var inputText = $("#inputField").val();

  var queryURL = "https://emoji-api.com/emojis"
  $.ajax({
    url: queryURL,
    method: "GET"
  })
  .then(function(response){
    console.log(response);
  for (let i = 0; i < response.length; i++) {
    // this creates an array of all of the emoji names
    emojiArray.push(response[i].slug);
    console.log(emojiArray);
  }


  })
})


