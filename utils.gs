// function h(word, letter) {
//   return word.includes(letter);
// }

function h(word, letter) {
  // Google Sheets uses a sub-array structure... [["existential"], ["quantifier"]]
  if(Array.isArray(word)) {
    word = word[0];
  }
  if(Array.isArray(letter)) {
    letter = letter[0];
  }

  // regex patterns
  const wordPattern = /^[a-z]+$/i; // match only a-z characters
  const letterPattern = /^[a-z]$/i; // match a single character from a-z

  // Validate word and letter against the patterns
  const wordLenErr = (word.split(" ").length > 1)
  const wordCharErr = (!wordPattern.test(word))
  var wordErr = ""
  if (wordLenErr || wordCharErr) {
    wordErr = `Invalid word input for h: "${word}".`
    wordLenErr ? wordErr += " Word should be one word only." : wordErr += ""
    wordCharErr ? wordErr += " Word should be composed of a-z characters only." : wordErr += ""
    throw new Error(wordErr);
  }

  const letterLenErr = (letter.split("").length > 1)
  const letterCharErr = (!letterPattern.test(letter))
  var letterErr = ""
  if (letterLenErr || letterCharErr) {
    letterErr = `Invalid letter input for h: "${letter}".`
    letterLenErr ? letterErr += " Letter should be a single character." : letterErr += ""
    letterCharErr ? letterErr += " Letter should be composed of a-z characters only." : letterErr += ""
    throw new Error(letterErr);
  }

  return word.includes(letter);
}

function v(letter) {
  if(Array.isArray(letter)) {
    letter = letter[0];
  }

  const letterPattern = /^[a-z]$/i; // match a single character from a-z
  const letterLenErr = (letter.split("").length > 1)
  const letterCharErr = (!letterPattern.test(letter))
  var letterErr = ""
  
  if (letterLenErr || letterCharErr) {
    letterErr = `Invalid letter input for v: "${letter}".`
    letterLenErr ? letterErr += " Letter should be a single character." : letterErr += ""
    letterCharErr ? letterErr += " Letter should be composed of a-z characters only." : letterErr += ""
    throw new Error(letterErr);
  }

  return "aeiouAEIOU".includes(letter);
}

function exists(array, predicate) {
  for (let item of array) {
    // Logger.log(predicate)
    if (predicate(item)) {
      return true;
    }
  }
  return false;
}

function forall(array, predicate) {
  for (let item of array) {
    if (!predicate(item)) {
      return false;
    }
  }
  return true;
}

function and(p, q) {
  return p && q;
}

function implies(p, q) {
  return !p || q;
}

function generalizedQuantifier(W, X, quantifierW, quantifierX, predicateMod) {
  return quantifierW(W, word => quantifierX(X, letter => predicateMod(h(word, letter), v(letter))));
}

function TESTER() {
  Logger.log(existsW_existsX_hAndV([["quantified"], ["expression"]], [["i"], ["n"]]))
}
