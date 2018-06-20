/* Nemuric literals can be expressed as,
    - Decimal (base 10) --> includes 0-9
    - Octal (base 8)    --> includes 0-7
    - Hexadecimal (base 16) --> includes 0-9, A-F, a-f
    - Binay (base 2)  -->  includes 0-1     */

var decimal = 1234567890;
var octal = 072;  //0o or 0O
var hexa = 0xAFBC; //0xafbc
var binary = 0B1010; //0b1010

console.log("Decimal:", decimal);
console.log("Octal: ",octal);
console.log("Hexa: ", hexa);
console.log("Binary: ", binary);

/* Floating point literals
    [(+|-)][digits][.digits][(E|e)[(+|-)]digits]
*/

var variant_1 = 1.234;
var variant_2 = 1.5E-10;
console.log(variant_2);
var variant_3 = -12.34;
var variant_4 = -1.4e+12
console.log(variant_4);

