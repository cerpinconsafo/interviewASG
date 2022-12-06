//Patrick Skolsky ASG technical assignment

// Implement tabs component
// By clicking on one of the buttons you should render corresponding Component. Other components should be hidden.
const Apples = () => <div>Apples</div>;
const Bananas = () => <div>Bananas</div>;
const Grapes = () => <div>Grapes</div>;
const FruitTabs = () => {
return (
<div>
<button>Apples</button>
<button>Bananas</button>
<button>Grapes</button>
<Apples />
<Bananas />
<Grapes />
</div>
);
};

//github repo
    //  https://github.com/cerpinconsafo/tab-component-sample
//live site
    //  https://cerpinconsafo.github.io/tab-component-sample/



/********************************************************************************************************** */
/********************************************************************************************************** */
/********************************************************************************************************** */

// Transform array of arrays into array of objects

// [{ currency: [sell, buy] }] -> [{ usd: [100, 1500] }]
// If sell/buy of currency is repeating you should add them to the result of corresponding value
// For example:
// Input: [
// ["usd", "sell", 1000],
// ["usd", "sell", 1500],
// ]
// Output: [{ usd: [2500, 0] }] 
const array = [
    ["usd", "sell", 1500],
    ["uah", "buy", 1000],
    ["usd", "sell", 500],
    ["aed", "buy", 300],
    ["usd", "buy", 500],
    ["uah", "buy", 3500],
    ["aed", "sell", 51],
];

// i made this sampleArr to plug in some new currencies and values to make sure the function was able to take more random data
// const sampleArr = [
//     ["usd", "sell", 3500],
//     ["uah", "buy", 600],
//     ["rub", "sell", 3500],
//     ["usd", "sell", 525],
//     ["aed", "buy", 315],
//     ["usd", "buy", 25],
//     ["uah", "buy", 3500],
//     ["aed", "sell", 29],
//     ["eur", "sell", 1250],
//     ["rub", "sell", 66],
//     ["eur", "sell", 25],
//     ["rub", "buy", 500],
//     ["eur", "buy", 22],
// ];

//format of given array is [[currency, order, value],...]

let arrayOfCurrencies = (array) => {
    
    let newObj = {}

    array.forEach(e => {
        if (e[0] in newObj) {
            e[1] === 'sell' ? newObj[e[0]][0] += e[2] : newObj[e[0]][1] += e[2]
        } else {
            e[1] === 'sell' ? newObj[e[0]] = [e[2], 0] : newObj[e[0]] = [0, e[2]]
        }
    })

    let arrOfObjects = []

    Object.keys(newObj).forEach(e => arrOfObjects.push({ [e]: [newObj[e][0], newObj[e][1]] }))

    return arrOfObjects
}

console.log(arrayOfCurrencies(array))