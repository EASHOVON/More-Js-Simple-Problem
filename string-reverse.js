const myName = "Muhammad Ashrafuzzaman Suvon";

function reverseString(text)
{
    let reverse = "";
    for (const letter of text)
    {
        reverse = letter + reverse;
    }
    return reverse;
}

const reversed = reverseString(myName);
console.log(reversed);
