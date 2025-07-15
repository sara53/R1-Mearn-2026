// var fname = "a"; // string
// var num1 = 10; //number -- int
// var num2 = 10.25; //float -- double
// var flag = true; // boolean

// console.log(typeof fname);
// console.log(typeof num1);
// console.log(typeof num2);
// console.log(typeof true);

// console.log("=============================");
// var fname = "ali";

// console.log(typeof fname);
// fname = 10;
// console.log(typeof fname);
// console.log("=============================");

// var fname = "alaa";

// var fname = 10;

// console.log(fname);

// undefined
// var fname;
// console.log(typeof fname);

// console.log("=================")
// // null !=0
// var student = null;
// student = "alaa";

// console.log(student);

// console.log(typeof student); //null

/**========================== */

// var fname = 10;

// console.log(fname);
// console.log(typeof fname); //number

// // coercion -- jsEngine convert automatic from data to anther datatype

// var fname = String(10); //

// console.log(fname);
// console.log(typeof fname); //string

/**========================== */
// var num1 = "20";

// console.log(typeof num1);

// var num2 = Number("mona");
// //NaN -- not a number -- not a valid number
// console.log(num2); //NaN
// console.log(typeof num2); //
/**================== Falsy Values
 *
 * == 0
 * == false
 * == undefined
 * == NaN
 * == null
 * == ""
 * ----------------(otherwise) truthy values---------------
 * =========Coercion (jsEngine)========= */

// var flag = Boolean(" ");

// console.log(flag);

var x = 10;

var y = "10";

console.log(x - y); // NaN
// var x = 10; //10
// var y = "mona"; //NaN

// console.log(x + y); //1010
// i in for loop
// var a = 3;

// var b = 4;

// console.log(a + b); //7

// var x = "ali"; // string
// var y = "ahmed"; // string

// console.log(x + " :  " + y);
/** operators
 * 1- arith (+.-.*,/)
 *
 * [+] : number + number = add
 *     : string + string = concat
 * ---------------------------------
 *  == number + string = concat
 *------------------------------------
    == number - number -- sub 
---------------------------------------

    [==]  ----- (values)
    [===] ----- (values && datatypes)
 */

// coercion == number -- boolean
// var x = "10"; //string -- after coercion - number 10
// var y = 10; // number

// console.log(x == y);

// var x = "true"; // Number NaN

// var y = true; // number 1

// console.log(y == x);
// logical operator
//

// and
/**  &&
 *
 *  == true && true == true
 *  == true && false == false
 *  == false && true == false
 *  == false && false == false
 * --------------------------
 *
 */

//Or ||
/**
 *
 *  == true || true == true
 *  == true || false == true
 *  == false || true == true
 *  == false || false == false
 * --------------------------
 *
 *
 */

// Not !
/**
 * = false = true
 * = true = false
 *
 */
// short ciricuit

// "mona" && "ali"
// true &&  === "ali"

// 0 && "alaa"
// false && == 0

//5 || undefined ==
//true || 6

// undefined || 0 == 0
