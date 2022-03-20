const text = "+8801515226983";
// const regex = /#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/gi;
const regex = /(\+88)?-?01[1-9]\d{8}/gi;

const matches = text.match(regex);

const index = text.search(regex);

const replaced = text.replace(regex, "phone");

const testing = regex.test(text);

console.log(matches, index, replaced, testing);