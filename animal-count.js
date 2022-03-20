/* 
Suppose you are going through a jungle. Now there are many animals around you. You want to count these. But the number of creatures is growing as deep as you want. The first 10 miles have 50 animals per mile The next 10 miles have 100 animals per mile. And then there are 200 animals per mile as you go. Now how to calculate these is shown inside animalCount.
*/

function animalCount(miles)
{
    const firstTenMilesAnimDens = 50;
    const secondTenMilesAnimDens = 100;
    const restMilesAnimDens = 200;
    if (miles <= 10)
    {
        const totalAnimal = miles * firstTenMilesAnimDens;
        return totalAnimal;
    } else if (miles <= 20)
    {
        const firstTenMilesAnim = firstTenMilesAnimDens * 10;
        const restMiles = miles - 10;
        const secondTenMilesAnim = restMiles * secondTenMilesAnimDens;
        const totalAnimal = firstTenMilesAnim + secondTenMilesAnim;
        return totalAnimal;
    } else
    {
        const firstTenMilesAnim = firstTenMilesAnimDens * 10;
        const secondTenMilesAnim = secondTenMilesAnimDens * 10;
        const restMiles = miles - 20;
        const restMilesAnim = restMiles * restMilesAnimDens;
        const totalAnimal = firstTenMilesAnim + secondTenMilesAnim + restMilesAnim;
        return totalAnimal;
    }
}

const viewAnimal = animalCount(25);
console.log(viewAnimal);