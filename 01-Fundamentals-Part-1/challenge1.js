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
  
  */

//JS FUNDAMENTALS 2
// CHALENGE 1:

const calcAverage = (a, b, c) => (a + b + c) / 3;
const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);
console.log(avgKoalas);
console.log(avgDolphins);
function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins / 2 > avgKoalas)
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  else if (avgKoalas / 2 > avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  }
}
