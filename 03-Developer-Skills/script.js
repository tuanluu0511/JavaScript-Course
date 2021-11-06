// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// Problem calculate the temp amplitude, keep in my sometimes there might be a sensor error

/*
const temperature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcamplitudeTemp = function (t1, t2) {
  temps= t1.concat(t2)
  console.log(temps)

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

// Debugging with the console and breakpoints

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    
    // C) FIX
    value: Number(prompt("Degree celcius")),
  };
  
  // B) FIND
  console.table(measurement);
  
  const Kelvin = measurement.value + 273;
  return Kelvin;
};

// A) Identufy
console.log(measureKelvin());


// CODING CHALLENGE 1
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (data) {
  let fore = "";
  for (let i = 0; i < data.length; i++) {
    fore = fore + `${data[0]} C in ${i + 1} days ...`;
    // `${data[0]} C in ${1} days... ${data[1]} in ${i + 2} days ... ${
      //   data[2]
      // } in ${i + 3} days}`
    }
    fore = "..." + fore;
    console.log(fore);
  };
  
  printForecast(data2);
  
  */
