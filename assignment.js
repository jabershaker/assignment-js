function feetToMile(feet) {
    var mile = feet / 5280;
    return mile;

}
var mileCalculator = feetToMile(10000);
console.log(mileCalculator);

var mileCalculator1 = feetToMile(40000);
console.log(mileCalculator1);

var mileCalculator2 = feetToMile(75000);
console.log(mileCalculator2);
