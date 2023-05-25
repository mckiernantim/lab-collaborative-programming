const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(words) {
  return words.sort((a, b) => a.length - b.length);
}


/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */

function textScroller(word) {
  const scrolledWords = [];

  for (const char of word) {
    const scrolledWord = word.substring(1) + word[0];
    scrolledWords.push(scrolledWord);
    word = scrolledWord;
  }

  return scrolledWords;
}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */

function betweenExtremes(numbers) {
  let min = numbers[0];
  let max = numbers[0];
  let allNumbers = true;

  for (const number of numbers) {
    if (isNaN(number)) {
      // Check if the element is not a number
      allNumbers = false;
      break;
    }
    if (number < min) {
      min = number;
    }
    if (number > max) {
      max = number;
    }
  }

  if (!allNumbers) {
    return numbers; // Return the original array if not all elements are numbers
  }

  return max - min;
}



/**
 * Returns the difference between the largest and smallest number in the array
 * @param {String} message - A string to translate.
 * @param {Object[]} dictionary - A morse code dictionary ( use the one imported at the top of this file)
 * @returns {Number} The message in morse code
 * Example: "A new month"
 * .- / -. . .-- / -- --- -. - ....
 */

function morseCodeTranslator(message, dictionary) {
  const words = message.split(' ');
  const translatedWords = [];
  
  for (const word of words) {
    const characters = word.split('');
    const translatedCharacters = [];

    for (const char of characters) {
      const morseCode = dictionary[char.toUpperCase()];
      translatedCharacters.push(morseCode || char);
    }

    translatedWords.push(translatedCharacters.join(' '));
  }

  return translatedWords.join(' ');
}


module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
