/*
 * There are a few escape characters that are important to address.
 *
 * \"   Double Quote
 * \'   Single Quote
 * \\   Backslash
 * \n   New Line
 * \r   Return : usually used for RegEx arguments for carriage return position
 * \t   Tab
 * \b   Word Boundary : usually used for RegEx arguments
 * \f   Form Feed   : usually used for RegEx arguments
 */
let doubleQuote = 'This is a string with "Double Quotes"';
let singleQuote = "This is a string with 'Single Quotes'";
let backSlash = "This is a string with a \\backslash";
let newLine = "This is a string with a \nNew Line";
let newTab = "This is a string with a \tTab";

console.log(doubleQuote);
console.log(singleQuote);
console.log(backSlash);
console.log(newLine);
console.log(newTab);
