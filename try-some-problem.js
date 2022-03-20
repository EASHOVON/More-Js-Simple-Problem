// // Number One Solution
function anaToVori(ana)
{

    if (typeof (ana) !== "number")
    {
        return "please Enter a number";
    }

    else if (ana < 0)
    {
        return "Please Enter a Positive Number";
    } else
    {
        const vori = ana * 0.0625;
        return vori;
    }
}


// // Number Two Solution
function pandaCost(singaraQuantity, somuchaQuantity, jilapiQuantity)
{
    if (typeof (singaraQuantity) !== "number" || typeof (somuchaQuantity) !== "number" || typeof (jilapiQuantity) !== "number")
    {
        return "Please Enter Any Number"
    }
    if (singaraQuantity < 0 || somuchaQuantity < 0 || jilapiQuantity < 0)
    {
        return "Please Enter Positive Number"
    }
    const singaraOnePiecePrice = 7;
    const somuchaOnePiecePrice = 10;
    const jilapiOnePiecePrice = 15;
    const totalSingaraPrice = singaraQuantity * singaraOnePiecePrice;
    const totalSomuchaPrice = somuchaQuantity * somuchaOnePiecePrice;
    const totalJilapiPrice = jilapiQuantity * jilapiOnePiecePrice;
    const totalAmount = totalSingaraPrice + totalSomuchaPrice + totalJilapiPrice;
    return totalAmount;
}



// // Number Three solution
function picnicBudget(personNumber)
{
    if (typeof (personNumber) !== "number")
    {
        return "Please Enter a Number";
    }

    if (personNumber < 0)
    {
        return "Please Enter Positive Number";
    }
    const firstHundredPersAmouDens = 5000;
    const secondHundredPersAmouDens = 4000;
    const restPersAmouDens = 3000;
    if (personNumber <= 100)
    {
        const totalAmount = firstHundredPersAmouDens * personNumber;
        return totalAmount;
    } else if (personNumber <= 200)
    {
        const firstHundredPersAmou = 100 * firstHundredPersAmouDens;
        const restPersNumber = personNumber - 100;
        const secondHundredPersAmou = restPersNumber * secondHundredPersAmouDens;
        const totalAmount = firstHundredPersAmou + secondHundredPersAmou;
        return totalAmount;
    } else
    {
        const firstHundredPersAmou = 100 * firstHundredPersAmouDens;
        const secondHundredPersAmou = 100 * secondHundredPersAmouDens;
        const restPersNumber = personNumber - 200;
        const restPersonAmou = restPersNumber * restPersAmouDens;
        const totalAmount = firstHundredPersAmou + secondHundredPersAmou + restPersonAmou;
        return totalAmount;
    }
}

// // Number Four Solution
function findOddFriend(arr)
{
    const selected = [];
    for (const element of arr)
    {
        if (element.length % 2 !== 0)
        {
            selected.push(element);
            return selected;
        }
    }
}

console.log("Hello World");