const getSleepHours = day=> {
    if (day === 'monday'){
      console.log(8);
    }if (day ==='tuesday'){
        rconsole.log(5);
    }if (day=== 'wednesday'){
      console.log(7);
    }if (day === 'thursday'){
      console.log (7);
    }if (day === 'friday'){
      console.log(7);
    }if (day=== 'saturday'){
            console.log(4);
    } if (day=== 'sunday'){
      console.log(6);
      }
        };
    //console.log(getSleepHours('monday')); //output: 8
    //console.log(getSleepHours('tuesday')); //output: 5
    //console.log(getSleepHours('wednesday')); //output: 7
    //console.log(getSleepHours('thursday')); //output: 7
    //console.log(getSleepHours('friday')); //output: 7
    //console.log(getSleepHours('saturday')); //output: 4
    //console.log(getSleepHours('sunday')); //output: 66

    const getActualSleepHours = () => 
  getSleepHours ('monday')
+ getSleepHours ('tuesday')
+ getSleepHours ('wednesday')
+ getSleepHours ('thursday')
+ getSleepHours ('friday')
+ getSleepHours ('saturday')
+ getSleepHours ('sunday');

const getIdealSleepHours= () => {
}
const idealHours = 8;
return idealHours * 7;
;
//console.log(getActualSleepHours()); output: should print the sum of all sleep hours in the week

//console.log(getIdealSleepHours()); if idealHours is 8, should print 56

const calculateSleepDebt= () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = () => {
getIdealSleepHours()   
  }
}
const idealSleepHours= 56;
if (actualSleepHours = idealSleepHours) {
console.log('perfect amount of sleep.');
} 
if ( actualSleepHours > idealSleepHours) {
console.log('more sleep than needed.')
} 
if (actualSleepHours < idealSleepHours) {
  console.log('get some more rest')
}





