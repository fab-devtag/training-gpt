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

console.log(flattenArray([1, [2, 3], [4, [5]]]))
// Résultat attendu : [1, 2, 3, 4, [5]]