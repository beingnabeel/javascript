'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

// btnsOpenModal.forEach(function (btn) {
//   btn.addEventListener('click', openModal);
// });

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// --------------------------186. How the DOM really works -------------------
// --------------------------187. SELECTING CREATING AND DELETING ELEMENTS -----------------------------------
// very important becoz difficult to understand from the mdn documentation.

// selecting the elements.
// so we need documentelement on the document object becoz this document object is not the real dom element
// so for example if you want to apply css style to the entire page then we always need to select document element.
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
// so for these above elements we don't need to write any special selector

// and as usual for the other elements we neeed to use queryselector

const header = document.querySelector('.header');
// so it will return the first element that matches the selector

// now if we want all the occurence of a particular selector then we should use queryselectorAll instead

// const allSections = document.querySelectorAll('.section');
// console.log(allSections);
// so basically this returns a nodelist
// const arrSections = [...allSections];
// console.log(arrSections);
// now this nodelist is converted to an array

// so these selectors are not only present on the document but also present on the element itself

document.getElementById('section--1');
// now we can also select all the elemetns with a certain tag name or the element name
const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);
// so here you will see all the buttons that are present on our page, so this method returns an html collection and its different from nodelist becoz an html collection is so called live collection
// that means if the dom changes then this collection is automatically updated.
// so if i delete one button from the dev tools then the no. of all buttons changes from 9 to 8 but if you see in the case of node list if i delete one section from the dev tools and check allsections then it still is 4, becoz this allSection was created when we were having 4 sections and this nodelist doesn't automatically update itself
// selecting elements by the class name and here we dont need the selector that is . in front
// console.log(document.getElementsByClassName('btn'));
// and this one also returns live html collection
/*
// CREATING AND INSERTING ELEMENTS
// now we can create HTML elements using the the insertadjacentHTMl funtion that we have used in our bankist app to display the movements
// .insertadjacentHTML
// already discussed in bankist app

// now we will see other way of creating HTML element becoz sometimes it's actually useful to build the element from scratch
// so here we need to pass in the tag name
// so this will return a dom element so we can then save it somewhere
const message = document.createElement('div');
// so this creates a dom element and stores it in our message variable but this element is not yet anywhere in our DOM.
// all this is dom object that we can use to do something on it but it is not yet in the dom itself so it's nowhere to be found in our webpage here.
// if we want it into our page then we need to manually insert it
//
// So for example, we can add classes. And so now this is like any other selection that we have, okay? So if we have an element in our DOM and select it for example, using query selector here like this then the result is also a DOM object that we can use in our code. And this year is now just the same. It's just an object that represents a DOM element. And so just like before we can use, for example class list on it, so class list, and then we can add and I will add a class called cookie message. And that's because here we will now programmatically built an element which will display a small cookie message on the bottom of the screen. So I'm sure you've seen these on all web pages these days. They're quite annoying. So let me search here for cookie and here you go. So this is the class that I created for this cookie message. And so this is the one we are adding now to our newly created element, okay?
message.classList.add('cookie-message');
// So for example, we can add text into the element and as always we do that using text content. So let's just say we use cookies for improved functionality and analytics, something like that, analytics, okay? So this inserts simply text but of course we can also insert a HTML. And so that is then inner HTML which we also already used before. And remember that we can use both of these properties to read and to set content, okay?
message.innerHTML = `We use cookies for improved functionality and analytics. <button class="btn btn--close--cookie">Got it!</button>`;

// now we need to append this message to our header element
// header.prepend(message);
// prepend basically adds element as the first child of the header element.
// we can also add it as the last child and that will be append
// so since it is a live element and now if we do append it then will not be added two times it will simply become the last child becoz of the append
// and also becoz dom element is unique it can always only exist at one place at a time.
// so here the prepend will insert the element but appned will just move the element and not insert it again so prepend and append can also be used to move the elements
// header.append(message);
// but now if we wanted multiple copies of the same element.
// so we will use append and use the clone of the message instead of directly passing the message
// header.append(message.cloneNode(true));
// here passing true means all the child elements will also be copied.

// so we only wnat it to be at the bottom
header.append(message);

// so there are also before and after mehtod which will insert the element before and after the header as a sibling
// header.before(message);
// header.after(message);

// now deleting the element
// remove the cookie element as soon as the button is pressed
document
  .querySelector('.btn--close--cookie')
  .addEventListener('click', function () {
    message.remove();
    // so this remove method is rescent advancement befor we need to select the parent element first and then remove the child element from there.
    // message.parentElement.removeChild(message);
    // so the above moving up and down in the dom tree is called as dom traversing.
  });
  */
/*
// --------------------------188. STYLES ATTRIBUTES AND CLASSES -------------------------

// STYLES
// to set a style on element we do element.style and then the property name
message.style.backgroundColor = '#37383d';
// so here we need to write the css value exactly as we write in the css file.
message.style.width = '120%';
// here we have set the widht to larger % so that it occupies the present gaps
// so the styles that are set directly in the dom are set as inline styles

// now if we want to see the inline style in the console
console.log(message.style.height);
// so we cant see the above becoz we can only see those values which are set as inline style or directly coming from the dom , so we cant get styles from the css stylesheet

console.log(message.style.backgroundColor);

// but if we wanted to get the styles badly then we can get it through the getComputedStyle function
// console.log(getComputedStyle(message));
// this will present me with all the properties on the element
console.log(getComputedStyle(message).color);
// so we also get those properties here which are not defined in our stylesheet but it is automatically calculated, for example height is not defined here but it is automatically calculated and so we can use this to even manipulate the properties which are not yet previously defined in the stylesheet
console.log(getComputedStyle(message).height);

// so here we are trying to add number to a string that not gonna work so we need to parse that number first

message.style.height =
  parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// working with css custom properties also called as css variables
// so in stylesheet whatever is written in :root
// so the idea of css variable are similar to of js variables
// so we can change the values all over our application by simply chaning the value here.
// so if we can change the value in css then we can also change it from the js
// so the root there is in js equivaled to the document element.

// document.documentElement this is the root that we have seen in css
document.documentElement.style.setProperty('--color-primary', 'orangered');

// TALKING ABOUT ATTRIBUTES NOW
// in html all of these like src, alt, class and id' are the attributes of the particular element
// so in js we can access and change these attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
// So let's actually select that logo that I just showed you, and the class of that is nav__logo, so that's two underscores, and so now we can access some of these, let's say default properties, so like the alt or the source attribute. So you see here we get the alternative text, which is this alt and then also this source, now this looks a bit different than the one we have here, but more about that in a second, all right. So this works because on images they are supposed to have the alt, and the source attributes on them and so if we specify them in HTML, then JavaScript will automatically create these properties on the object, but if we add some other property that is not a standard then JavaScript, will not automatically create a property on the object. So let's add for example, designer and set it to Jonas, okay, and so if we now tried to read, logo.designer, that's not going to work, so you see it's undefined and again, that is because this is not a standard property that is expected to be on images. Just another one that works here and that's a bit different than you might expect is className, so the className of this element is just this class. And so you might think that it should be just class, but for historical reasons, it has to be className like this, okay, so this is a non-standard and that's why it doesn't work. At least it doesn't work like this but of course there is another way of reading this value from the DOM, it's just a little bit more difficult, but it's not a problem, so we can use getAttribute, and then here we can pass in the string, designer and that indeed it returns to us Jonas. Now just as we can read these values for these attributes, we can also set them, for example, we can say logo dot the alt text should be Beautiful minimalist logo.
console.log(logo.className);
// non standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.alt = 'Beautiful minimalist logo';
// there is also opposite of getattribute that is set attribute
logo.setAttribute('company', 'Bankist');
// so the urlof the image that we got here in the console is basically the absolute url while the url that we have in our html is the relative url from where the index.html file is located. so for getting that relative url we can use getAttribute function
console.log(logo.getAttribute('src'));
// and the same is also true for the href attribute on the links

const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));
// in this case both are same becoz both are absolute anyway
const link2 = document.querySelector('.nav__link--btn');
console.log(link2.href);
console.log(link2.getAttribute('href'));

// now there's a special type of attribute and that's data attribute which start with the word data.
// it should start with data then dash and then whatever we want
// whatever is after data we need to convert it into camel case
console.log(logo.dataset.versionNumber);

// now talking about classes
// so we already know
// logo.classList.add('c', 'j');
logo.classList.add('c');
// here you can add multiple classes by passing in multiple values separated by commas
logo.classList.remove('c');
// and similarly we can also remove those classes by passing in multiple values separated by commas
logo.classList.toggle('c');
logo.classList.contains('c'); //not includes

// we can also use className property so set classes but it advisable to not use it because it overrides all the existing classes and only allows to add one class on any element
// logo.className = 'jonas';
*/
// ---------------------------------------------189. Implementing smooth scrolling ----------------------------------
// so here what we will do is when we click the learn more button then it will smoothly scroll to the first section
// so we will see two way first which is the old school way and then a more modern approach
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click', function (e) {
  // so here we need to give coordinates of the section first that we need to scroll to
  // const s1cords = section1.getBoundingClientRect();
  // console.log(s1cords);
  //so here we get the dom rectangle and the x pos. which is measured from the left y. pos which is measured from the top and width and height and other properties
  // e.target is basically this(btnscrollTo) element that was basically clicked and now we will getBoundingclientRect on that
  // console.log(e.target.getBoundingClientRect());
  // so here when we scroll the x and y changes
  // so here the distance y is between the element and the top of the viewport
  // so boundingclientRect is relative to the viewport
  // we can also get the current scrolling position
  // console.log('current scroll (x/y)', window.pageXOffset, window.pageYOffset);

  // we can also read the height and width of the viewport
  // console.log(
  //   'height/width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // so the goal of finding coordinates is to move the the section 1 on clicking the button

  // scrolling
  // window.scrollTo(s1cords.left, s1cords.top);

  // so bascially we need the left and top positions from the s1cords to move to the location, so left value is 0 so it's good becoz we dont want any horizontal scrolling and the top position is the position from the top of the viewport
  // so after scolling if we click the button again then it won't work becoz this top here is always relative to the viewport but not to the document
  // so the solution of the problem is to simply add the current scroll position to the top value here and with this we will then determine the position of the section here not relative to the viewport, so not to the top of the browser window but to the top of the page, so we will add the current scroll position to the viewport position
  // window.scrollTo(
  //   s1cords.left + window.pageXOffset,
  //   s1cords.top + window.pageYOffset
  // ); // current position + the current scroll
  // we can even make this better by making the animation nice and smooth and this works by passing a object now instead of one argument
  // so to implement smooth scrolling i have to pass in object with left top and behaviour properties
  // window.scrollTo({
  //   left: s1cords.left + window.pageXOffset,
  //   top: s1cords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // but there is even more modern approach present below
  section1.scrollIntoView({ behavior: 'smooth' });
});

// --------------------------- 190. TYPES OF EVENT AND EVENT HANDLERS ---------------------
// an event is basically a signal that is created by certain dom node and a signal means something has happened such as click or mouse moving etc... and then we can listen to these events using event listners and then we can handle them however we like

// now we will see mouse enter event
// so the mouseenter event here is a little bit like hover event in css, so it fires whenever a mouse enters a certain element.
// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', function (e) {
//   alert('addEventListener: Great! You are reading the heading :D');
// });

// mdn javascript events
// another way of attaching the event listeners on certain elements
// so by using the on event property directly on the element

// so using mouseenter here

// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great! You are reading the heading :D');
// };

// so for each of the property that we have seen on the addeventlistner same property is also available as on event
// so basically this way of listnening to the events is pretty old school it was done like this in the old days becoz now we ususally use addEventListener

// AddEventListener is better becoz it allows us to :
// 1. it allows us to add multiple event listeners to the same event, but when we use on event property the previous function will be simply overrided
// 2. we can actually remove an event handler in case we don't need it anymore., so to do it first we need to export the function into a named function
const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading :D');

  // so after listening to the function basically we can remove it
  // h1.removeEventListener('mouseenter', alertH1);
  // this doesn't have to be in here, becoz we can remove the eventlistener at any point or after some time has passed
  // so here on the same eventhandler function we are also removing the function
};
// h1.addEventListener('mouseenter', alertH1);

// so this is a nice patter whenever you only want to listen to the event just once

// so here after three seconds have passed then the event handler will be removed
// setTimeout(() => {
//   h1.removeEventListener('mouseenter', alertH1);
// }, 3000);

// now there's also a third way of handling event which is by using an html attribute and this should not be used.
// so we simply need to define it directly on the html
// we are defining on the div with the class of header__title

// --------------------191. EVENT PROPAGATION: BUBBLING AND CAPTURING ------------------

//JavaScript events have a very important property. They have a so-called capturing phase and a bubbling phase.
//
/*
// --------------------192. EVENT PROPAGATION IN PRACTICE -------------------------------------
// in practice, and mainly event bubbling. And we're gonna do that by attaching event handlers to this navigation link here, and also, all of its parent elements. Then, as we click this link, we will give all these elements random background colors, and this will then allow us to visualize exactly how event bubbling is happening. And it will make sense once you see it actually working. And let's actually start by creating that random color that I just mentioned. And a random color is basically, just a string, like RGB, and then with a value between 0 and 255.

// rgb(255, 255, 255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () => {
  return `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(
    0,
    255
  )})`;
};
// console.log(randomColor());

document.querySelector('.nav__link').addEventListener('click', function (e) {
  // console.log('LINK');
  this.style.backgroundColor = randomColor();
  // e.target is basically where the event first happened so it is not the element on which the handler is actually attatched.

  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this);
  // STOPPING THE EVENT PROPAGATION
  // e.stopPropagation();
  // SO NOW the two parent element will not change thier background color because the event never arrived at those two elements becoz propagation was stopped, but in practice that's not a good idea to stop propagation
});
document.querySelector('.nav__links').addEventListener('click', function (e) {
  // console.log('LINK');
  this.style.backgroundColor = randomColor();
  console.log('CONTAIER', e.target, e.currentTarget);
});
document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    // console.log('LINK');
    this.style.backgroundColor = randomColor();
    console.log('NAV', e.target, e.currentTarget);
  } //due to the presence of this true here the event handlere now will no longer listen to the bubbling event instead they will listen to the capturing events and other to event handler are listening for the bubbling event as we have not passed true as the third parameter that is why first nav , then link and then container will be printed in the console

  // true
);

// in event handlers the this keyword always points to the element on which that event handler is attatched.
// if we apply the same event listener property to the parent of the individual links then they will also get a background color
// so here the event basically is happening at the document root and then from there it is travelling down to the target element and in this case it's this link and then it bubbles up And bubbling up means that basically it's as if the event had also happened in all of the parent elements. And so that is the reason why this exact event is now also being handled by this event listener here that is on nav_links, okay?
// so both of the links that is .nav__link and .nav__links are handling the same event now
// the event only bubble ups to its parent element
//
// so when I click .nav__link then the target for all the three handlers are the same and that will be where the click first happened
// so event originates at .nav_link and then bubbles up to its parent element
//current target is indeed the element on which the event handler is attatched.
// so current target is basically exactly the same as the this keyword. so the this keyword is also the one on which the evetListener is attatched to .
// We can also stop the event propagation
// So as we just saw, these three event handlers that we set up here receive events from the target elements and also from the bubbling phase, right. So in other words, the event handler functions are listening for click events that happen on the element itself, like this, right, or like this, and we're now, of course, only the background color of this one changes, and they are also listening for events that keep bubbling up from their child elements and that's the reason why the color changes in all of the parent elements here as well. So the two phases that I just described are phase two and phase three in the slide that we saw in the last video, right. But now, what about the capture phase? So that was phase one. Well, as we learned, events are captured when they come down from the document route all the way to the target, but our event handlers are not picking up these events during the capture phase.
// So I mentioned that at event listener here, it's only listening for events in the bubbling phase, but not in the capturing phase. So that is the default behavior of the add event listener method, and the reason for that is that the capturing phase is usually irrelevant for us. It's just not that useful. Now, on the other hand, the bubbling phase can be very useful for something called event delegation. So that's something that we're going to do in the next lecture.
// *****
// However, if we really do want to catch events during the capturing phase, we can define a third parameter in the addEventlistener function. For example here, we can set the third parameter to true or false. And so let's set it to true. And so in this case where this used capture parameter is set to true, the event handler will no longer listen to bubbling events, but instead, to capturing events. Now, in practice, that's gonna look the same here, but as we take a look here in our log, you will see that now, the NAV is actually the first appearing. And let's clear that here and see it again.
// and therefore, the NAV is now the first one to show up because this, of course, is the first one to happen. Because first event travels down all the way to the target and only then, it bubbles back up.
*/
// --------------------------193. EVENT DELEGATION: IMPLEMENTING PAGE NAVIGATION -----------------------
// we will use the power of event bubbling to implement something called event delegation.
//we will be implementing the smooth scrolling behavior in the navigation bar

// Page navigation
// ----------done myself -------------
// const navScrollTo = document.querySelectorAll('.nav__link');
// const section2 = document.querySelector('#section--2');
// const section3 = document.querySelector('#section--3');
// navScrollTo.forEach(function (nav, i) {
//   nav.addEventListener('click', function (e) {
//     e.preventDefault();
//     const targetSection = document.querySelector(nav.getAttribute('href'));
//     // console.log(targetSection);

//     targetSection.scrollIntoView({ behavior: 'smooth' });
//   });
// });

// without event delegation from the tutorial

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     // we are calling prevent default here becoz these link here are the anchors and by default they are moving to thier specified section so we should stop that
//     // console.log('LINK');
//     // so that anchor or the href attribute is still very useful becoz through it we gonna move to section where the id is same as the href
//     const id = this.getAttribute('href');
//     // so here we have used the getAttribute becoz I don't want the absolute url which i usually get through this.href
//     // console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// so here the above mehtod of smooth scrolling is not very efficient as we are adding the same callback function on each element of the nodelist that we are getting, I mean it's fine for three elements of the nodelist but suppose I have 100 or 1000 of those elements and attatching the same function on all those elements is not very efficient becoz then we will be creating a 1000 copies of this same function and that would impact the performance

// so instead we can use events delegation where we use the facts that events bubble up and we do that by putting a event listener on the common parent element of all the links, so here that is the container of the link elements
//it's this container that's around all of these links, and that we saw in the previous video. So remember, that is this element here. So we will put our event handler on this element here, and then when a user clicks one of the links, the event is generated, and bubbles up, just as we saw in the last video. And then we can basically catch that event in this common parent element, and handle it there.

// implementing smooth scrolling with event delegation

// 1. add event listener to common parrent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // console.log(e.target);
  // now we need to figure out where the event is actually happended and that is basically stored in event.target
  // now event.target gives us wehre the event is happened so we need to work only when the click happens on .nav__link and when it is on .nav__links then we should do nothing
  // mathcing strategy
  if (e.target.classList.contains('nav__link')) {
    // console.log('LINK');
    const id = e.target.getAttribute('href');
    // console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// here we simply added one big event handler function to the parent element of all the elements we are interested in and then we simply determined where the click event came from and we use the mathcing strategy to ignore click on which we don't want to do nothing
/*
// --------------------194. DOM traversing ----------------
//  Dom traversing is basically walking through the Dom. Which means that we can select an element based on another element. And this is very important because sometimes we need to select elements relative to a certain other element. For example, a direct child or a direct parent element. Or sometimes we don't even know the structure of the Dom at runtime. And in all these cases, we need Dom traversing. And this video is gonna be another very nice reference lecture for you. And so let's now work with this h1 element here, and from here we're gonna go downwards, upwards and also sideways. So let's quickly inspect this element.
// so now we will work with this h1 element and from here we will go downwards upwards left and right.
const h1 = document.querySelector('h1');

// going downwards: child
console.log(h1.querySelectorAll('.highlight'));
// querySelector also work on elements not only on the document
// so this will select all the classes with the name highlight which are the child of h1, and this will work no matter how deep these childs are.
// other highlight elements of the document will not be selected becoz they are not the children of h1 element.

// sometimes we need direct children elements so for that we can use childnodes
console.log(h1.childNodes);
// so this gives us every single node which are the direct children of h1 element
// so we want the element itself so we can use innerHTMl or textContent
// childnodes is not much used so we can use children
console.log(h1.children);
// and this gives us HTML collection which is live collection so it's updated so here we get only three elements which are inside of the h1 element
// and this works only for the direct children

// now there's also first and last element child
// console.log(h1.firstElementChild);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

//Going upwards: selecting parents
// so for direct parents it's very striaghtforward we have parentnode and it's similar to childnode.
console.log(h1.parentNode);
console.log(h1.parentElement);
// most of the time we need the parent element which is not the direct parent, we need to find the parent element no matter how far away it's in the dom tree and for that we have closest method
h1.closest('.header').style.background = 'var(--gradient-secondary';
// so we are gonna use this method for event delegation
// so if this selector here actually mathces the element on which we are calling closest then that's actually the element that's gonna be returned.

// so we can think of closest here as basically the opposite of the querySelector, so both recieve query string as an input but queryselector find children no matter how deep they are in the dom tree and closest mehtod finds parents no matter how far up in the dom tree
h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways: Selecting siblings
// and for some reasons we can only access direct siblings
// so basically only the previous and the next one
console.log(h1.previousElementSibling);
// here h1 is the first child of the parent so previous sibling should be null

console.log(h1.nextElementSibling);

// and like the nodes we also have previoussibling and next sibling but most of the time we work with elements like previouselementsibling

// and if we need all the sibling and not just the prevous or the next then we can use the trick of moving up to the parent element and then read all the children from there
console.log(h1.parentElement.children);
// h1.parentElement gives direct parent and on that we call for all the children of that parent
// so this html collection is an iterable which we can spread into an array
// comparison between elements is fine
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) {
    el.style.transform = 'scale(0.5)';
  }
});
*/

// -------------------------------------195. BUILDING A TABBED COMPONENT ----------------------------
// When you click on a tab component the contents below will be changed accordingly. each tab has it's own content area

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// tabs.forEach(el => el.addEventListener('click', () => console.log('TAB')));
// instead use event delegation then doing the above.
//So taking all the tabs and then on each of them we could attach an event handler. So for example, like this. So for each, because we want to do it on each of them, so we get then each tab and then tab.addEventListener click.
//  Now, however, as we already learned in the last video doing this here is a bad practice because what if we had like 200 tabs? Then we would have 200 copies of this exact callback function here and that would simply slow down the page. So that's not at all desirable.

// And so let's get rid of this and one more time, use events delegation. And remember that for event delegation, we need to attach the event handler on the common parent element of all the elements that we're interested in. And in our case, that is this tabs container, right?

tabsContainer.addEventListener('click', function (e) {
  // const clicked = e.target;
  // const clicked = e.target.parentElement;
  // here the problem with this is that when we click the span we get the button but when we click the button we get it's parent that is the container
  // so  we will use the closest here for the event delegation for moving up the dom tree
  const clicked = e.target.closest('.operations__tab');
  // here we are getting null when clicking outside the button becoz null is the result of closest method when there is no matching parent element to be found.
  // here I will be creating a gaurd class, so it's basically an if statement which will return early if some condition is matched, so if theres nothing clicked then we want to immediately finish the function.

  // here the problem which we are facing is that when ever we are cliking outside of the space apart from buttons then it is also getting captured in the event target.
  //so here we need to find a way to capture the button element whenever we click the span element here

  // console.log(clicked);
  // here we have the data attributes on the button that helps us decide whose content should be displayed in accordance with the tab.

  // Gaurd function
  if (!clicked) return;
  // this is the more modern way of writing if(condition == true) then do this and put all other code inside the block

  // adding the active class on the clicked button

  // clicked.classList.add('operations__tab--active');
  // removing the active class from all other buttons apart from the button which has been clicked.

  // so the solution to this is to remove the active class from all the tabs first every time when a certain button is pressed and simply add the class then to the button which is pressed.
  tabs.forEach(el => el.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  // now we will be activating the content area itself

  // now the information about which content area should be displayed is present on the data attribute
  // console.log(clicked.dataset.tab);
  // document
  //   .querySelector(`.operations__content--${clicked.dataset.tab}`)
  //   .classList.add('operations__content--active');

  // so here all of the tabs which are being tabed are acctivated so we should deactivate the other content areas
  // using the same approach that we used for the tabs.
  tabsContent.forEach(el => el.classList.remove('operations__content--active'));

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// ---------------------------196. Parsing arguments to Event handlers ---------------------

// HERE we will see how to pass arguments into event handler functions
// here we want to create an animation of focusing highlighting the link on which there  is a mouse hover or menu fade animation
// now as we alreadyy know we don't have to attatch event handlers to each of these links instead we should go for event delegation
// And so let's actually use this entire navigation here as our parent container on which we will handle the event that is gonna bubble up from the links. So keep in mind that all of this works because events bubble up from their target. So, let's select the navigation here and store it in a variable.querySelector('.nav'). Okay. And actually, let me put this here at the very top because we are gonna need this a bit later. And it is a good practice to have all of these at the top. And the same, actually here. So why not have all of the selections right at the top? That makes it a bit easier to understand the whole file. Okay?

// MENU FADE ANIMATION
const nav = document.querySelector('.nav');
// nav.addEventListener('mouseover', function (e) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     // now we need to select all the oter links apart from this link, and we can do that by going to the parent and then selecting children from there.
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');

//     // console.log(link);
//     // console.log(siblings);
//     // console.log(logo);
//     // making the links fade out
//     siblings.forEach(el => {
//       if (el !== link) {
//         el.style.opacity = '0.5';
//       }
//       logo.style.opacity = '0.5';
//     });
//   }
// });
//mouseover is similar to mouseenter where,  mouseenter event doesn't bubble
// the opp.of mouseenter is mouseleave and the opp. of mouseover is mouseout.
// there are basically opp. events of mouseenter and mouseover and we use it to undo what we do on the hovor

// now we have mouseout event so to undo what we did above.
// nav.addEventListener('mouseout', function (e) {
//   const link = e.target;
//   const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//   const logo = link.closest('.nav').querySelector('img');
//   siblings.forEach(el => {
//     if (el !== link) {
//       el.style.opacity = 1;
//     }
//     logo.style.opacity = 1;
//   });
// });

// SO MAKING OUR CODE LITTLE BIT DRY
// SO REFACTORING WORKS BY CREATING A NEW FUNTION
const handleHover = function (e) {
  // console.log(this);

  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = this;
      }
      logo.style.opacity = this;
    });
  }
};

// nav.addEventListener('mouseover', handleHover);
// nav.addEventListener('mouseout', handleHover);
// here in the handlehover funciton we need to find a way to pass in the event target and the opacity
// so here we can't directly write handleHover(e, 0.5); becoz this will resul in a value and we get error that's another thing becoz e is not defined here ,
// but so to say we can paas in the value here becoz the event handler expects a function and passing a function like function() will return us the value.

// ** the solution to this problem is to have a callback function here.
// this works because we are calling the function manually and as soon as js executes this function value.
// nav.addEventListener('mouseover', function (e) {
//   handleHover(e, 0.5);
// });

// nav.addEventListener('mouseout', function (e) {
//   handleHover(e, 1);
// });

// now we can use event better approach than this is to remove these anonymous function calls from here. we can use the bind method here

// bind method creates a copy of the function it is called on and it will set the this keyword in this function call to whatever value that we pass into bind

// passing argument into our handler function

nav.addEventListener('mouseover', handleHover.bind(0.5));
// remember bind returns a new function
nav.addEventListener('mouseout', handleHover.bind(1));
//and also this keyword is equal to the current target
// So any handler function like this one can only ever have one real argument. And so, in this case, can only ever have one real parameter, and that is the event. But if we want to pass additional values into the handler function, then we need to use the disk keywords, like we just did here. And if we wanted multiple values, then we could of course, pass in here like an array or an object instead of just one value. So this is kind of a workaround into the fact that the handler function can only take one argument. So, it's really nice effect and as I said in the beginning, it also taught us how we can pass arguments, essentially, into handler functions.
/*
//  ---------------------197. Implementing a sticky navigation: The Scroll Event ----------------

// STICKY NAVIGATION : means navigation bar is attatched to the top of the page while we scroll the screen up or down

//sticky navigation
// we will be using scroll event now, it is available on window and this event will be fired on each time we scroll the page.
// window.addEventListener('scroll', function (e) {
//   // console.log(e);
//   console.log(window.scrollY);
// });
// so the scroll event is not very efficient and it should be avoided.
// this window.scrollY is on the window object and not on the event so we get the current scroll position, so this position is basically from the point in the viewport to the very top of the page
// to make the navigation sticky we will add teh sticky class now the question is when exactly should the navigation become sticky so it should happen as soon as we reach the first section

// getting the position of section1
const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);
window.addEventListener('scroll', function () {
  console.log(window.scrollY);
  if (window.scrollY > initialCoords.top) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});

// it works just fine but using the scroll event for performing a certain action at a certain position fo the page is bad and is really not the way to go, that is because the scroll event fires all the time no matter how small the change is here in the scroll so that makes for a pretty bad performance and especially on mobile
*/
// ---------------------198. Implementing a sticky navigation: The Intersection Observer API ----------------
// we will use the Intersection Observer API which is better way for implementing a sticky navigation which is a better approach
// Well, this API allows our code to basically observe changes to the way that a certain target element intersects another element, or the way it intersects the viewport.
// we wil start by creating a new Intersection Observer and in here we need to pass a callback function and an object of options which we will do later.
// we will use this observer to observe a certain target element
// const obsCallback = function (entries, observer) {
//   // so this callback function will be called each time that the observed element, so our target element here, is intersescting the root element at the threshold that we defined
//   // this function will be called with two arguments: entries, and the observer object itself
//   // these entries here are actually an array of the threshold entries
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null,
//   // we are looking for the viewport becoz we have set the root to null
//   // threshold: 0.1,
//   // we only get the intersection when the threshold is reached that in this case is 10%
//   // now I am gonna specify different threshold values here by passing in an array of threshold
//   threshold: [0, 0.2],
//   // 0 means here our callback will trigger each time that the target element moves completely out of the view and also as soon as it enter the view and that's because the callback func. will be called when the threshold is passed when moving into the view and when moving out of the view.
//   // and putting 1 here means that the callback will only be called when the target is 100% visible in the viewport
// };
// // so this options object needs a root property and this root is the element that this target is intersecting
// // this threshold is the percentage of obstruction that this observer callback is called

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

// So in the current example, whenever the first section, so our target here, is intersecting the viewport at 10%, so the viewport, because that's the root, and 10% because that's the threshold. So whenever that happens, then this function here will get called and that's no matter if we are scrolling up or down, all right? And this function will get called with two arguments, and so we can specify them here, and that's the entries and the observer object itself. All right, so this object here basically will also get passed into the callback function, all right? Now this case, we're only interested in the entries, but sometimes using the observer is also useful. Now we can have actually multiple thresholds, so here we can have an array, and I will do that in a minute, and so these entries here are actually an array of the threshold entries, okay, and so in this case again, there's only one element there, but let's create a more general function already which basically loops over these entries so that we can take a look at all of them. And so let's just do that, so basically, simply log them to the console, and that will already be good enough for us to take a look at how this all works. So entry, and so you see I'm using an arrow function here, but of course any other function would work just the same. Let's give it a save now, and you see that already, we get an intersection observer entry, and so that is this entry here. And so this is not really interesting yet, because this is just the first one that we got and we see that the ratio here is at zero, but let's see in a second what that actually means. So I will start scrolling here, and you see that now we actually got our first real entry here, which appeared here because our target element came into the viewport. So our target element is this whole h1 that's down here, and so you see that it started intersecting the viewport, okay?

// we want our navigation to be sticky when the header moves completely out of the view
// so this time we are going to observe the header element.

// header is already selected up in the document.
// const header = document.querySelector('.header');

// here now we will create our observer for observing the header
// creating our callback function for stickyNav
// calculating the height of the nav dynamically
const navHeight = nav.getBoundingClientRect().height;

// console.log(navHeight);

const stickyNav = function (entries) {
  // as a second argument I am not specifying header observer because I don't need it here.
  // since there is only one threshold so I don't need to loop over it, so we will get the first one using destructuring.
  const [entry] = entries;
  // same as writing.
  //   const [entry] = entries[0];
  // console.log(entry);
  // now creating the logic for adding and removing classes
  // nav.classList.add('sticky');
  // so it's initially applied bcoz our target element is intersecting the root
  // so we are interested in only when the header is not intersecting the viewport is when we want to add the sticky class, and when we are intersecting we should remove the sticky class
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
  // Now I want to make the sticky navigation work better
  // that is it should happen when the distance between the start of the section and the viewport here is just the same as the navigation and just like this the navigation doesn't overlap this section here right in the begining, so here the navigation befores the first section start
  // so we can do it by specifying the root margin property on the options object, here specifying 90px means its a box of 90px that will be applied outside of our target element.
  // +90 means the header was 90px extended from the first section similary -90px means header ended 90px before the first section
};
const headerObserver = new IntersectionObserver(stickyNav, {
  // here we need a callback function which we are calling stickynav and the options which I am creating right here.
  root: null,
  threshold: 0,
  // so I am interested in showing the sticky navigation as soon as this header scrolls completely out of the view, so it's the threshold value of 0
  // so when 0 % of the header here is visible then we want something to happen
  // specifying the root margin
  // rootMargin: '-90px',
  // now the navigation appeared exactly 90 pixels before the threshold was actually reached.
  // now we can also calculate that -90px dynamically using the getboundingclientrect
  // passing the dynamically calculated nav height using the template literal
  rootMargin: `-${navHeight}px`,
});

// then I will use the header observer to observe the header.
headerObserver.observe(header);

// ------------------------------------- 199. REVEALING ELEMENTS ON SCROLL ----------------------------------------

// here we are gonna use intersection observer api to reveal elements as we scroll close to them.
// so here we will be revealing each section as we approach it.
// so the animation basically comes from the css so we will achieve it by adding a class and we will do that using the intersection observer api
// first we will add the section--hidden class to each of the section now all of them would be hidden and we want them to be visible as soon as we approach them. so our job is to remove this class as we approach each of these section.

// REVELEAING SECTION
// so here we want to observe all the four section actually in this case and it's indeed possible to observe them all using the same observer, so let's select all sections and then we will observe these as multiple targets using the observer that we just created here.
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  // so as the target is intersected we want it to be visible
  // here also we want to know that which of the section has actually intersected the viewport and that we can get with the help of target which contains the id.
  // entry.target.classList.remove('section--hidden');
  // so here basically we can't see the effect on the first section but rest works just fine, so the reason for that is the first entry that always gets printed in the begining, so it's not intersecting so we will use that as our advantage, so we only want to trigger when the target is intersecting.
  if (!entry.isIntersecting) {
    return;
  } else {
    entry.target.classList.remove('section--hidden');
    // we can do a little improvement here is to unobserve these sections becoz you see as you keep scrolling the observer keeps observing the section, but infact they are no longer necessary as we already did all the work so now we can unobserve
    observer.unobserve(entry.target);
  }
};

const sectionObserver = new IntersectionObserver(revealSection, {
  // here we will pass in the object of options
  // root should be equal to the viewport
  root: null,
  // we will set the threshold to something greater than 0 because we don't want to show the section right as it enters the viewport, but a little bit later.
  threshold: 0.15,
});

// looping over the nodelist of section using foreach

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // and since we are looping over all the sections it would be probably a better idea to add the section hidden class here, so not doing manually but adding it through the js
  section.classList.add('section--hidden');
});

// ------------------------------------- 200. LAZY LOADING IMAGES ----------------------------------------
// so one of the most important things while building website is performance and images have by far the biggest impact on page landing and it's very important that images should by optimized on any page.
// and for that we can use a strategy called lazy loading images.
// so here as we approach the images it starts to load and once it's finished it will get displayed and the placeholder which was there in the beginning gets replaced
// so the main ingreadient to this lazy loading strategy is that we have a very low resolution image which is very small and which is loaded right in the beginning
// so inspecting the image it's really small and displayed as 200x120 and it's only 16kb while the real one is 0.5mb so that's a huge difference and that image we then reference here in the data-src attribute that is digital.jpg
// it's one of the special data attribute that we can do ourselves

// idea: as we scroll to one of these low resolution images we will then replace this low resolution image with the one that is specified in the data-src attribute and then we will also remove this class of lazy-img which makes this image blurred because witout this filter the image will look really terrible because it too small

// LAZY LOADING IMAGES
// so here we will only select the images that contains the data-src attribute.
const imageTarget = document.querySelectorAll('img[data-src]');
// console.log(imageTarget);

// Creating our callback function
const loadImg = function (entries, observer) {
  // we have only one threshold so only one entry
  const [entry] = entries;
  console.log(entry);
  // so here our events will be fired a little bit early becoz of the section--hidden class that we have added and it has translated 8rem down to y axis
  // so here even if we are not intersecting still the events are getting fired so we need to stop that
  if (!entry.isIntersecting) {
    return;
  } else {
    // Replace src with data-src
    entry.target.src = entry.target.dataset.src;
    // removing the class right away which is bad practice here
    // entry.target.classList.remove('lazy-img');
    // we also need to remove the class that adding the blurry filter.
    // [solution]
    // load event is just like any other event we can listen for that event and then do something.
    entry.target.addEventListener('load', function () {
      entry.target.classList.remove('lazy-img');
    });
    observer.unobserve(entry.target);
  }
};
// Now we will create our imgae observer

const imgObserver = new IntersectionObserver(loadImg, {
  // here will be our options object.
  root: null,
  threshold: 0,
  //so now I want our images to load little bit before reaching them becoz I don't want our user to know that we are lazy loading them, so we can do that by specifying the negative root margin here.
  rootMargin: '200px',
});

// using the foreach to loop and observe each image.
imageTarget.forEach(img => imgObserver.observe(img));

// [solution to remove the blur effect] : So, that's the lazy image class. Now, how do we do that? Well, it's a little bit tricky because this replacing of the src attribute actually basically happens behind the scenes. So JavaScript finds the new image that it should load and display here. And it does that behind the scenes. And once it's finished loading that image it will emit the load event. And the load event is just like any other event. And so we can just listen for it and then do something so on that image. So on that image, so that's entry.target, we can do, addEventListener, and listen for the load event. And actually, let me show you why it is important that we do this. So let's say that we removed that lazy image class right away. So entry.target.classList.remove lazy-img. Let's scroll up here, reload. And then, well, in this case, the loading happens so fast that we don't even see a problem. Maybe we can change that here in the network tab. So this is a completely new tab but what we can do here is to simulate or speed. So this is a bit too big here, actually, I guess. So I'm not used to the size, Let me make it a little bit smaller. So let's change the tier to fast or to slow 3G. And maybe then, we can see what happens. So it's not faking that these images are loading really slow. So did you see them here blurred now? So it's really blurred, you see, but we already removed the filter. And so, here you can see how the image is loading basically in the background. And so it's doing that really slow now because we said that we are on a slow network here and now you see it's finished here and now the original image is being displayed. So, hopefully you could see that. I'm not sure if the resolution of the video is gonna be good enough to see it but I did for sure see it.

// ------------------------------------- 201. BUILDING A SLIDER COMPONENT: PART 1 ----------------------------------
