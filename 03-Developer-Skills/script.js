// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// Problem calculate the temp amplitude, keep in my sometimes there might be a sensor error

const temperature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcamplitudeTemp = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  // const amplitudeTemp = maxtemp - mintemp;
  // return amplitudeTemp;
  console.log(max, min);
  return max - min;
};

const amplitude = calcamplitudeTemp(temperature);
console.log(amplitude);
