const laptops = [
    { name: "Asus ZenBook Flip 13", processor: "Intel Core i7 8th Gen", ram: "8 GB", price: 85999 },
    { name: "Asus ZenBook Flip 14", processor: "AMD Ryzen 5 3rd Gen", ram: "16 GB", price: 64850 },
    { name: "Asus ROG Strix Scar III", processor: "Intel Core i7 9th Gen", ram: "32 GB", price: 114990 },
    { name: "Asus ROG Strix G", processor: "Intel Core i5 9th Gen", ram: "16 GB", price: 75890 },
    { name: "HP EliteBook X360", processor: "Intel Core i5 8th Gen", ram: "32 GB", price: 148999 },
    { name: "Asus ZenBook 14", processor: "Ryzen 5 3rd Gen", ram: "8 GB", price: 59990 }
];

let cheapest = laptops[0];
for (const laptop of laptops)
{
    if (laptop.price < cheapest.price)
    {
        cheapest = laptop;
    }
}

console.log(cheapest);

function findCheapest(arrOfObject)
{
    let cheapest = arrOfObject[0];
    for (const element of arrOfObject)
    {
        if (element.price < cheapest.price)
        {
            cheapest = element;
        }
    }
    return cheapest;
}


const findCheapestLaptop = findCheapest(laptops);
console.log(findCheapestLaptop); 