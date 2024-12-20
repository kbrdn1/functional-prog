# functional-prog

## Table des matières

1. [Aperçu](#aperçu)
2. [Installation](#installation)
3. [Exécution du projet](#exécution-du-projet)
4. [Documentation](#documentation)
   - [Opérations arithmétiques et fonctions d'ordre supérieur](#opérations-arithmétiques-et-fonctions-dordre-supérieur)
     - [Opérations arithmétiques de base](#opérations-arithmétiques-de-base)
     - [Fonction calculatrice d'ordre supérieur](#fonction-calculatrice-dordre-supérieur)
     - [Réalisation de calculs](#réalisation-de-calculs)
     - [Suite de calculatrice](#suite-de-calculatrice)
     - [Composition de fonctions](#composition-de-fonctions)
     - [Super Calculatrice Array](#super-calculatrice-array)
   - [Fonction récursive](#fonction-récursive)
     - [Fonction de somme récursive](#fonction-de-somme-récursive)
5. [Exports](#exports)
6. [Tests](#tests)
7. [Conclusion](#conclusion)

## Aperçu

Ce projet démontre des concepts de programmation fonctionnelle en TypeScript. Il inclut des opérations arithmétiques de base, des fonctions d'ordre supérieur, la composition de fonctions et des fonctions récursives. Le projet a été créé en utilisant `bun init` dans bun v1.1.39. [Bun](https://bun.sh) est un runtime JavaScript rapide tout-en-un.

## Installation

Pour installer les dépendances :

```bash
bun install
```

## Exécution du projet

Pour exécuter le projet :

```bash
bun run index.ts
```

## Documentation

### Opérations arithmétiques et fonctions d'ordre supérieur

Le fichier `src/fn-calc.ts` définit des opérations arithmétiques de base et démontre l'utilisation de fonctions d'ordre supérieur pour créer une calculatrice pour chaque opération.

#### Opérations arithmétiques de base

```ts
type Operation = (a: number) => (b: number) => number;

const add: Operation = (a) => (b) => a + b;
const multiply: Operation = (a) => (b) => a * b;
const divide: Operation = (a) => (b) => a / b;
const subtract: Operation = (a) => (b) => a - b;
```

#### Fonction calculatrice d'ordre supérieur

```ts
const calculator = (operation: Operation) => (a: number) => (b: number) => operation(a)(b);

const addOperation = calculator(add);
const subtractOperation = calculator(subtract);
const multiplyOperation = calculator(multiply);
const divideOperation = calculator(divide);
```

#### Réalisation de calculs

```ts
const addResult = addOperation(10)(5);
const subtractResult = subtractOperation(10)(5);
const multiplyResult = multiplyOperation(10)(5);
const divideResult = divideOperation(10)(5);
```

#### Suite de calculatrice

Une fonction pour réaliser toutes les opérations et retourner les résultats dans un objet :

```ts
const calculatorSuite = (a: number, b: number) => ({
  add: add(a)(b),
  divide: divide(a)(b),
  multiply: multiply(a)(b),
  subtract: subtract(a)(b),
});

const calc = calculatorSuite(10, 5);
console.log(calc.add); // Affiche le résultat de l'addition
```

#### Composition de fonctions

Composer plusieurs fonctions pour créer une nouvelle fonction :

```ts
const compose =
  (...fns: Function[]) =>
  (x: any) =>
    fns.reduceRight((acc, fn) => fn(acc), x);

const toLowerCase = (x: string) => x.toLowerCase();
const toReplaceSpaceWithDash = (x: string) => x.replace(/\s+/g, "-");

const slugify = compose(toReplaceSpaceWithDash, toLowerCase);

console.log(slugify("Hello World")); // Affiche : hello-world
```

#### Super Calculatrice Array

Appliquer toutes les opérations à deux nombres et retourner les résultats dans un tableau :

```ts
const operations = [add, subtract, multiply, divide];

const superCalculatorArray = (operation: Operation[]) => (x: number) => (y: number) =>
  operation.map((op) => op(x)(y));

const superCalc = superCalculatorArray(operations);
console.log(superCalc(10)(5)); // Affiche : [15, 5, 50, 2]
```

### Fonction récursive

Le fichier `src/fn-rec.ts` démontre une fonction récursive pour additionner les éléments d'un tableau sans utiliser de boucles.

#### Fonction de somme récursive

```ts
const array = [1, 2, 3, 4, 5];

const myFunc = (arr: number[], index: number = 0): number => {
  if (index >= arr.length) return 0;

  return arr[index] + myFunc(arr, index + 1);
};

const sum = myFunc(array);
console.log(sum); // Affiche : 15
```

## Exports

Les fonctions et constantes suivantes sont exportées de `src/fn-calc.ts` :

```ts
export {
  add,
  calculator,
  calculatorSuite,
  divide,
  multiply,
  subtract,
  compose,
  slugify,
  toLowerCase,
  toReplaceSpaceWithDash,
};
```

## Tests

Le fichier `fn-calc.test.ts` contient les tests pour les différentes fonctions définies dans `src/fn-calc.ts`.

Pour exécuter les tests :

```bash
bun test
```
> See Result -> [〔HERE〕](https://app.warp.dev/block/DlavBsfsXwdCntH4g46KeO)

## Conclusion

Ce projet fournit un exemple pratique de programmation fonctionnelle en TypeScript, incluant des fonctions d'ordre supérieur, la composition de fonctions et la récursion. Il démontre comment construire des fonctions réutilisables et composables pour diverses opérations.