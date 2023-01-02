function myEvilStr(str) {
  let splitString = str.split("");

  // Utilisez la méthode reverse() pour inverser l'ordre des éléments dans le tableau
  let reverseArray = splitString.reverse();

  // Utilisez la méthode join() pour assembler le tableau en une chaîne de caractères
  let joinArray = reverseArray.join("");

  // Renvoyez la chaîne de caractères inversée
  return joinArray;
}

module.exports = myEvilStr;
