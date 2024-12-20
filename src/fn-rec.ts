/*
Exercice - Fonction récursive
Objectif :
  - vous avez une liste [1,2,3,4,5]
  - vous parcourez la liste et vous additionnez chaque item en employant une fonction appelée de façon récursive, vous calculez la somme des nombres dans la liste
  - boucles interdites
*/

const array = [1, 2, 3, 4, 5];

const myFunc = (arr: number[], index: number = 0): number => {
  if (index >= arr.length) return 0;

  return arr[index] + myFunc(arr, index + 1);
};

const sum = myFunc(array);
console.log(sum);
