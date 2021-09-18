//exercise-1
//que4. and que5. of exercise of day2
let mydata = {
    name: "husain",
    country: "india",
    role: "student"
}
let string = "blah blah blah"
let EveryData = [
    husain = {
        name: "husain",
        country: "india",
        role: "student"
    },
    aman_sir = {
        name: "aman",
        country: "india",
        role: "student"
    },
    murtaza_sir = {
        name: "murtaza",
        country: "india",
        role: "teacher"
    },
    surbi_mam = {
        name: "surbi",
        country: "india",
        role: "student"
    },
    sakshi_mam = {
        name: "sakshi",
        country: "india",
        role: "student"
    },
    aayush_sir = {
        name: "ayush",
        country: "india",
        role: "student"
    }
]

//write a single line comment which says, comments can make code readable

//que1, que2.
//comments can make code readable
//welcome to javascript

//que2.
 /* comments can make code readable
easy to reuse and informative */

//create variable.js file and  declare variabls and assign string, boolean, undefined, null data types
let str = "this is a string"
let boolean = "false"//this is a boolean
let undefined_value = "" 
let null_value = null
typeof(str) //string
typeof(boolean) //boolean
typeof(null_value) //object
typeof(undefined) //undefined

//declare variable without assigning value
let unassigned1 = ""
let unassigned2 = ""
let unassigned3 = ""
let unassigned4 = ""

//declare variable with assigned values
let assigned1 = "this variable has value"
let assigned2 = 132
let assigned3 = true
let assigned4 ="this too has a value"

//declare 2 variables my age and your age and assign them initial value and print them to the console 
let myAge = 15
let yourAge = 25
console.log(myAge, yourAge)


//day2: exercise

//exercise level 1
//declare a variable named challenge ND GIVE INITIAL VALUE javascript
let challenge = "javascript"

//print the string on the browser console using console.log
console.log(challenge)
//print it's length
console.log(challenge.length)

//que4. and que5. done above

//usign console.log printout following statements
//'there is no better exercise better for the heart than reaching down and lifting people up' by john holmes teachesus to help one another
let quote = "'there is no better exercise better for the heart than reaching down and lifting people up' by john holmes teachesus to help one another"
console.log(quote)

//using consol.log() print following quote by mother teressa
//"love is not patronizing and charty isn't about pity, it is about true love. charity and love are the same -- with charoty you give love, so don't just give money but reach your hand instead"
let quote_by_motherTeressa = "love is not patronizing and charty isn't about pity, it is about true love. charity and love are the same -- with charoty you give love, so don't just give money but reach your hand instead"
console.log(quote_by_motherTeressa)
//check of typeof '10' is exactly equal to 10 if not make them equal
let num = '10'
num == 10 //true
num === 10 //false
//so, for making equal we have to make num which is currently string to int
let real_num = parseInt(num)
//now, by checking we get
num === 10 //true

//check if parseFloat('9.8') is equalto 10 ifnot then make it equal
let first_value = parseFloat('9.8')
//by checking both
first_value == 10 //false
//So, for making them equal 
let final_value = first_value + (10 - first_value)
//well, now by checking we get both equal
final_value === 10 //true

//generate a random number 0 to 100 inclusively
let aNuumber = Math.floor(Math.random() * 101)
console.log(aNuumber) // refresh the page to see different numbers

//generate a random number 50 to 100 inclusively
let bNumber = Math.floor(50 + Math.random() * 101)
console.log(bNumber) // refresh the page to see different numbers

//generate a random number between 0 to 255
let cNumber = Math.floor(Math.random() * 256)
console.log(cNumber)

//Access the 'javascript' string characters using a random number
let ranstr = 'javascript'
mainstr = ranstr[Math.floor(Math.random() * 10)]
console.log(mainstr) //refresh to see different alphabets of java script