const biraniCollector = ["Abul", "Kabul", "Cabul", "Dabul", "Channa", "Ranna", "Abul", "Kabul", "Dabul", "Rohim", "Sobuj", "Cabul", "Channa", "Romjan"];

function removeDuplicate(arr)
{
    const unique = [];
    for (const element of arr)
    {
        if (unique.indexOf(element) == -1)
        {
            unique.push(element)
        }
    }
    return unique;
}

// const biraniKewDoublePabina = removeDuplicate(biraniCollector);
// console.log(biraniKewDoublePabina);

const duplicateNumbers = [20, 30, 40, 50, 38, 20, 30, 56, 60, 30, 40];
const filterFromDuplicate = removeDuplicate(duplicateNumbers);
console.log(filterFromDuplicate);