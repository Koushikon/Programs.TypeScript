// With TypeScript we can specify the type of the variable at the time of declaration

// declares a string type variable called personName.
let personName: string

// declares a number type variable called amount.
let amount: number

// declares a bigint type variable called lotsAmount.
let lotsAmount : bigint

// declares a boolean type variable called isAvailable.
let isAvailable: Boolean

// declares a null type variable called noData.
let noData: null

// declares an array of numbers called digits.
let digits: number[]

// declares an object of type any called obj
let obj: any = {
    x: 15.6,
    y: 159
}

// Shows warnings of variable used before being assigned.
console.log('Before Assign:')
console.log(personName)
console.log(amount)
console.log(lotsAmount)
console.log(isAvailable)
console.log(noData)
console.log(digits);

personName = "Shalby"
amount = 159.5
lotsAmount = 1547884545455545454n   // with n at the last for bigint
isAvailable = true
digits = [7, 7.6, 5, 9, 2.0]


console.log('\nAfter Assign:')
console.log(personName)
console.log(amount)
console.log(lotsAmount)
console.log(isAvailable)
console.log(obj)
console.log(digits);


// Declaring and Assign variables at the same time

let personName2: string = ''
let amount2: number = 0
let lotsAmount2 : bigint = 0n
let isAvailable2: Boolean = false
let digits2: number[] = []

console.log('\nAfter Declaring and Assign:')
console.log(personName2)
console.log(amount2)
console.log(lotsAmount2)
console.log(isAvailable2)
console.log(digits2);