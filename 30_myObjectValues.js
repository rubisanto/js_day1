function myObjectValues(obj) {
  // Retourner une chaîne de caractères contenant les valeurs des propriétés de l'objet qui ne sont pas des fonctions, des tableaux ou des objets
  return (
    // Récupérer les noms des propriétés de l'objet dans un tableau
    Object.keys(obj)
      // Filtrer le tableau en ne conservant que les propriétés du type souhaité
      .filter(
        (key) =>
          typeof obj[key] !== "function" &&
          !Array.isArray(obj[key]) &&
          typeof obj[key] !== "object"
      )
      // Transformer chaque élément du tableau en une chaîne de la forme "nom_de_la_propriété: valeur_de_la_propriété"
      .map((key) => `${key}: ${obj[key]}`)
      // Concaténer les chaînes de caractères en une seule séparée par des virgules et des espaces
      .join(", ")
  );
}

module.exports = myObjectValues;
