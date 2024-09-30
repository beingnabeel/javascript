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
  // countriesContainer.style.opacity = 1;
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
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       // this is how we handle a fulfilled promise
//       console.log(response);
//       // the type of this response object is also called response
//       // in order to read the data of this body from  response we need to call json method..
//       return response.json();
//       // this json is also an asynchronous function so it will also return a promise so we will  use another then method
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };
// so here we handled two promise to get the data using then method
// then method accepts a callback function with the resulting data as an argument.

// So a function and then this function will actually receive one argument once it's called by JavaScript and that argument is the resulting value of the fulfilled promise. So let me call it response here because this is the response of an AJAX call in this case.
// getCountryData('Portugal');

// ----------SIMPLIFYING THE ABOVE CODE ----------------------

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => response.json())
//     .then(data => renderCountry(data[0]));
// };

// getCountryData('portugal');

// so the conclusion is that promises do not get rid of callbacks but instead they get rid of callback hell.

// ----------------------CHAINING PROMISES ---------------------------
// we will chain here two sequential ajax calls

// const getCountryAndNeighbour = function
// so actually the then method always returns a promise no matter if we actually return anything or not but if we do return a value then that value will become the fulfillment value of the return promise.

// const getCountryDataAndNeighbour = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => response.json())
//     .then(data => {
//       renderCountry(data[0]);
//       console.log(data);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) return;

//       // country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data[0], 'neighbour'));
// };
// here instead of callback hell we have flat chain of promises.

// getCountryDataAndNeighbour('tanzania');
/*
// ---------------------Handling rejected promises --------------------------
// Now there are two ways of handling rejections and the first one is to pass a second callback function into the then method.
// So the first callback function here is always gonna be called for the fulfilled promise. so for a successful one. But we can also pass in a second callback which will be called when the promise was rejected. So let's do that. And this callback function will be called with an argument which is basically the error itself.
// handling the error is also called catching the error
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};
const getCountryDataAndNeighbour = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(
      response => response.json()
      // err => alert(err)
    )
    .then(data => {
      renderCountry(data[0]);
      console.log(data);
      const neighbour = data[0].borders[0];
      if (!neighbour) return;

      // country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(
      response => response.json()
      // err => alert(err)
      // so passing error here manually for every rejected promise is annoying so we can do that at one place globally.
    )
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      // this err generated here is a real javascript object, and any err in js that was created like this contains the message property.
      console.error(`${err} 🎇🎇🎇`);
      renderError(`Something went wrong 🎇🎇 ${err.message}. Try again!`);
      // so here we are printing only the message of the error and not the whole object itself.
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
  // so here catch is also returning a promise that is why finally is working

  // All right, so again this catch method here at the end of the chain will basically catch any errors that occur in any place in this whole promise chain and no matter where that is. So errors basically propagate down the chain until they are caught, and only if they're not caught anywhere then we get that Uncaught error that we saw right in the beginning.
};
// just having one callback in the then and then instead we can handle all the errors no matter where they appear in the chain right at the end of the chain by adding a catch method. And then here we can actually use the same call back function because the callback function here will also be called with the error object that occurred and so then we can handle it in some way.

btn.addEventListener('click', function () {
  getCountryDataAndNeighbour('portugal');
});

// besides then and catch there is also finally methods
// So let's add a finally here, finally. And then the callback function that we defined here will always be called whatever happens with the promise. So no matter if the promise is fulfilled or rejected this callback function that we define here is gonna be called always. So that's the difference between the other two so the then method is only called when the promise is fulfilled while this one is only called while the promise is rejected. Now the finally method is not always useful, but sometimes it actually is.

// the case when no country is present according to the input
getCountryDataAndNeighbour('djslflsdjfj');
*/
/*
// ------------------------- THROWING ERRORS MANUALLY -----------------------
// here we are gonna fixed that request 404 error that we saw in last lecture.
// the problem was that during fetch there was a 404 error
// which is because our API couldn't find any country with this name. But still, even though there was obviously a big problem with this request, the fetch function still did not reject in this case, and by the way, many people, and that includes myself think that in this case, the promise should actually be rejected right away, but again, it just doesn't, and so we will have to do it manually. So to see what happens here, let's go back to this first then handler here, which gets access to the response immediately. So without even the data. So here, I'm adding back a block, and let's take a look at the response here. And also, since we added back the block, we now need to return this explicitly. So again, for now, we are just taking a look at the response object here. And so here it is, and so right here, you can see that the Ok property is set to false. And so the reason for that, is, of course, the status code 404. Now, when the request goes well, and so that's what's gonna happen when I click here. So then if we take a look at the response, Ok is true, and that's because status is 200. And so 200 literally stands for Ok. So we can now use the fact that this response has the Ok property set to false to basically reject the promise, or selves manually, now, right, so we can do that by creating a new error.
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};
// now here we are having lots of duplicate code so we can now use helper functions
// And this helper function will wrap up the fetch the error handling, and also the conversion to JSON
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMsg} (${response.status})`);
    }
    return response.json();
  });
};
// const getCountryDataAndNeighbour = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       console.log(response);
//       // So we can now use the fact that this response has the Ok property set to false to basically reject the promise, or selves manually, now, right, so we can do that by creating a new error.
//       if (!response.ok) throw new Error(`Country not found ${response.status}`);
//       // here throw will immediately terminate the function immediately.
//       // now the effect of creating and throwing an error in any of these then method is that the promise will immediately reject.
//       // therefore the promise return by this then handler here will be a rejected promise and that rejection will propagate all the way down to the catch handler.
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       console.log(data);
//       // const neighbour = data[0].borders[0];
//       const neighbour = 'sdlfdlsjfj';
//       if (!neighbour) return;

//       // country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => {
//       console.log(response);
//       if (!response.ok)
//         throw new Error(`Country not found: ${response.status}`);

//       return response.json();
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 🎇🎇🎇`);
//       renderError(`Something went wrong 🎇🎇 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
const getCountryDataAndNeighbour = function (country) {
  // country 1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      console.log(data);
      // const neighbour = data[0].borders[0];
      const neighbour = data[0].borders ? data[0].borders[0] : null;
      console.log(neighbour);
      if (!neighbour) {
        throw new Error('No neighbour found!');
      }

      // country 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.log(`${err} 🎇🎇🎇`);
      renderError(`Something went wrong 🎇🎇 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
btn.addEventListener('click', function () {
  getCountryDataAndNeighbour('portugal');
});

getCountryDataAndNeighbour('australia');
// and since we do that down here in our error handler, the best way of doing that is to indeed throw an error. And remember that this works, because throwing an error inside of this callback function of this then method will immediately reject this promise. And so then that rejected promise will travel down the chain until it is eventually caught somewhere. So again, in this case, it is right here in this catch handler.

*/
