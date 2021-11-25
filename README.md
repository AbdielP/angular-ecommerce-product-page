# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

![](./captures/desktop.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://abdielp.github.io/angular-ecommerce-product-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Angular](https://angular.io/) - JS Framework
- Typescript

### What I learned

1. I learned how to make a gallery without the use of any library.
2. I practiced the use of shared components, sharing and emitting data between components with event emitters and observables.

```html
<app-navbar (toggle_sidenav)="toggleSidenav($event)" [cartSize]="eventCart.asObservable()"></app-navbar>
```

```ts
toggleSidenav(toggle: boolean): void { 
  this.toggle_sidenav.emit(toggle);
}

subscribeCartSize(): void {
  this.eventSubscription = this.cartSize.subscribe((cart: number) => {
    this.cart = cart;
  })
}
```

Also sharing data between component using Input() and Output() decorators.

```html
 <p class="paragraph">$125.00 x {{cartItems}} <strong class="paragraph__strong">${{cartTotal() | number : '1.2-2'}}</strong></p>
```

```ts
@Input() cartItems: number = 0;
```

3. Angular Material has been used to display the lightbox, cart and sidenav.

![](./captures/desktop.png)

4. Mobile design use same gallery shared component.

![](./captures/mobile.png)

## Author

- Frontend Mentor - [@AbdielP](https://www.frontendmentor.io/profile/AbdielP)
- GitHub - [@AbdielP](https://github.com/AbdielP)
- Twitter - [@abdiel262](https://twitter.com/Abdiel262)

