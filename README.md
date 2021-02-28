# dates-in-month

> A nodejs package to get dates in a month in ISO format.

[![NPM](https://img.shields.io/npm/v/dates-in-month.svg)](https://img.shields.io/npm/v/dates-in-month) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save dates-in-month
```

## Usage

- **getDatesInMonth()**
> This method accept object of month and year and return array of dates in the month.

```jsx

ES6
import {getDatesInMonth} from 'dates-in-month'

ES5
var {getDatesInMonth} = require('dates-in-month');

Usage of getDatesInMonth

console.log(getDatesInMonth({month:01,year:1943})); //Output: ['01-01-1943', '02-01-1943', '03-01-1943', ......, '31-01-1943']
console.log(getDatesInMonth({month:01,year:1943,format:1})); //Output: ['01-01-1943', '02-01-1943', '03-01-1943', ......, '31-01-1943']
console.log(getDatesInMonth({month:01,year:1943,format:-1})); //Output: ['1943-01-01', '1943-01-02', '1943-01-03', ......, '1943-01-31']


```

## License

MIT © [David G. Aladeusi](https://github.com/realdavidalad)
