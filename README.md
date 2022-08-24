# eCommerce store

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Screenshot

![](./src/images/screenshot.png)

### Links

- Live Site URL: [Add live site URL here](https://ilebo-stack.github.io/ecommerce_store/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS custom properties
- Classnames utility
- Flexbox
- CSS Grid
- Desktop-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

I learned that as a front-end developer you may notice during development of a site, that the site might lack elements that deminishes user experience and that I should be responsible for improvising the page user experience.

```js
proudOfThisFunction(newProduct: Product) {
    if (this.state.productsInTheBag.some(product => newProduct.id === product.id)) {
      this.setState(prevState => ({
        ...prevState,
        productsInTheBag: prevState.productsInTheBag.map(product => {
          if (product.id === newProduct.id && product.quantityInStock > 0) {
            return {
              ...product,
              quantityInCart: product.quantityInCart + 1,
              quantityInStock: product.quantityInStock - 1,
            }
          }

          return product;
        }),
      }))

      return;
    }

    this.setState(prevState => ({
      ...prevState,
      productsInTheBag: [...prevState.productsInTheBag, newProduct].map(product => {
        if (product.id === newProduct.id) {
          return {
            ...product,
            quantityInCart: product.quantityInCart + 1,
            quantityInStock: product.quantityInStock - 1,
          }
        }

        return product;
      }),
    }))
  }
```

### Useful resources

- [Classnames utility](https://www.npmjs.com/package/classnames) - This utility helped me in conditionallay adding classes without having to use the ternary operator.

## Author

- LinkedIn - [Lebogang Mogane](https://www.linkedin.com/in/lebogang-mogane-283004170/)
