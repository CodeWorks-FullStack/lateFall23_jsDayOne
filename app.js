console.log('hello world')



// NOTE javascript is a dynamic, weak typed language so we can do crazy things with it like adding numbers and strings and define variables with keywords such as let, var, and const

// let variable = 190000
// number variable = 190000

// ANCHOR primitive data types
// NOTE primitive data types are immutiable meaning their assigned value never changes. Any operation that appears to alter a primitive value actually creates a NEW value w/o manipulating the source
// #region 

// Numbers in javascript hava a lot of flexibility and can be postive, negative, decimal values etc. These are a primitive data type
let turkeysGobbled = 8
let tofurkeysGobbled = 0
let number1 = 6
let number2 = -6
let decimalNumber = 6.3333333

// Strings... another example of a primitive type. 
let string1 = 'string text'
let string2 = 'Sam is super cool and funny'

// strings can be added together
string1 + string2

// strings can be operated on with methods such as slice
string1.slice(0,)

// Booleans
let boolean = true
let otherBoolean = false

// truthy/falsy...works like a bool without explicitly having a 'true' or 'false' value

let falseNumber = 0 // a number with a value of 0 will read as 'false' or what we call falsy
let trueNumber = -3 // a number with any other value is condsidered true

let falseString = '' //nothing inside the string so reads as falsy
let trueString = '😎'

let veryFalse = undefined // tried to access, but has no value assigned
let anotherTypeOfFalse = null // tried to access, but deliberately has no value
// NOTE null will always read as falsy... we use this to 'mimick' bools in use cases where we want true/false logic with other data types

let emptyArr = [] // this is truthy
let emptyObj = {} // this is truthy
// NOTE when attempting to use 'truthy/falsy' logic on empty arrays or objects, we must attempt to access either indexes or properties


// No values
let noValue // this will return as undefined because no value has been assigned
let unknownValue = undefined // we will never assign undefined...think "there is no value and I don't know why"
let knownNothingValue = null // I know there is no value... deliberate


// #endregion


// ANCHOR reference data types
// NOTE reference data types are mutable and their value DOES change. Are stored by reference and when operated upon, modifies the original source.
// #region


//SECTION arrays
let arr1 = ['Snowman', 'Snowflake', 'IceSkating']
let arr2 = [0, 4, -32]
let mixedArr = ['candy cane', 43, { name: 'Sam' }]

arr2.push(5) // add '5' to the end of the array and will change the orig. arr2 value to include the additional index

// SECTION objects

let obj = {
    dog: 'Fido',
    cat: 'Bean',
    fish: 'Carl'
}

obj.bear = "Larry" //  will add an additional key:value pair

// SECTION functions

// think of functions as sets of instructions to store and run later
function sayHello() {
    console.log('hello')
}

// NOTE arguments are always passed by value and parameters are accessed by reference within the scope of a function

// function addNumbers(x, y) {
//     // debugger
//     console.log(x, y)
//     console.log(y, x)
//     return x + y // return 'spits back' a value
// }

function addNumbers(banana, y) {
    debugger
    console.log(banana, y)
    console.log(y, banana)
    return banana + y // return 'spits back' a value
}

// banana // this will throw an error bc banana does NOT exist outside of the scope of our function


// #endregion



// SECTION application code


function clickButton() {
    console.log('button clicked')
}

let secretCode = '❄️🕎⛸️❄️'
let userInput = ''

function clickSnowflake() {
    console.log('snowflake')
    console.log(userInput, 'before adding emoji')
    // userInput  +  '❄️' 
    // NOTE ^^ this does not work because userInput is a primitive type (string) so we can add to it, but its value will not change; any added emojis will not persist
    userInput += '❄️'
    // userInput = userInput +  '❄️'  this line will do the same as above ^^
    console.log(userInput, 'after adding emoji')

    // document.getElementById('userInput').innerText = userInput
    updateDOM()
}

function clickMenorah() {
    console.log('menorah')
    let emoji = '🕎' // this is called aliasing a variable
    userInput += emoji
    console.log(userInput)

    // document.getElementById('userInput').innerText = userInput
    updateDOM()
}

function clickEmoji(emoji) {
    // check which emoji we clicked on ✅
    // after we know the emoji, add it to the userInput
    // update DOM 
    console.log('clicking emoji', emoji)
    userInput += emoji
    console.log(userInput, 'updated input')
    updateDOM()
}

function updateDOM() {
    document.getElementById('userInput').innerText = userInput
}

function clearInput() {
    // take the userinput and reset it
    // assign the value back to its default
    // update the DOM
    console.log('CLEAR')
    console.log(userInput)

    userInput = ''
    console.log(userInput, 'cleared input')
    updateDOM()
}

function checkInput() {
    // check if userInput matches secret code
    // if matches, alert the user
    // if it doesn't match, alert and maybe close the window??
    debugger
    console.log('checking input')

    if (userInput == secretCode) {
        // console.log('they are the same!')
        window.alert("You got the secret code!")

        // NOTE innerText changes text inside of a pre-existing element
        document.getElementById('victoryHeader').innerText = 'YOU ROCK'

        // NOTE innerHTML injects entire elements into the HTML
        document.getElementById('victoryImg').innerHTML = '<img class="img-fluid" src="https://akns-images.eonline.com/eol_images/Entire_Site/2014616/rs_600x600-140716105230-600-the-rock-fanny-pack.ls.71614.jpg?fit=around%7C1200:1200&output-quality=90&crop=1200:1200;center,top" alt="the rock">'

    } else {
        window.alert("You got it wrong stinky HAHA")
    }

    clearInput()

    // NOTE this is the big brain way
    // NOTE instead of using an else statement, we may use a return to end the function after checking our condition
    // NOTE this can be faster in cases where you want to immediately end a function if the condition is false

    // if (userInput == secretCode) {
    //     // console.log('they are the same!')
    //     window.alert("You got the secret code!")
    //     return 
    // }
    // window.alert("You got it wrong stinky HAHA")
}

