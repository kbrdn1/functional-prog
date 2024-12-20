# Exercices d'initiation à la Programmation Fonctionnelle

# Exercice 01

## Etape 01

- Créez les fonctions (pure et totale) :
  - __add__ permettant d'additionner 2 nombres.
  - __multiply__ permettant de multiplier 2 nombres.
  - __divide__ permettant de diviser 2 nombres.
  - __subtract__ permettant de soustraire 2 nombres.

- Définissez un type commun au 4 fonctions, nommé __BinaryMathOperation__.

## Etape 02

- Convertissez les fonctions de façon à ce qu'elles ne prennent qu'un seul paramètre (concept : conversion de fonction binaire en fonction unaire).
- Définissez un type __UnaryMathOperation__ commun à chacune de ces fonctions.

## Etape 03

- Composer une fonction __incrementOf10__ à partir de la fonction __add__ permettant d'incrémenter de 10 une valeur passée en paramètre (concept : application partielle).

Attention, la fonction __divide__ peut produire une levée d'exception si le second paramètre est 0. En programmation fonctionnelle, on considère qu'une levée d'exception est un effet de bord.
Gérez ce scénario en retournant une Erreur mais sans déclencher d'exception.

## Etape 04

- Composer une fonction ternaire __addThenMultiply__ recevant 3 paramètres (`x`, `y`, `z`) et employant les fonctions __add__ et __multiply__ permettant d'effectuer l'opération `(x+y)*z`
- Définissez un type __TernaryMathOperationFn__ correspondant à la signature de la fonction __addThenMultiply__.

## Etape 05

Programmez une fonction __calculator__ prenant en paramètre une fonction `f` de type __UnaryMathOperation__ et appliquant la fonction à partir des 2 paramètres fournis à la suite.

### Etape 05 (bonus)

Programmez une fonction __calculator__ prenant en paramètre une fonction de type __MathematicalOperation__ et appliquant la fonction à partir des 2 paramètres fournis à la suite.

## Etape 06

A l'aide de la fonction __composeNewMathOperation__ :

- Créez une fonction de type __UnaryMathOperationsAggregator__ nommée __modulo__ réalisant l'opération `x%y`
- A partir d'une application partielle de la fonction __modulo__ créez une fonction permettant de déterminer si une valeur `x` passée en paramètre est un nombre pair (even) ou impair (odd).

## Etape 07

A l'aide de la fonction __composeNewMathOperation__ :

- Programmez une fonction __square__ permettant de calculer le carré d'une valeur numérique `x` passée en paramètre.
- Programmez une fonction __cube__ permettant de calculer le cube d'une valeur numérique `x` passée en paramètre.

## Etape 08

Programmez les tests unitaires pour vérifier chaque fonction.

---
### Programmation Fonctionnelle
[@shrp777](https://github.com/shrp777) Alexandre Leroux (alex@shrp.dev) - 2024
