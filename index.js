/*-----------------------------------
             problem 1
--------------------------------------*/

function mindGame(pNum) {
  let calculation = (pNum * 3 + 10) / 2 - 5;
    //console.log(calculation);
    return calculation;
}
const output = mindGame(50);
console.log(output);

/*---------------------------problem 1 description--------------------
If a positive number is input through this function, then multiplying that number by 3, then adding 10, then dividing by 2, then subtracting 5, will produce a value. That will be seen as output.
------------------------------------------------------------------*/


/*------------------------------------------
                problem 2
--------------------------------------------*/

function evenOdd(name) {
    const nameNumber = name.length;
    if (nameNumber % 2 === 0) {
        console.log('even');
    }
    else {
        console.log('odd');
    }
}
evenOdd('md mustakim');

/*---------------------problem 2 description----------------
If a string is input through this function, then the output will show how many characters are there in this string whether it is even or odd.
----------------------------------------------------------*/


/*----------------------------------------
              problem 3 
-------------------------------------------*/

function isLGSeven(sonkha) {
   
    const satBiyog = sonkha - 7;
    const digun = sonkha * 2;

    if (satBiyog < 7) {
       return satBiyog;
    }
    else if(satBiyog > 7) {

      return digun;
    }
    else{
        console.log('enter any number input')
    }
}
const LGSeven = isLGSeven(20);
console.log(LGSeven);

/*--------------------------problem 3 description-----------------------
If a number is input through this function, subtract 7 from the number and if the result is less than 7 then it will show the output, if it is bigger then double the input number will be shown. If not the number then the output will show 'enter any number input'.
--------------------------------------------------------------------*/


/*-------------------------------------------
              problem 4
---------------------------------------------*/

let ages = [12, 13,-21,45,25, 46, 34];

function findingBadData(allAges) {
    let badData = 0;
    for (let i = 0; i < ages.length; i++) {

        if(ages[i]<0){
            badData++;
        }
    }
   return badData;
}

const badDataNum = findingBadData(ages);
console.log(badDataNum);

/*----------------problem 4 description-----------------------
If an array is input through this function, if there are any negative numbers in the array then the output will show how many negative numbers there are, if not then it will show 0.
----------------------------------------------------*/


/*--------------------------------------------
                  problem 5 
---------------------------------------------*/

function gemsToDiamond(gemsNum1 , gemsNum2,gemsNum3){
const gemsPower1 = 21 ;
const gemsPower2 = 32 ;
const gemsPower3 = 43 ;

const gems1Diamond = gemsNum1*gemsPower1 ;
const gems2Diamond = gemsNum2*gemsPower2 ;
const gems3Diamond = gemsNum3*gemsPower3 ;

const totalDiamond = gems1Diamond + gems2Diamond + gems3Diamond ;
const Biyog = totalDiamond - 2000 ;
if( totalDiamond > 2000){
    return Biyog ;
}
else{
    return totalDiamond ;
}
}
const totalCalculation = gemsToDiamond(1,1,1);
console.log(totalCalculation);

/*-------------problem 5 description------------------------
3 inputs will be taken through this function.  21 will be multiplied with the first number, 32 with the second number, and 43 with the third number. Here if the input is gems and if the product is diamond.  Then first the total of all the gems will come out as total diamond . If it is more than double of 1000 then 2000 will be subtracted from the total diamond and the output will show.
---------------------------------------------------*/