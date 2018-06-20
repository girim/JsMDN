/* new Number(value) */

/* properties */
console.log("EPSILON ->", Number.EPSILON);
console.log("MAX_SAFE_INTEGER ->", Number.MAX_SAFE_INTEGER);
console.log("MIN_SAFE_INTEGER ->", Number.MIN_SAFE_INTEGER)
console.log("MAX_VALUE: ", Number.MAX_VALUE);
console.log("MIN_VALUE: ", Number.MIN_VALUE);
console.log("NAN -> ", Number.NaN);
console.log("NEGATIVE_INFINITY ->", Number.NEGATIVE_INFINITY);
console.log("POSITIVE_INFINITY ->", Number.POSITIVE_INFINITY);

var num  = new Number(4);
console.log(Number.isNaN(num));
console.log(num);
console.log(num.valueOf());

/* converting numeric string to number */
console.log("converting '123' ->", Number('123'));
console.log("converting '12.3' ->", Number('12.3'));
console.log("converting '123e-1' ->", Number('123e-1'));
console.log("converting ' ' ->", Number(' '));
console.log("converting '' ->", Number(''));
console.log("converting '0x11' ->", Number('0x11'));
console.log("converting '0b11' ->", Number('0b11'));
console.log("converting '0o11' ->", Number('0o11'));
console.log("converting 'foo' ->", Number('foo'));
console.log("converting '123foo' ->", Number('123foo'));

/* Examples isNan*/
console.log("NaN ->", Number.isNaN(NaN));
console.log("Number.NaN ->", Number.isNaN(Number.NaN));
console.log("(0 / 0) ->", Number.isNaN(0/0));

console.log("'NaN' -> ", Number.isNaN('NaN')); //string NaN
console.log("undefined -> ", Number.isNaN('undefined'));
console.log("true -> ", Number.isNaN(true));
console.log("null -> ", Number.isNaN(null));
console.log("'37' -> ", Number.isNaN('37'));
console.log("'' -> ", Number.isNaN(''));
console.log("' ' -> ", Number.isNaN(' '));

/* Examples IsFinite */
console.log("Infinity -> ", Number.isFinite(Infinity));
console.log("-Infinity -> ", Number.isFinite(-Infinity));
console.log("NaN -> ", Number.isFinite(NaN));
console.log("null -> ", Number.isFinite(null));
console.log("0 -> ", Number.isFinite(0));
console.log("2e64 -> ", Number.isFinite(2e64));