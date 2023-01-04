# js_day1

<!-- consignes  -->

myName
3*myName.js
créer une variable name, lui attribuer la valeure “Robert”, renvoyer cette variable avec return
myGetNbr
4_myGetNbr.js
renvoi “+”si le nombre entré est positif
renvoi “-” si le nombre entré est négatif
renvoi “0” si le nombre est nul
MyAge
5_myAge.js
Renvoi “Majeur” si le paramètre d’entré est 18 ou +
Renvoi “Mineur” si inférieur
myEvilAge
6_myEvilAge.js
Même concept que myAge, sauf que l’argument d’entré est un nombre sous la forme d’une chaine de caractère (string)
myAdd
7_myAdd.js
créer une fonction qui renvoi l’addition des 2 paramètres entrés
myEvilGetNbr
8_myEvilGetNbr.js
renvoi + si le nombre entré est positif
renvoi - si le nombre entré est négatif
attention la valeure entrée est une chaine de caractère
myAbs
9_myAbs.js
exercices var/functions/contrôle 2
Renvoi le nombre en absolu
myAbs(3) → 3
myAbs(-5) → 5
myEvilStr
10_myEvilStr.js
créer une fonction qui renvoi la chaine de caractère inversé (ex: “ab” → “ba”)
myStrCat
11_myStrCat.js
additionne les 2 chaine de caractère donné en paramètre.
myPow
12_myPow
prend 2 paramètre, effectue la puissance de l’arg 1 sur arg 2
ex: myPow(5, 2) = 5² = 25
myEvilPow
13_myEvilPow.js
une fonction similaire a myPow, mais une fonction récursive doit être utilisée
myStrnCpy
14_myStrnCpy.js
renvoi les n premiers caractères de la chaine envoyé en paramètre
ex: mystrnCpy(”hello world”, 5) = “hello”
firTree
firTree.js
La taille est passé en paramètre
level 1:
-- *
-- \_ _
-- _ \* _
-- _ \* \* _
-- _
-- \* _
-- _ \* \*
firTree(3);
exercices

<!-- consignes  tableaux-->

myCountItems
15_myCountItems.js
console.log(myCountItems([1, 2, 3])); // 3
compte le nombre de case de mon tableau, renvoi le résultat.
myPushItem
16_myPushItem.js
console.log(myPushItem([0, 1, 2], 3));// [0, 1, 2, 3]
Ajoute une case au tableau renvoi le tableau modifié, la case ajoutée prend la valeur du 2e paramètre.
myStrToWordArray
17_myStrToWordArray.js
console.log(myStrToWordArray("hello world")); // [”hello”, “world”]
découpe une phrase rentré en paramètre en un tableau de plusieurs chaines
mySortWordArray
18_mySortWordArray.js
console.log(mySortWordArray("b c a")); // ["a", "b", "c"]
Même principe que l’exercice précédent, mais en effectuant un tri alphabétique sur les cases
indice: .sort()
myRemoveTail
19_myRemoveTail.js
console.log(myRemoveTail([0, 1])); // [0]
retourne le tableau passé en paramètre, après avoir supprimé sa dernière case.
renvoi un tableau vide si l’opération est impossible
myRemoveN
20_myRemoveN.js
console.log(myRemoveN(["hello", "world"], 0)); // ["world"]
console.log(myRemoveN(["hello", "world"], 1)); // ["hello"]
Renvoi le tableau passé en paramètre, après avoir enlevé la case N.
renvoi le paramètre d’entré a l’identique lorsque l’opération est impossible
exercices tableau 2
myAgeFilter
21_myAgeFilter.js
console.log(myAgeFilter([3, 12, 24, 16, 19])); // [24, 19]
Renvoi le tableau avec uniquement les cases qui ont un âge supérieur ou égal a 18.
mySum
22_mySum.js
console.log(mySum([1, 2, 3])); // 6
additionne tous les nombre du tableau, renvoi sa somme totale.
level 1: utiliser les boucles
level 2: utiliser .map()
level 3: utiliser .reduce()
myRemoveDuplicate
23_myRemoveDuplicate.js
console.log(myRemoveDuplicate([1, 2, 2, 3])); // [1, 2, 3]
Si 2 éléments sont similaires dans un tableau, supprimer l’élément (ou les éléments) en doublon puis retourner ce tableau
myContat
24_myConcat.js
console.log(myConcat([1, 2], [3, 4])); // [1, 2, 3, 4]
fusionne les 2 tableaux passés en paramètre et le retourne
exercice optionnel:
Créer une todolist interactive dans le terminal en node.js
Votre logiciel devra:
stocker vos taches a effectuer dans un tableau
stocker vos taches en cours (dans un autre tableau)
stocker vos taches finies
Et devra permettre les actions suivantes:
Ajouter une tache (au tableau “a faire”)
pouvoir déplacer les taches d’un tableau a l’autre
pouvoir supprimer une tache
afficher un récapitulatif des tâches situés dans chaque tableau
afficher une aide des commandes disponible ainsi qu’une explication
exercices tableau 3
le logiciel se composera d’une boucle infinie qui attendra une entrée utilisateur avant d’effectuer l’action demandé (voir
prompt( ) )
Le nom des commandes disponibles ainsi que les paramètres sont définir.
Astuce: Vous ne pourrez quitter cet état qu’avec le raccourcis clavier ctrl+C
Vous pouvez faire évoluer votre todolist avec les fonctionnalités de votre choix:
json-server (communication via API Rest)
filesystem (une sauvegarde dans un fichier)
ajouter une interface graphique en terminal (tel que node-ncurses ou node-ui) pour améliorer l’affichage
