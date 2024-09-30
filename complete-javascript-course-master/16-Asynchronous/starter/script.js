'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
/*
///////////////////////////////////////
// this is the old school way of doing AJAX in JavaScript. But I'm still showing it to you for two reasons. So first, I want you to know that XML HTTP requests exists, because you might actually need it in the future. And second, I want to show you how AJAX calls used to be handled with events and callback functions. And so only after that we should move on to a more modern way of handling asynchronous JavaScript, which is gonna be a feature called Promises.
// https://restcountries.com/v3.1/name/deutschland
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  // so the this keywords here in the callback is the request we can also write request here
  // console.log(request.responseText);
  // this responseText property will only be gonna set once the data has arrived so it will not work here.

  request.addEventListener('load', function () {
    //   console.log(this.responseText);
    // the data we are getting from here is in the form of json, we need to convert it
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    //   here we will get the object with all the data about portugal, so this is an array containing one object so we can destructure it.
    // now building our card component
    const html = `
  <article class="country">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${
              Object.values(data.languages)[0]
            }</p>
            <p class="country__row"><span>💰</span>${
              Object.values(data.currencies)[0].name
            }</p>
          </div>
        </article>
  `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('Portugal');
getCountryData('USA');
getCountryData('INDIA');

// here all these requests are loading in the background and then coming up as they have completed loading asynchronously.
// so if we want the data to come in a certain order then we can chain the request which means to make the second request only after the first request has finished, and that's we gonna do next which is known as callback hell.

// here we will create a sequence of ajax call where the second one runs only when the first one has finished.
*/

// ---------------------------CALLBACK HELL --------------------------
const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
            <img class="country__img" src="${data.flags.svg}" />
            <div class="country__data">
              <h3 class="country__name">${data.name.common}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(
                +data.population / 1000000
              ).toFixed(1)} people</p>
              <p class="country__row"><span>🗣️</span>${
                Object.values(data.languages)[0]
              }</p>
              <p class="country__row"><span>💰</span>${
                Object.values(data.currencies)[0].name
              }</p>
            </div>
          </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
/*
const getCountryAndNeighbour = function (country) {
  // AJAX call for country 1.
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    // Rendering country 1
    renderCountry(data);
    // Getting neighbouring countries
    // country 2
    // https://restcountries.com/v3.1/alpha/{code}
    const [neighbour] = data.borders;
    if (!neighbour) return;
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2, 'neighbour');
    });
    // so here the request 2 is really dependent on request 1 because we are calling it inside the eventlistener of request 1.
  });
};
// here we have nested callbacks, but image if we want more requests in sequence.
// so then we will end up with something like callbacks inside of callbacks inside of callbacks and so on.
// so this phenomenon is known as callback hell

getCountryAndNeighbour('Portugal');
getCountryAndNeighbour('USA');
//So basically, callback hell is when we have a lot of nested callbacks in order to execute asynchronous tasks in sequence. And in fact, this happens for all asynchronous tasks, which are handled by callbacks. And not just AJAX calls.

setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 seconds passed');
    setTimeout(() => {
      console.log('3 seconds passed');
      setTimeout(() => {
        console.log('4 seconds passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
*/
// Now, the problem with callback hell is that it makes our code look very messy. But even more important, it makes our code harder to maintain, and very difficult to understand, and to reason about, and code that is hard to understand and difficult to reason about.
// we can escape callback hell by using promises.
/*
// ------------------------PROMISES AND THE FETCH API----------
console.log(
  '-------------promises and the fetch api--------------------------'
);

const request = fetch('https://restcountries.com/v3.1/name/Portugal');
// so here the fetch function will return a promise
// so the promise is stored in the request variable
console.log(request);
*/
// -------------------------CONSUMING PROMISES-------------------------
// Now, of course, at a certain point the promise will then be settled and either in a fulfilled or in a rejected state, but for now let's assume success. So assume that the promise will be fulfilled and that we have a value available to work with. And so to handle this fulfilled state, we can use the then method that is available on all promises. So just like this. So again, this here will return a promise. And on all promises, we can call the then method. Now into the then method, we need to pass a callback function that we want to be executed as soon as the promise is actually fulfilled. So as soon as the result is available.
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`).then(function (
    response
  ) {
    // this is how we handle a fulfilled promise
    console.log(response);
    // the type of this response object is also called response
    // in order to read the data of this response we need to call json method..
  });
};

// So a function and then this function will actually receive one argument once it's called by JavaScript and that argument is the resulting value of the fulfilled promise. So let me call it response here because this is the response of an AJAX call in this case.
getCountryData('Portugal');
