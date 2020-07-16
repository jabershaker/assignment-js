//feetToMile
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

//woodCalculator
function woodCalculator(chair, table, bed) {
    var chaircount = chair * 1;
    var tablecount = table * 3;
    var bedcount = bed * 5;
    var totalWood = chaircount + tablecount + bedcount;
    return totalWood;
}
var woodResult = woodCalculator(20, 12, 7);
console.log(woodResult);

//brickCalculator
function brickCalculator() {
    

}

