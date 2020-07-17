//feetToMile
function feetToMile(feet) {
    var mile = feet * 0.000189394;
    return mile;
}


//woodCalculator
function woodCalculator(chair, table, bed) {
    var chaircount = chair * 1;
    var tablecount = table * 3;
    var bedcount = bed * 5;
    var totalWood = chaircount + tablecount + bedcount;
    return totalWood;
}



//brickCalculator
function brickCalculator(floor) {
    if(floor <= 10){
      var brick = floor * 15000;
    
    }
    else if(floor <= 20){
      var brick = floor * 12000;
    }
    else{
      var brick = floor * 10000;
    }
      
     return brick;
  }
  

//tinyFriend
function tinyFriend(smallName) {
    var shortest = smallName[0];
    
    
    for(var i = 0; i < smallName.length; i++){
      if(shortest.length > smallName[i].length){
        shortest = smallName[i];
      }
    }
    return shortest;
  }
  

