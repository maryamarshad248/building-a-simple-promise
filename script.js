'use strict';

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// const renderCountry = function (data, className = '') {
//   const html = `
//   <article class="country ${className}">
//   <img class="country__img" src="${data.flag}"/>
//   <div class="country__data">
//     <h3 class="country__name">${data.name}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +data.population / 1000000
//     ).toFixed(1)}</p>
//     <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//     <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//   </div>
// </article>
//   `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   // countriesContainer.style.opacity = 1;
// };
// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   // countriesContainer.style.opacity = 1;
// };

///////////////////////////////////////
/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();
  console.log(request.responseText);
  request.addEventListener('load', function () {
    //console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
  <article class="country">
  <img class="country__img" src="${data.flag}"/>
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)}</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
</article>
  `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('pakistan');
getCountryData('china');
getCountryData('usa');
getCountryData('russia');
*/
///////////////////////////////////////////////////////////////////////////

// callback hell

// AJAX call country 1
/*
const getCountryAndNeighbour = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();
  console.log(request.responseText);
  request.addEventListener('load', function () {
    //console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // render country 1
    renderCountry(data);
    // get neighbour country
    const [neighbour] = data.borders;

    if (!neighbour) return;

    //AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

getCountryAndNeighbour('pakistan');

////////////////////////////////////////////////////////////////

///////////////  promises and fetch API

const request = fetch('https://restcountries.com/v2/name/pakistan');
console.log(request);
*/
/////////////////////////////////////////////////

////////////// consume promises
/*
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      renderCountry(data[0]);
    });
};
getCountryData('pakistan');



const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => response.json())
    .then(data => renderCountry(data[0]));
};
getCountryData('pakistan');
*/

////////////////////////////////////////////////////////////////

///////// chaining promises

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       console.log(response);
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       // const neighbour = data[0].border[0]
//       const neighbour = 'dsdefffds';
//       if (!neighbour) return;

//       /////// country 2

//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => {
//       console.log(response);
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err}`);
//       renderError(`Something went wrong ${err.message}. Try Again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// const getCountryData = function (country) {
//   // country 1
//   getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       console.log(neighbour);
//       if (!neighbour) throw new Error('No neighbour found');

//       /////// country 2
//       return getJSON(
//         `https://restcountries.com/v2/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       //console.error(`${err}`);
//       renderError(`Something went wrong ${err.message}. Try Again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('pakistan');
// });

// getCountryData('australia');
/////////////////////////////////////////////////////////////////////

/////// the Event loop

// console.log('Test Start');
// setTimeout(() => console.log('0 Second timer'), 0);
// Promise.resolve('resolved promise 1').then(res => console.log(res));

// Promise.resolve('resolved promise 2').then(res => {
//   for (let i = 0; i < 100000000; i++) {}
//   console.log(res);
// });
// console.log('Test end');

////////////////////////////////////////////////////////////

// building a new promise

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You win the money');
    } else {
      reject(new Error('You loss the money'));
    }
  }, 2000);
});
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

///////////////promisifying the setTimeout

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('1 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 seconds passed');
    return wait(1);
  })
  .then(() => {
    console.log('3 seconds passed');
    return wait(1);
  })
  .then(() => {
    console.log('4 seconds passed');
    return wait(1);
  })
  .then(() => console.log('5 seconds passed'));

////////////
Promise.resolve('you win').then(abc => console.log(abc));
Promise.reject(new Error('Problem!!!')).catch(abc => console.error(abc));
