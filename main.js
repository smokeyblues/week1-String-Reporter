var word = window.prompt("Please enter a word");

window.alert("You entered: " + word + 
             "\n" + "There are " + word.length + " characters in " + word +
            "\n" + "Lowercase: " + word.toLowerCase() +
            "\n" + "Uppercase: " + word.toUpperCase() +
            "\n" + "Example: I don't think " + word[0].toLowerCase() + word.substring(1) + " is spelt that way." + 
            "\n" + "Subword: " + word.substring(1, 5));