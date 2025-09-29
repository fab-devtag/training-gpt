function createCounter() {
    let counter = 0;
    return function increment() {
        counter += 1;
        console.log(counter)
    }
}

const counter = createCounter();

/* counter()
counter()
counter()
 */

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Données reçues")
        }, 500)
    })
}

async function showData() {
    try {
        const res = await fetchData();
        console.log(res)
    }
    catch (error) {
        console.log(error.message)
    }
}

/* showData(); */

function removeDuplicate(arr) {
    const newArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (!newArray.includes(arr[i])) {
            newArray.push(arr[i])
        }
    }
    console.log(newArray)
    return newArray;

}

/* removeDuplicate([1, 2, 3, 2, 4, 1, 5]); */

function maxNumber(arr) {
    let maxElement = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxElement) {
            maxElement = arr[i]
        }
    }
    return maxElement;
}

/* console.log(maxNumber([3, 9, 1, 5, 2])) */


function reverseArray(arr) {
    const reversed = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i])
    }
    console.log(reversed)
    return reversed
}

/* reverseArray([1, 2, 3, 4]) */

function sumArray(arr) {
    return arr.reduce((accumulator, value) => accumulator + value, 0)
}

/* console.log(sumArray([1, 2, 3, 4])) */

function averageArray(arr) {
    return arr.reduce((accumulator, value) => accumulator + value, 0) / arr.length
}

/* console.log(averageArray([2, 4, 6, 8])) // doit retourner 5 */

function isPalindromeArray(arr) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) {
            return false;

        }
    }

    return true;
}



/* console.log(isPalindromeArray([1, 2, 3, 2, 1])) // true  
console.log(isPalindromeArray([1, 2, 3, 4])) // false */

function areArraysEqual(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false
    }
    return true;
}

/* console.log(areArraysEqual([1, 2, 3], [1, 2, 3])) // true
console.log(areArraysEqual([1, 2], [2, 1]))       // false
console.log(areArraysEqual([1, 2, 3], [1, 2]))    // false */

function countEvenNumbers(arr) {
    let nbEvenNumber = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) nbEvenNumber++
    }
    return nbEvenNumber
}

/* console.log(countEvenNumbers([1, 2, 3, 4, 5, 6]))// retourne 3
console.log(countEvenNumbers([7, 11, 15]))// retourne 0 */

function reverseString(str) {
    // Ton code ici
    let reversedString = '';
    for (let i = str.length - 1; i >= 0; i--) {

        reversedString += str[i]
    }

    return reversedString;
}

/* // Exemples attendus :
console.log(reverseString("hello"))    // "olleh"
console.log(reverseString("ReactJS"))     // "SJtcaeR"
console.log(reverseString("radar"))       // "radar" */
function countOccurrences(arr) {
    let counts = {};
    for (let i = 0; i < arr.length; i++) {
        if (counts[arr[i]]) {
            counts[arr[i]]++
        }
        else {
            counts[arr[i]] = 1
        }
    }

    return counts;
}
// Exemple :
/* console.log(countOccurrences(["apple", "banana", "apple", "orange", "banana", "apple"])) */
// Doit retourner : { apple: 3, banana: 2, orange: 1 }

/* console.log(countOccurrences([1, 2, 2, 3, 3, 3])) */
// Doit retourner : { 1: 1, 2: 2, 3: 3 }

function findDuplicatesV2(arr) {
    // Ton code ici
    const duplicates = [];
    const counts = {};

    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (counts[item]) {
            counts[item]++
        }
        else {
            counts[item] = 1
        }
    }

    for (let key in counts) {
        if (counts[key] > 1) {
            duplicates.push(key)
        }
    }

    return duplicates;
}

/* // Exemples :
console.log(findDuplicatesV2([2, "2", 3, 2, "3", "2", 3]))
// Résultat attendu : [2, "2", 3]

console.log(findDuplicatesV2(["a", "b", "c", "a", "d", "b", "b"]))
// Résultat attendu : ["a", "b"]            // [] */

function isAnagram(arg1, arg2) {
    const map = new Map();
    if (arg1.length === arg2.length) {
        for (let i = 0; i < arg1.length; i++) {
            if (map.get(arg1[i])) {
                const count = map.get(arg1[i]) + 1
                map.set(arg1[i], count)
            }
            else {
                map.set(arg1[i], 1)
            }
        }
    }
    for (let i = 0; i < arg2.length; i++) {
        const char = arg2[i];
        if (!map.has(char) || map.get(char) === 0) {
            return false;
        }
        map.set(char, map.get(char) - 1);
    }

    return true;
}
/* 
console.log(isAnagram('listen', 'silent'))      // true
console.log(isAnagram('Hello', 'olelh'))        // true
console.log(isAnagram('test', 'ttew'))          // false
console.log(isAnagram('123', '231'))           // true
console.log(isAnagram('aab', 'abb'))   */

function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
    const map = new Map();

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            if (map.get(str[i])) {
                let count = map.get(str[i]) + 1
                map.set(str[i], count)
            }
            else {
                map.set(str[i], 1)
            }
        }
    }

    let numberOfVowels = 0;
    for (const value of map.values()) {
        numberOfVowels += value
    }

    return numberOfVowels
}

/* console.log(countVowels("Hello World"));         // 3 → e, o, o
console.log(countVowels("JAVASCRIPT"))          // 3 → A, A, I
console.log(countVowels("bcdfgh"))         // 0
console.log(countVowels("Un jour y sera utile")) // 8 */


function capitalizeWords(str) {
    /* const newStr = str.charAt(0).toUpperCase() + str.slice(1, str.length).toLowerCase()
    return newStr.trim() */
    const words = str.split(' ');
    let newStr = '';

    for (let i = 0; i < words.length; i++) {
        newStr += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + ' ';
    }

    return newStr.trim();
}

/* console.log(capitalizeWords("bonjour tout le monde"));        // "Bonjour Tout Le Monde"
console.log(capitalizeWords("jAVAscript est GENIAL"));        // "Javascript Est Genial"
console.log(capitalizeWords("  hello    world   "));  */

function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            count++
        }
    }


    return count
}

/* console.log(countVowels("Hello World"));         // 3 → e, o, o
console.log(countVowels("JAVASCRIPT"))          // 3 → A, A, I
console.log(countVowels("bcdfgh"))         // 0
console.log(countVowels("Un jour y sera utile")) // 8 */


/* function hasSameLetters(str1, str2) {
    const str1WithoutDouble = new Set(str1)
    const str2WithoutDouble = new Set(str2)

    if (str1WithoutDouble.size !== str2WithoutDouble.size) return false;

    for (const letter of str1WithoutDouble) {
        if (!str2WithoutDouble.has(letter)) return false;
    }

    return true;
}

console.log(hasSameLetters("abc", "cab"));      // true
console.log(hasSameLetters("abc", "cba"));      // true
console.log(hasSameLetters("abc", "aabbcc"));   // true
console.log(hasSameLetters("abc", "abcd"));     // false
console.log(hasSameLetters("aabc", "abc"));     // true
console.log(hasSameLetters("abc", "def"));      // false */

function removeDuplicates(array) {
    let arrayWithoutDuplicates = [];

    for (const value of array) {
        if (!arrayWithoutDuplicates.includes(value)) {
            arrayWithoutDuplicates.push(value)
        }
    }
    return arrayWithoutDuplicates;
}

/* console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))  //[1, 2, 3, 4, 5]
console.log(removeDuplicates(['a', 'b', 'a', 'c', 'b'])) //['a', 'b', 'c'] */

function isPalindrome(str) {
    const cleanStr = str.toLowerCase().trim()
    for (let i = 0; i < cleanStr.length; i++) {
        if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

/* console.log(isPalindrome("kayak"))        // true
console.log(isPalindrome("hello"))        // false
console.log(isPalindrome("Aba"))          // true (insensible à la casse)
console.log(isPalindrome("  kayak  "))    // true (ignorer les espaces avant/après) */


function chunkArray(arr, size) {
    let chunckedArray = [];
    /* const originalArray = [...arr]
    for (let i = 0; i < originalArray.length; i++) {
        if (arr.length === 0) return chunckedArray
        if (originalArray.length < size) {
            chunckedArray.push(arr.slice(0))
        }
        else {
            chunckedArray.push(arr.slice(0, size));
            arr = arr.slice(size)
        }
    } */
    while (arr.length > 0) {
        chunckedArray.push(arr.slice(0, size))
        arr = arr.slice(size)
    }

    return chunckedArray

}
/* 
console.log(chunkArray([1, 2, 3, 4, 5], 2));
// => [[1, 2], [3, 4], [5]]

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));
// => [[1, 2, 3], [4, 5, 6], [7]] */

function flattenArray(arr) {
    let flattenedArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            for (const values of arr[i]) {
                flattenedArray.push(values)
            }
        }
        else {
            flattenedArray.push(arr[i])
        }
    }
    return flattenedArray;
}

/* console.log(flattenArray([1, [2, 3], [4, [5]]])) */
// Résultat attendu : [1, 2, 3, 4, [5]]

function reverseWords(str) {
    const words = str.trim().split(' ');
    let newStr = '';
    for (let i = words.length - 1; i >= 0; i--) {
        if (words[i] !== '') {
            newStr += words[i] + ' '
        }
    }

    return newStr.trim();
}

/* console.log(reverseWords("Bonjour tout le monde"))
console.log(reverseWords('  Ceci   est   un test ')); */

function countOccurences2(array, value) {
    let occurences = 0;
    for (const item of array) {
        if (item === value) occurences++;
    }

    return occurences
}

/* console.log(countOccurences2([1, 2, 3, 4, 2, 2], 2)); // 3
console.log(countOccurences2(['a', 'b', 'a', 'c'], 'a')); // 2
console.log(countOccurences2(['x', 'y', 'z'], 'a')); // 0 */

function sumNestedArray(array) {
    let sum = 0;
    for (const item of array) {
        if (Array.isArray(item)) {
            for (const subItem of item) {
                if (Array.isArray(subItem)) {
                    for (const subsubItem of subItem) {
                        sum += subsubItem
                    }
                }
                else {
                    sum += subItem
                }
            }
        }
        else {
            sum += item;
        }
    }

    return sum;
}

/* console.log(sumNestedArray([1, 2, [3, 4]])) // 10
console.log(sumNestedArray([[1, 2], [3, 4], 5])) // 15
console.log(sumNestedArray([1, [2, [3, 4]], 5])) // 15 (pas besoin de gérer + de 2 niveaux)
console.log(sumNestedArray([[], 1, [2, []]])) // 3 */

function findMax(array) {
    let maxNumber = array.length > 0 ? array[0] : null;

    for (const value of array) {
        if (value > maxNumber) maxNumber = value;
    }

    return maxNumber
}

/* console.log(findMax([1, 2, 3])) // 3
console.log(findMax([-10, -5, -20])) // -5
console.log(findMax([100])) // 100
console.log(findMax([])) // null */

function isSubset(array1, array2) {
    for (const element of array2) {
        if (!array1.includes(element)) return false
    }

    return true;
}

/* console.log(isSubset([1, 2, 3], [2, 1])) // true
console.log(isSubset([1, 2, 3], [4])) // false
console.log(isSubset([1, 2, 3], [])) // true
console.log(isSubset([], [1])) // false */

function isSubset(arr1, arr2) {
    for (let element of arr2) {
        if (!arr1.includes(element)) return false;
    }

    return true;
}

/* console.log(isSubset([1, 2, 3], [2, 1])) // true
console.log(isSubset([1, 2, 3], [4])) // false
console.log(isSubset([1, 2, 3], [])) // true
console.log(isSubset([], [1])) // false */

function fizzBuzz(length) {
    let array = [];

    for (let i = 1; i <= length; i++) {
        if (i % 3 === 0 && i % 5 === 0) array.push("FizzBuzz");
        else if (i % 3 === 0) array.push("Fizz");
        else if (i % 5 === 0) array.push("Buzz");
        else array.push(i);
    }

    return array;
}

/* console.log(fizzBuzz(5))
// [1, 2, "Fizz", 4, "Buzz"]

console.log(fizzBuzz(15))
// [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"] */

function getUniqueValues(arr) {
    const counts = {};
    const result = [];

    // Compter les occurrences
    for (const value of arr) {
        counts[value] = (counts[value] || 0) + 1;
    }

    // Garder uniquement les valeurs uniques
    for (const value of arr) {
        if (counts[value] === 1) {
            result.push(value);
        }
    }

    return result;
}


/* console.log(getUniqueValues([1, 2, 2, 3, 4, 4, 5])) */
// [1, 3, 5]


function findDuplicatesV3(arr) {
    let counts = {};
    let duplicates = [];

    for (let element of arr) {
        counts[element] = (counts[element] || 0) + 1

    }
    for (const [key, value] of Object.entries(counts)) {

        if (value > 1) {
            duplicates.push(key)
        }
    }

    return duplicates;
}


/* console.log(findDuplicatesV3([1, 2, 3, 2, 4, 1]));
// → [1, 2] (ou [2, 1], l'ordre n'importe pas)

console.log(findDuplicatesV3(["a", "b", "a", "c", "b", "d"]));
// → ["a", "b"]

console.log(findDuplicatesV3([5, 6, 7])); */
// → []  (pas de doublons)

function isAnagramV2(str1, str2) {



}


function testReduce() {
    const prices = [5, 10, 25];

    const sum = prices.reduce((acc, price) => acc + price, 0)
    return sum;
}

/* console.log(testReduce()) */
/* console.log(isAnagramV2("listen", "silent")); */   // true
/* isAnagramV2("hello", "bello");     // false
isAnagramV2("Debit Card", "Bad Credit"); // true
isAnagramV2("Astronomer", "Moon starer"); // true */

function fibonacciRecursive(n) {
    let array = [];

    for (let i = 0; i < n; i++) {
        if (array.length === 0) {
            array.push(0)
        }
        else {
            let previous = array[i - 2] ?? 1
            array.push(array[i - 1] + previous)
        }
    }

    return array[n - 1]
}

/* function fibonacciRecursive(n) {
  if (n <= 1) return n;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(7)) */

//0 1 1 2 3 5 8

function twoSum(arr, targetValue) {
    let number = 0;
    /* for (let i = number + 1; i < arr.length; i++) {
        if (arr[number] + arr[i] === targetValue) {
            return console.log(arr.indexOf(arr[number]), arr.indexOf(arr[i]))
        }
    } */

    let i = number + 1;
    while (i < arr.length) {
        if (arr[number] + arr[i] === targetValue) {
            return console.log(arr.indexOf(arr[number]), arr.indexOf(arr[i]))
        }
        else {
            if (i === arr.length - 1 && arr[number] + arr[i] !== targetValue) {
                number++
                i = number + 1
            }
            else {
                i++
            }
        }
    }
}

/* console.log(test1)
var test1 = 0

function1()

function function1() {
    console.log('dsofidoi')
}

twoSum([1, 3, 7], 10) */

function createScore() {
    let score = 0;
    return {
        increment() {
            score++
            return score;
        },
        getScore() {
            return score;
        }
    }

}

/* const player1 = createScore();
const player2 = createScore(); */
/* 
player1.increment();
player1.increment();
player2.increment(); */
/* 
console.log("Player 1:", player1.getScore()); // 2
console.log("Player 2:", player2.getScore()); // 1 */

//Filtrer et transformer

const numbers = [1, 2, 3, 4, 5, 6];

const doubleEvenNumbers = numbers.filter(number => number % 2 === 0).map(number => number * 2);

/* console.log(doubleEvenNumbers) */

//Somme et moyenne

const products = [
    { name: 'Laptop', price: 1200 },
    { name: 'Phone', price: 800 },
    { name: 'Shoes', price: 120 },
];

const totalPrice = products.reduce((total, product) => total + product.price, 0)
const averagePrice = Math.round(totalPrice / products.length);
/* 
console.log(totalPrice)
console.log(averagePrice) */

//Regroupement par catégorie

const items = [
    { name: 'Laptop', category: 'Tech' },
    { name: 'Phone', category: 'Tech' },
    { name: 'Shoes', category: 'Clothes' },
    { name: 'Shirt', category: 'Clothes' },
];

const group = new Map();

for (let item of items) {
    let categorie = group.get(item.category)
    if (!categorie) {
        group.set(item.category, [item.name])
    }
    else {
        group.set(item.category, [...categorie, item.name])
    }
}

/* console.log(group) */

//Suppression de doublons

const ids = [1, 2, 2, 3, 4, 4, 5]

const idsWithoutDouble = Array.from(new Set(ids));

/* console.log(idsWithoutDouble) */

//Tri multi-critères

const produits = [
    { name: 'A', price: 120, rating: 4 },
    { name: 'B', price: 120, rating: 5 },
    { name: 'C', price: 100, rating: 3 },
];

const sorted = [...produits].sort((a, b) => {
    if (a.price !== b.price) return a.price - b.price;
    return b.rating - a.rating;
});

/* console.log(sorted) */


//Tri multi ctitères 2

const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 30 },
    { name: 'David', age: 25 },
];

const sortPeople = [...people].sort((a, b) => {
    if (a.age !== b.age) return a.age - b.age
    return a.name.localeCompare(b.name)
})

/* console.log(sortPeople) */

const products3 = [
    { name: 'Laptop', category: 'Tech', price: 1200 },
    { name: 'Shoes', category: 'Clothes', price: 120 },
    { name: 'Phone', category: 'Tech', price: 800 },
    { name: 'Shirt', category: 'Clothes', price: 40 },
];

const sortProduct3 = [...products3].sort((a, b) => {
    if (a.category !== b.category) return a.category.localeCompare(b.category)
    return b.price - a.price
})

/* console.log(sortProduct3) */

const students = [
    { name: 'Alice', grade: 18 },
    { name: 'Bob', grade: 12 },
    { name: 'Charlie', grade: 18 },
    { name: 'David', grade: 15 },
];

const sortStudents = [...students].sort((a, b) => {
    if (a.grade !== b.grade) return b.grade - a.grade
    return a.name.localeCompare(b.name)
})
/* 
console.log(sortStudents) */


//Somme et moyenne

const nums = [10, 20, 30, 40, 50];

const sum = nums.reduce((total, num) => total + num, 0);
/* console.log(sum) */
const average = Math.round(sum / nums.length)
/* console.log(average) */


//Compter nombre d'occurences 

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const occurences = fruits.reduce((map, fruit) => {
    if (!map.has(fruit)) map.set(fruit, 1)
    else map.set(fruit, map.get(fruit) + 1)
    return map;
}, new Map())

/* console.log(occurences) */

//Grouper par catégorie 

const products4 = [
    { name: 'Laptop', category: 'Tech' },
    { name: 'Phone', category: 'Tech' },
    { name: 'Shoes', category: 'Clothes' },
    { name: 'Shirt', category: 'Clothes' },
];

const groupByCat = products4.reduce((map, product) => {
    if (!map.has(product.category)) map.set(product.category, [product.name])
    else map.set(product.category, [...map.get(product.category), product.name])
    return map;
}, new Map())

/* console.log(groupByCat) */

// Promesse simple

function delayHello() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Hello')
        }, 1000)
    })
}

/* delayHello().then(message => console.log(message)); */


//Pagination front-end

function paginateArray(array, pageNumber, pageSize) {

    const elements = array.slice((pageNumber - 1) * pageSize, pageSize * pageNumber)
    return elements
}

// Exemple d'utilisation
const pages = Array.from({ length: 50 }, (_, i) => i + 1);

/* console.log(paginateArray(pages, 1, 10)); // Page 1 → [1..10]
console.log(paginateArray(pages, 2, 10)); // Page 2 → [11..20]
console.log(paginateArray(pages, 5, 10)); // Page 5 → [41..50] */



//Checker si c'est un palindrome

function isPalindromeV2(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i].toLowerCase() !== str[str.length - 1 - i].toLowerCase()) return false
    }
    return true;
}

/* console.log(isPalindromeV2('radar'));
console.log(isPalindromeV2('salut')); */


//Checker si c'est un anagramme

function isAnagramV3(str1, str2) {
    let occurences1 = new Map()
    let occurences2 = new Map()

    if (str1.toLowerCase().length !== str2.toLowerCase().length) return false;

    const sortedStr1 = str1.split('').sort().join('')
    const sortedStr2 = str2.split('').sort().join('')

    return sortedStr1 === sortedStr2;
    //ICI CEST INUTILE DU COUP
    /*  for (let char of sortedStr1) {
         occurences1.set(char, (occurences1.get(char) || 0) + 1)
     }
 
     for (let char of sortedStr2) {
         occurences2.set(char, (occurences2.get(char) || 0) + 1)
     }
 
     for (let [key, value] of occurences1) {
         if (!occurences2.has(key)) return false
         if (occurences2.get(key) !== value) return false
     }
 
     return true; */
}

/* AUTRE METHODE

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let counts = new Map();

  for (let char of str1.toLowerCase()) {
    counts.set(char, (counts.get(char) || 0) + 1);
  }

  for (let char of str2.toLowerCase()) {
    if (!counts.has(char)) return false;
    counts.set(char, counts.get(char) - 1);
    if (counts.get(char) === 0) counts.delete(char);
  }

  return counts.size === 0;
}*/



/* console.log(isAnagramV3('salutu', 'tluasu'))
console.log(isAnagramV3('azerty', 'azsdedsfr'))
console.log(isAnagramV3('fabien', 'delphi'))
 */
function mergeSortedArrays(arr1, arr2) {
    let arrayLength = arr1.length + arr2.length
    let finalArray = [];

    let index1 = 0;
    let index2 = 0;
    for (let i = 0; i < arrayLength; i++) {
        if (arr1[index1] <= arr2[index2]) {
            finalArray.push(arr1[index1])
            index1++
        }
        else {
            finalArray.push(arr2[index2])
            index2++
        }
    }

    return finalArray
}

/* console.log(mergeSortedArrays([1, 2, 3, 6, 7], [1, 4, 5, 8, 9])) */

//CORRECTION MERGDES SORTED ARRAYS

function mergeSortedArraysV2(arr1, arr2) {
    let index1 = 0;
    let index2 = 0;
    let finalArray = [];

    while (index1 < arr1.length && index2 < arr2.length) {
        if (arr1[index1] <= arr2[index2]) {
            finalArray.push(arr1[index1]);
            index1++;
        } else {
            finalArray.push(arr2[index2]);
            index2++;
        }
    }

    // S'il reste des éléments dans arr1
    finalArray.push(...arr1.slice(index1));
    // ou dans arr2
    finalArray.push(...arr2.slice(index2));

    return finalArray;
}

console.log(mergeSortedArraysV2([1, 2, 3, 6, 7], [1, 4, 5, 8, 9]))