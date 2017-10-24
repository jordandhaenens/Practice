let string = "Today is a fine day";


// word position is reversed
let reverseWords = (string) => 
{
    return string.split(" ").reverse().join(" ");
};

console.log(reverseWords(string));

// word position is maintained but character position in each word is reversed
let fullReverse = (string) =>
{
    let array = string.split(" ");
    let array1 = [];
    for (var i = 0; i < array.length; i++)
    {
        array1.push(array[i].split("").reverse().join(""));
    }
    let newSentence = array1.join(" ");
    return newSentence;
}
console.log(fullReverse(string));


let plainReverse = (string) => 
{
    return string.split("").reverse().join("");
}
console.log(plainReverse(string));


// FizzBuzz
let fizzBuzz = (int) => 
{
    if (int % 3 == 0 && int % 5 == 0)
    {
        return "Fizz Buzz";
    }
    else if (int % 3 == 0)
    {
        return "Fizz";
    }
    else if (int % 5 == 0)
    {
        return "Buzz";
    }
    else 
    {
        return int;
    }
}

console.log(fizzBuzz(1));
console.log(fizzBuzz(15));
console.log(fizzBuzz(5));
console.log(fizzBuzz(9));