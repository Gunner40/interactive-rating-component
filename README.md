# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

A challenge to build out an interactive rating component and get it looking as close to the design as possible.

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./Screenshot-interative-rating-component.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

Studied the design and came up with a plan for the HTML structure, the CSS class names using BEM, and also how to make the interactive components work with JS.

### Built with

- Semantic HTML5 markup
- CSS custom vaiables
- Flexbox
- Mobile-first workflow

### What I learned

I originally used a div with a nested span for the each rating component. I then changed this to use a html form with a button input for each rating button, and a submit input for the button. I felt this worked better.

```html
I revised html forms

<form class="card-start__form">
  <input type="button" value="1" />
  <input type="button" value="2" />
  <input type="button" value="3" />
  <input type="button" value="4" />
  <input type="button" value="5" />
  <input type="submit" value="Submit" class="card-start__form__submit-button" />
</form>
```

```js

I used following js code to add an event listener to each input. querySelectorAll returned a nodelist which I iterated through like an array using forEach().

const inputs = document.querySelectorAll("input[type=button");

let activeInput = 0;

inputs.forEach((input) => {
  input.addEventListener("click", () => {
    activeInput = input.value;
  });
});

```

### Continued development

Continue to brush up an HTML CSS and JS. Continue with flexbox but start to think about incorporating CSS Grid in future projects. I need to re-learn the CSS pre processor SASS before i use it. And i previously learned React, but i need to rivise it before i attempt to use it.

### Useful resources

- [Example resource 1](https://developer.mozilla.org) - This helped me for looking up things I wasn't sure about.
- [Example resource 2](https://www.w3schools.com/) - Same as above.

## Author

- Name - Paul Ryan
- Frontend Mentor - [@Gunner40](https://www.frontendmentor.io/profile/Gunner40)
