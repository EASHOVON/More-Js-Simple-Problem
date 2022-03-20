const numOne = 100;
const numTwo = 80;
const numThree = 105;

if (numOne > numTwo && numOne > numThree)
{
    console.log("The Biggest number is: " + numOne);
} else if (numTwo > numOne && numTwo > numThree)
{
    console.log("The Biggest number is: " + numTwo);
} else
{
    console.log("The Biggest number is: " + numThree);
}