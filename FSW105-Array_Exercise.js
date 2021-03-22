// Section A Requirements 

// Section A #1
function fiveAndGreaterOnly(arr) {
    const result = arr.filter(function(num) {
        if (num >= 5)
        return num;
    });
    return result;
}
console.log(fiveAndGreaterOnly([3, 6, 8, 2]));

// Section A #2
function evensOnly(arr) {
    const result = arr.filter(function(num) {
        if (num % 2 == 0)
        return num;
    });
    return result;
}
console.log(evensOnly([3, 6, 8, 2]));
/*
// Section A Extra Credit
function ofAge(arr) {
    const result = arr.filter(function(age) {
        if (age <= 17)
        return ofAge;
    });
    return result;
}
console.log(ofAge([
    {name: "Angelina Jolie", age: 80},
    {name: "Eric Jones", age: 2},
    {name: "Paris Hilton", age: 5},
    {name: "Kanye West", age: 16},
    {name: "Bob Ziroll", age: 100}
]));
*/
// Section B Requirements

// Section B #1
function doubleNumbers(arr) {
    const result = arr.map(function(num) {
        return num * 2;
    });
    return result;
}
console.log(doubleNumbers([2, 5, 100]));

// Section B #2
function stringItUp(arr) {
    const result = arr.map(function(num) {
        return num.toString(); 
    });
    return result;
}
console.log(stringItUp([2, 5, 100]));

// Section B #3
function capitalizeNames(arr) {
    const result = arr.map(function(name) {
        return name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();
    });
    return result;
}
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

// Section B Extra Credit #1 
function namesOnly(arr) {
    const result = arr.map(function(string) {
        return string.name;
    });
    return result.toString();
}
console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80,
    }, {
        name: " Eric Jones",
        age: 2,
    }, {
        name: " Paris Hilton",
        age: 5,
    }, {
        name: " Kanye West",
        age: 16,
    }, {
        name: " Bob Ziroll",
        age: 100,
    }
]));

// Section C Requirements 

// Section C #1
function total(arr) {
    const result = arr.reduce(function(num, finalAddition) {
        return finalAddition = finalAddition + num;
    });
    return result;
}
console.log(total([1, 2, 3]));
/*
// Section C #2
function stringConcat(arr) {
    const result = arr.reduce(function(num) {
        return num.toString();
    });
    return result;
}
console.log(stringConcat([1, 2, 3]));

// Section C #3
function totalVotes(arr) {
    const result = arr.map(function(vote) {
        return vote.match(true);
    });
    return result;
}
var voters = [
    {name: "Bob", age: 30, voted: true},
    {name: "Jake", age: 32, voted: true},
    {name: "Kate", age: 25, voted: false},
    {name: "Sam", age: 20, voted: false},
    {name: "Phil", age: 21, voted: true},
    {name: "Ed", age: 55, voted: true},
    {name: "Tami", age: 54, voted: true},
    {name: "Mary", age: 31, voted: false},
    {name: "Becky", age: 43, voted: false},
    {name: "Joey", age: 41, voted: true},
    {name: "Jeff", age: 30, voted: true},
    {name: "Zack", age: 19, voted: false},
];
console.log(totalVotes(voters));
*/
// Section C Extra Credit #2 
function flatten(arr) {
    const result = arr.reduce(function(array, boolean, number) {
        return array.concat(boolean, number);
    });
    return result;
}
var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];
console.log(flatten(arrays));

// Section D Requirements 

// Section D #1
function leastToGreatest(arr) {
    const result = arr.sort(function(num1, num2) {
        return num1 - num2;
    }); 
    return result;
}
console.log(leastToGreatest([1, 3, 5, 2, 90, 20]));

// Section D #2
function greatestToLeast(arr) {
    const result = arr.sort(function(num1, num2) {
        return num2 - num1;
    }); 
    return result;
}
console.log(greatestToLeast([1, 3, 5, 2, 90, 20]));

// Section D #3
function lengthSort(arr) {
    const result = arr.sort(function(word1, word2) {
        return word1.length - word2.length;
    });
    return result;
}
console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));

// Section D Extra Credit 
function alphabetical(arr) {
    const result = arr.sort(function(word1, word2) {
        return word1.localeCompare(word2);
    });
    return result;
}
console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"]));