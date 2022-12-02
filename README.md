![numen](https://repository-images.githubusercontent.com/573596796/e4cc4804-27be-4bff-8ab7-be56beac43ef)

![GitHub package.json version](https://img.shields.io/github/package-json/v/dvlden/numen?color=86c7ff&style=flat-square)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@dvlden/numen?color=%2386c7ff&style=flat-square)

# Numen
A utility module that returns correct length of a numerical value. Working with numbers is painful, especially in JavaScript world. Casting a number to a string, then using just `.length` to check the count is not sufficient enough.

> Check test cases if you are interested in every possibility that it handles.

<br>

## Installation

Use your favourite package manager... In my case that's `pnpm`.

```bash
pnpm i @dvlden/numen
```

<br>

## Usage

**Browser**
```ts
import { numen } from '@dvlden/numen'

if (numen(123) === 3) {
  // do something
}
```

**Node**
```ts
const { numen } = require('@dvlden/numen')

if (numen(123) === 3) {
  // do something
}
```
