'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
  <h3 class="country__name">${data.name}</h3>
  <h4 class="country__region">${data.region}</h4>
  <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
    1
  )}</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// Promisifying the Geo location API

// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.log(err)
// );

const positionPromise = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      resolve,
      reject
      // position => resolve(position),
      // err => reject(err)
    );
  });
};

// positionPromise().then(res => {
//   console.log(res);
//   // const lat = res.coords.latitude;
//   // console.log(lat);
// });

// Render country base on navigator's position
const whereAmI = function () {
  positionPromise()
    .then(res => {
      // console.log(res.coords);
      // const { latitude: lat,longitude: lng } = res.coords;

      return fetch(
        `https://opencage-geocoder.p.rapidapi.com/geocode/v1/json?q=${res.coords.latitude}%2C%20${res.coords.longitude}&key=35e1ba02dd6e4456bbdd02ec26edad9a&language=en`,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'opencage-geocoder.p.rapidapi.com',
            'x-rapidapi-key':
              '4c5958fe44mshea1bb3953d5688ap1dc0c1jsn32c1ff872b42',
          },
        }
      );
    })
    .then(response => {
      // console.log(response);
      if (!response.ok)
        throw new Error(`We ran into a problem! ${response.message}`);
      return response.json();
    })
    .then(data => {
      // console.log(data);

      if (!data.results[0].components.country)
        throw new Error(
          `Country not found! ${data.status.message} (${data.status.code})`
        );

      const place = data.results[0].components.city
        ? data.results[0].components.city
        : data.results[0].components.town;

      console.log(`You are in ${place}, ${data.results[0].components.country}`);
      // Take country from data and fetch it fr restcountry API
      const country = data.results[0].components.country;
      return fetch(`https://restcountries.com/v2/name/${country}`);
    })
    .then(res => res.json())
    .then(data => {
      renderCountry(data[0]);
      // console.log(data[0]);
    }) //Render country
    .catch(err => {
      console.error(err.message);
    });
};

whereAmI();

/*
// Build a simple promise
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log(`Lottery never draw!`);

  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You won!!!');
    } else {
      reject(new Error('You lost!!!'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

// Promisifying setTimeout

const wait = second => {
  return new Promise(resolve => {
    setTimeout(resolve, second * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('I have waited for 2 seconds');
    return wait(3);
  })
  .then(() => console.log('I have waited for 5 seconds'));

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.log(x));
// The event loop in practice:
console.log('Start code');
setTimeout(() => console.log('0 timer'), 0);
Promise.resolve('Promise 1').then(res => console.log(res));
Promise.resolve('Promise 2').then(res => {
  for (let i = 0; i < 1000; i++) console.log(res);
});
console.log('End code');

// CODING CHALLENGE 1:

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
  <h3 class="country__name">${data.name}</h3>
  <h4 class="country__region">${data.region}</h4>
  <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
    1
  )}</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const whereAmI = function (lat, lng) {
  fetch(
    `https://opencage-geocoder.p.rapidapi.com/geocode/v1/json?q=${lat}%2C%20${lng}&key=35e1ba02dd6e4456bbdd02ec26edad9a&language=en`,
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'opencage-geocoder.p.rapidapi.com',
        'x-rapidapi-key': '4c5958fe44mshea1bb3953d5688ap1dc0c1jsn32c1ff872b42',
      },
    }
  )
    .then(response => {
      console.log(response);
      if (!response.ok)
        throw new Error(`We ran into a problem! ${response.message}`);
      return response.json();
    })
    .then(data => {
      console.log(data);

      if (!data.results[0].components.country)
        throw new Error(
          `Country not found! ${data.status.message} (${data.status.code})`
        );

      console.log(
        `You are in ${data.results[0].components.city}, ${data.results[0].components.country}`
      );
      // Take country from data and fetch it fr restcountry API
      const country = data.results[0].components.country;
      return fetch(`https://restcountries.com/v2/name/${country}`);
    })
    .then(res => res.json())
    .then(data => renderCountry(data[0])) //Render country
    .catch(err => {
      console.error(err.message);
    });
};

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    // console.log(response.status);
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const getCountryData = function (country) {
  // Country 1
  getJSON(`https://restcountries.com/v2/name/${country}`, `Country not found!`)
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) throw new Error('No neighbour found!');

      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      renderError(`Something went wrong ** ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('china');
});

getCountryData('australia');

const getNeighbourCountry = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);

  request.send();
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country 1:
    renderCountry(data);

    // Get neighbour country(2):
    const [neighbour] = data.borders;

    if (!neighbour) return;
    // AJAX call country 2:
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);

    request2.send();
    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      // Render neighbour country(2):
      renderCountry(data2, 'neighbour');
    });
  });
};

getNeighbourCountry('usa');
*/

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       console.log(response);
//       if (!response.ok)
//         throw new Error(`Country not found! (${response.status})`);

//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found! (${response.status})`);

//       response.json();
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       renderError(`Something went wrong ** ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// getCountryData('dsadsad');
