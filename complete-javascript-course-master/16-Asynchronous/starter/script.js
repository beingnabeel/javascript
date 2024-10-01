'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMsg} (${response.status})`);
    }
    return response.json();
  });
};
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
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
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

// ------------------------CODING CHALLENGE: 1 ---------------------------
/*
const whereAmI = function (lat, lng) {
  return fetch(
    // `https://geocode.xyz/${lat},-${lng}?geoit=json&auth=YOUR_API_KEY`
    `https://us1.locationiq.com/v1/reverse?key=YOUR_API_KEY&lat=${lat}&lon=-${lng}&format=json&`
  )
    .then(response => {
      // console.log(response);
      if (!response.ok) {
        throw new Error(`Failed to fetch location data: (${response.status})`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`you are in ${data.address.city}, ${data.address.country}`);

      return fetch(
        `https://restcountries.com/v3.1/name/${data.address.country}`
      );
    })
    .then(res => {
      if (!res.ok) {
        throw new Error(`Country not found: ${res.status}`);
      }
      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} 🎇🎇🎇`));
};

// whereAmI(51.50344025, 0.12770820958562096);
// 51.50354
// 0.12768
// pk.604e7ca406ab02a693bf73b6cb63d16e
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);
*/
/*
//----------------------asynchronous BEHIND THE SCENES: THE EVENT LOOP ---------------
// ------------- THE EVENT LOOP IN PRACTICE ---------------------
console.log('Test start');
setTimeout(() => {
  console.log('0 sec timer');
  // after 0 sec this callback will be put on callback queue
}, 0);
// now lets build a promise that resolves immediately
// So promise.resolve, basically allows us to build a promise, so to create a promise that is immediately resolved. So one that immediately has a success value. And so that fulfilled, success value, is gonna be this one we passed in here. So resolved, promise, one, and then we can handle that resolved promise. And so that, our response we can then simply log it to the console.
Promise.resolve('Resolved promise').then(res => console.log(res));
Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 100000000; i++) {}
  // becoz of this line our settimeout func. will take more than 0 secs. becoz our microtask queue is enaged and it will be executed first then after the callback queue func. will be executed.
  // so the 0 seconds in the settimeout is not a gaurantee that it will be executed at the same time. it depends on all of these factors.
  console.log(res);
});
console.log('Test end');
// refer notes to know the order of execution
// test start and test end will be printed first becoz they are top level code (globle execution context)
// settimeout callback and promise both will run at the same time and settimeout should be printed first but it is not the case here the promise is printed first because the microtask queue has priority over callback queue.
*/
/*
//---------------BUILDING A SIMPLE PROMISE ---------------------
// a fulfilled promise means to win a lottery and rejected promise means to loose a lottery
// promises are just special kind of object in js
// now the promise constructor takes exactly one argument and that is the so called executor function
// Now, as soon as the promise constructor runs, it will automatically execute this executor function that we pass in. And as it executes this function here, it will do so by passing in two other arguments. And those arguments are the resolve and reject functions. So reject like this. So we will use them here in a second, but for now let's actually build this executor function.
// here there is a 50-50 chance of winning a lottery so if the Math.random()>0.5 then we say the promise is fulfilled and in order to set the promise as fulfilled we use the resolve function, so calling the resolve function will make this promise as a fulfilled promise
// So again, whatever value we pass into the resolve function here is gonna be the result of the promise that will be available in the den handler. And so in this case, let's simply pass in a string here
// And so now let's handle the opposite case. So where we basically want to Mark this promise as rejected. And so, as you can imagine for that we can call the reject function. Then into the reject function, we pass in the error message that we later want to be able in the catch handler, so in the catch method. So here, let's just say you lost your money and then just some poop emoji.

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening');
  // now by using this timer, we did actually encapsulate some asynchronous behavior into this promise.
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You win 🎖');
      // so when we consume this promise this is going to be our response
    } else {
      // here we are creating a new Error object instead of a string
      reject(new Error('You lost your money 💩'));
      // and this is going to be our error
    }
  }, 2000);
});
// So just to quickly recap, before we consume this promise here, we created an executor function which is gonna be called by this promise constructor as soon as it runs, so basically immediately. Then the promise calls this function and passes in the resolve and the reject functions so that we can then use them to mark the promise as either resolved so as fulfilled or as to rejected. And so you see that this promise is eventually going to move to either the fulfilled state or the rejected state. So we always need to make sure that the promise ends up in one of these two states. And so now it's time to actually try this out by consuming this promise that we just built.
// now consuming the promise
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Now, in practice, most of the time all we actually do is to consume promises. And we usually only built promises to basically wrap old callback based functions into promises. And this is a process that we call promisifying. So basically promisifying means to convert callback based asynchronous behavior to promise based. Let's see that in action a little bit.

// so here we are gonna promisify the settimeout function and create a wait function
// Promisifying setTimout function
const wait = function (seconds) {
  // so now inside of this function we will actually create and return the promise
  // so creating a function and then returning a promise and so this will then encapsulate the asynchronous operation even further.
  // so essentially that's also what the fetch function does.
  // so it's a function that returns a promise, its more real world example.
  // As I was saying, we are going to return a new promise and then or executor function as always, and then resolve. And in this case, we actually don't even need the reject function. And that's because it's actually impossible for the timer to fail. And so therefore we will never mark this promise as rejected.
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// now consuming this promise
// now in this callback I can run any code that i want to get executed after 2 seconds.
wait(1)
  .then(() => {
    console.log('I waited for 1 seconds.');
    // now if i have to wait again for another 1 second then i can return new promise.
    return wait(2);
  })
  .then(() => {
    console.log('I waited for 2 more seconds.');
    return wait(3);
  })
  .then(() => {
    console.log('I waited for 3 more seconds.');
    return wait(4);
  })
  .then(() => {
    console.log('I waited for 4 more seconds.');
  });
// here we have a nice chain of asynchronous behaviour without the callback hell.
// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 seconds passed');
//       setTimeout(() => {
//         console.log('4 seconds passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// now there is also a way to create fullfilled or rejected promise immediately.
// this is a static method on the promise constructor.
// in the case of reject there will be no resolve value so .then is not necessary and we simply do catch here.
Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.error(x));
*/
/*
//------------------------------- promisifying the geolocation api---------------------
// Now we used the geolocation API before, and so let's start by reviewing how it works. So remember we use navigator .geolocation.getcurrentposition, and then this function here accepts two callbacks where the first is for the success and the second one is for the error. So this first callback function actually gets access to the position object. So let's pass that in as an argument to this callback function, then let's simply log that to the console. So this is our first callback, and now let's create a second callback with the error.

// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.error(err)
// );
// so this is the asynchronous behaviour in exactly the way that we were talking about.
// So we have a console.log after the geolocation. Now part here and still, this part here is locked first and so this one happens first and so that's because this function here basically offloaded its work to the background. So to the web API environment in the browser, and then immediately it moved on right here to the next line. So this is very clearly a callback based API. So we have to pass in these different callbacks and so this is another great opportunity to promisify a callback based API, to a promise based API. So let's do that

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(position=>resolve(position), err=>reject(err));
    // doing the above thing more simply
    navigator.geolocation.getCurrentPosition(resolve, reject);
    // now resolve itself here is the callback function which will be called with the position and the same ofcourse with the reject.
  });
};
getPosition().then(pos => console.log(pos));

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      console.log(lat, lng);
      // const lat = 51.50344025;
      // const lng = 0.12770820958562096;
      // whereAmI(51.50344025, 0.12770820958562096);
      return fetch(
        `https://us1.locationiq.com/v1/reverse?key=YOUR_API_KEY&lat=${lat}&lon=-${lng}&format=json&`
      );
    })
    .then(response => {
      // console.log(response);
      if (!response.ok) {
        throw new Error(`Failed to fetch location data: (${response.status})`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`you are in ${data.address.city}, ${data.address.country}`);

      return fetch(
        `https://restcountries.com/v3.1/name/${data.address.country}`
      );
    })
    .then(res => {
      if (!res.ok) {
        throw new Error(`Country not found: ${res.status}`);
      }
      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} 🎇🎇🎇`));
};

btn.addEventListener('click', whereAmI);
*/
/*
// -----------------------CONSUMING PROMISES WITH ASYNC/AWAIT----------------------
// there is now an even better and easier way to consume premises, which is called a sync await.
// And we do this by simply adding a sync here in front of the function. And so this function is now an asynchronous function. So a function that will basically keep running in the background while performing the code that inside of it, then when this function is done, it automatically returns a premise,
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
const whereAmI = async function () {
  // so inside the async function we can have one or more await statements.
  // fetch(`https://restcountries.com/v3.1/name/${country}`).then(res=>console.log(res));
  // so the below code is exactly the same we use to do with .then, it's just a different way of consuming the promises
  // geolocation
  const pos = await getPosition();
  console.log(pos.coords.latitude, pos.coords.longitude);
  // const { latitude: lat, longitude: lng } = pos.coords;
  const lat = 51.50344025;
  const lng = 0.12770820958562096;
  // reverse geocoding
  const resGeo = await fetch(
    `https://us1.locationiq.com/v1/reverse?key=YOUR_API_KEY&lat=${lat}&lon=-${lng}&format=json&`
  );
  const dataGeo = await resGeo.json();
  // country data.

  const res = await fetch(
    `https://restcountries.com/v3.1/name/${dataGeo.address.country}`
  );
  // But anyway, as soon as this premise here is resolved, then the value of this whole await expression that we have here is going to be the resolved value of the premise. And so we can simply store that into a variable. So let's call it res
  // console.log(res);
  // so now we need the json out from this response. and this itself returns a new promise.
  console.log(res);
  const data = await res.json();
  console.log(data);
  renderCountry(data[0]);
};
// So this is the URL that we have been using. So make sure you grab it somewhere from your code. And so here, let's now pass in this country again. All right. So again, this year we'll return a premise. And so in an a sync function like this one, we can use the await keyword to basically await for the result of this premise. So basically await will stop decode execution at this point of the function until the premise is fulfilled. And so until the data has been fetched in this case, but now after that explanation, you might think isn't stopping the code, blocking the execution? Well, that's a really good question, but the answer is actually no, in this case, because stopping execution in an a sync function, which is what we have here is actually not a problem because this function is running asynchronously in the background. And so therefore it is not blocking the main threat of execution. So it's not blocking the call stack. And in fact, that's, what's so special about a async await.
whereAmI();
console.log('FIRST');
// async await is only about consuming promises
// so async await is just synthetic sugar for consuming promises
*/
/*
// -----------------------ERROR HANDLING WITH try...catch---------------------
// with async await we can't use the catch method for error handling because we can't attatch it anywhere, so instead we use something called as try catch statement.
// So we can basically wrap all our code in a try block. And so JavaScript will then basically try to execute this code.
// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch (err) {
//   alert(err.message);
// }
// here this catch block will have access to whatever error here has occurred in the catch block.
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
const whereAmI = async function () {
  try {
    const pos = await getPosition();
    const lat = 51.50344025;
    const lng = 0.12770820958562096;
    // reverse geocoding
    const resGeo = await fetch(
      `https://us1.locationiq.com/v1/reverse?key=YOUR_API_KEY&lat=${lat}&lon=-${lng}&format=json&`
    );
    if (!resGeo.ok) throw new Error('Problem getting location data');
    const dataGeo = await resGeo.json();
    // country data.

    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.address.country}`
    );
    if (!res.ok) throw new Error('Problem getting the country data');
    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);
  } catch (err) {
    console.error(`${err} 🎇🎇`);
    renderError(`   🎇 ${err.message}`);
    // so here we need to manually create an error and that error will be then caught by the catch block.
  }
};
whereAmI();
// whereAmI();
// whereAmI();
// whereAmI();
// whereAmI();
console.log('FIRST');
*/
/*
// ----------------------RETURNING VALUES FROM ASYNC FUNCTIONS-----------------------
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
const whereAmI = async function () {
  try {
    const pos = await getPosition();
    const lat = 51.50344025;
    const lng = 0.12770820958562096;
    // reverse geocoding
    const resGeo = await fetch(
      `https://us1.locationiq.com/v1/reverse?key=YOUR_API_KEY&lat=${lat}&lon=-${lng}&format=json&`
    );
    if (!resGeo.ok) throw new Error('Problem getting location data');
    const dataGeo = await resGeo.json();
    // country data.

    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.address.country}`
    );
    if (!res.ok) throw new Error('Problem getting the country data');
    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);
    return `you are in ${dataGeo.address.city}, ${dataGeo.address.country}`;
  } catch (err) {
    console.error(`${err} 🎇🎇`);
    renderError(`   🎇 ${err.message}`);
    // so here we need to manually create an error and that error will be then caught by the catch block.
    // Reject promise returned from async function.
    throw err;
  }
};
// So even though there was an error in the async function, the promise that the async function returns is still fulfilled and not rejected, right? And in fact, if we add a catch handler here, then let's see what happens. So console.error, error.message, then our emoji here. And actually let's add a two here. So the sequence is kind of one, two, three, and let's do the same here. All right? And so we should still get the error from here and indeed we do, but still it is this callback here that is executed. So that's why we get two undefined and not the catch block. And so again, what that means is that even though there was an error in the async function, the promise that it returns is still fulfilled. Now, if we wanted to fix that, if we want to be able to catch that error here as well, then we would have to rethrow that error right here. Rethrowing the error means to basically throw the error again so that we can then propagate it down. And so with that, we will manually reject a promise that's returned from the async function. So let's say reject promise returned from async function. So here we can now take the error and throw it again. So throw error, and so now we get the same error here as we had here. So again, it's, cannot read property flag of undefined and here the same and with this too. So it just coming from here. And so sometimes it's important to do this. And so rethrowing an error is then the correct solution
console.log('1: will get location');
// whereAmI();
// so this async function is running in the background so js moves to the next line and executes the other code.
//top level code will be executed first.
// const city = whereAmI();
// console.log(city);
// now if we want to return some data from this async function.
// so if we are returning something from the whereAmI funtion and then storing it in a variable then a promise will be returned from here.
// Now the value that we return from an async function, so again, that's this string here will become the fulfilled value of the promise that is returned by the function. And so that's important to understand. So again, this promise that we see down here, the fulfilled value of that promise is going to be this string here, because that is the value that we return from the async function while at least if there is no error here happening in the function,
// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message}`))
//   .finally(() => console.log('3. Finished getting location'));
// using async await here instead of this
// whereAmI();
// whereAmI();
// whereAmI();
// whereAmI();
// console.log('3. Finished getting location');
// now at this point of time await doesn't work without async fucntion, it can only be used inside async function.
// we don't want a complete new fucntion here we can use, IIFE
//  syntax: (function(){
// })()

(async function () {
  try {
    const city = await whereAmI();
    console.log(city);
  } catch (err) {
    console.error(`2: ${err.message}`);
  }
  console.log('3. Finished getting location');
})();
*/
// -----------------RUNNING PROMISES IN PARALLEL -----------------------
// Let's now imagine that we wanted to get some data about three countries at the same time, but in which the order that the data arrives does not matter at all.
// we should always use try catch block inside the async function.
const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
    // But if we think about what we did here, then maybe it actually doesn't make so much sense because what we did here basically was to run all these Ajax calls one after another, even though the result of the second one here does not depend on the first one, and the result of the third one does also not depend on any of the other ones. And so actually this doesn't make much sense. Why should the second Ajax call wait for the first one?
    // console.log([data1.capital[0], data2.capital[0], data3.capital[0]]);
    //so instead of running these promises in sequence we can run them in parallel becoz they doesn't depend on each othr.
    // so for that we use promise.all combinator function.
    // so this is kind of helper function for the promise constructor., now this function here takes in an array of promises and it will return a new promise which will then run all the promises in the array at the same time.
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    // here you need to keep in mind that if any of the promise is rejected then the whole promise.all actually rejects as well
    // so we say promise.all shortcircuits when one promise rejects.
    // so this will retun a promies so we use await keyword and store that promise in a variable
    // console.log(data1);
    // console.log(data2);
    // console.log(data3);
    // console.log(data);
    console.log(data);
    console.log(data.map(d => d[0].capital[0]));
  } catch (err) {
    console.error(err);
  }
};

get3Countries('portugal', 'usa', 'canada');
