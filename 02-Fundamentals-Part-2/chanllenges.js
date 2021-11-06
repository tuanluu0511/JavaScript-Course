/* 
CHALLENGE 1: 
const markWeights = 78;
const markHeights = 1.69;
const johnWeights = 92;
const johnHeights = 1.95;

const markBmi = markWeights / markHeights ** 2;
const johnBmi = johnWeights / (johnHeights johnHeights);
const markHigherBmi = markBmi > johnBmi;
console.log(markBmi, johnBmi, markHigherBmi);

// CHALLENGE 2:
const markWeights = 78;
const markHeights = 1.69;
const johnWeights = 92;
const johnHeights = 1.95;

const markBmi = markWeights / markHeights ** 2;
const johnBmi = johnWeights / (johnHeights * johnHeights);
if (markBmi > johnBmi) {
  console.log(`Mark's BMI(${markBmi}) is higher than John's(${johnBmi})!`);
} else {
  console.log(`Mark's BMI(${markBmi}) is lower than John's(${johnBmi})!`);
}
// CHALLENGE 3:
let dolphinspoints = 0,
  koalaspoints = 0;
const dolphinsScoreFristRound = 97;
const dolphinsScoreSecondRound = 112;
const dolphinsScoreThirdRound = 101;
const koalasScoreFristRound = 109;
const koalasScoreSecondRound = 95;
const koalasScoreThirdRound = 106;
if (
  dolphinsScoreFristRound > koalasScoreFristRound &&
  dolphinsScoreFristRound > 100
  ) {
    dolphinspoints++;
  } else if (
    koalasScoreFristRound > dolphinsScoreFristRound &&
    koalasScoreFristRound > 100
    ) {
      koalaspoints++;
    }
    
    if (
  dolphinsScoreSecondRound > koalasScoreSecondRound &&
  dolphinsScoreSecondRound > 100
) {
  dolphinspoints++;
} else if (
  koalasScoreSecondRound > dolphinsScoreSecondRound &&
  koalasScoreSecondRound > 100
  ) {
    koalaspoints++;
  }
  
  if (
    dolphinsScoreThirdRound > koalasScoreThirdRound &&
    dolphinsScoreThirdRound > 100
    ) {
      dolphinspoints++;
} else if (
  koalasScoreThirdRound > dolphinsScoreThirdRound &&
  koalasScoreThirdRound > 100
) {
  koalaspoints++;
}

if (dolphinspoints === koalaspoints) {
  console.log("draw");
} else if (dolphinspoints > koalaspoints) {
  console.log("dolphin win");
} else if (dolphinspoints < koalaspoints) {
  console.log("koalos win");
}


// CHALLENGE 4:
const bill = 275;
// let tip;
// bill > 50 && bill < 300 ? (tip = 0.15 * bill) : (tip = 0.2 * bill);
const tip = (bill <= 300) & (bill >= 50) ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
  );
  
  
  //JS FUNDAMENTALS 2
  // CHALENGE 1:
  
  const calcAverage = (a, b, c) => (a + b + c) / 3;
  let scoreDolphins = calcAverage(85, 54, 41);
  let scoreKoalas = calcAverage(23, 34, 27);
  console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins > 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas > 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log(`No team win...`);
  }
};
checkWinner(scoreDolphins, scoreKoalas);


//CHALLENGE 2:
//calc funtion:
const calcTip = function (bill) {
  // if (bill > 50 && bill < 300) {
    //   const tip = 0.15 * bill;
    //   return tip;
    // } else {
      //   const tip = 0.2 * bill;
      //   return tip;
      // }
      return bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
    };

    // console.log(calcTip(100));
    const bills = new Array(125, 555, 44);
    const tips = new Array(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));
    console.log(tips);
    const totals = new Array(
      bills[0] + tips[0],
      bills[1] + tips[1],
      bills[2] + tips[2]
      );
      console.log(totals);
      
      
// CHALLENGE 3:
      
const mark = {
  firstName: "Mark",
  lastName: "Miller",
  weights: 78,
  height: 1.69,
  calcBmi: function () {
    this.bmi = this.weights / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  firstName: "John",
  lastName: "Smith",
  weights: 92,
  height: 1.95,
  calcBmi: function () {
    this.bmi = this.weights / (this.height * this.height);
    return this.bmi;
  },
};

mark.calcBmi();
john.calcBmi();

console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(`John BMI ${john.bmi} is lower than Mark ${mark.bmi}`);
} else if (mark.bmi < john.bmi) {
  console.log(`John BMI ${john.bmi} is higher than Mark ${mark.bmi}`);
}


// CHALLENGE 4:
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
for (let i = 0; i < bills.length; i++) {
  tips[i] =
  bills[i] >= 50 && bills[i] <= 300 ? 0.15 * bills[i] : 0.2 * bills[i];
  totals[i] = tips[i] + bills[i];
}
console.log(totals);

//BONUS: Ang of a random array
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(bills));
console.log(calcAverage(tips));

*/
