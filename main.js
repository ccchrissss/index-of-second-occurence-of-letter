function secondSymbol(str, letter) {
  // find the index of the first occurence of the letter in the string
  // assign it to a variable called firstOccurence

  // return the value from finding the index of the first occurence of the letter in the string whilst passing in the variable firstOccurence + 1 as the argument for the position parameter in the method

  let firstOccurence = str.indexOf(letter)

  return str.indexOf(letter, firstOccurence + 1)

}

console.log(secondSymbol('Gotta catch em all, Pokemon!', 'e'))


// parameters: str, letter    // a string and a letter
// return: index of the second occurence of letter in the string    // i.e. an integer
// e.g. secondSymbol('Gotta catch em all, Pokemon!', 'e')
// results in 23

