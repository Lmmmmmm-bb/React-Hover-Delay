# react-hover-delay

Mouse hover element trigger event after a delay.

[![NPM version][npm-image]][npm-url]
[![dumi](https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square)](https://github.com/umijs/dumi)
[![npm download][download-image]][download-url]
[![npm bundle size][bundle-size-image]][bundle-size-url]

[npm-image]: http://img.shields.io/npm/v/react-hover-delay.svg?style=flat-square
[npm-url]: https://npmjs.org/package/react-hover-delay
[coveralls-image]: https://img.shields.io/coveralls/react-component/menu.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/react-component/menu?branch=master
[download-image]: https://img.shields.io/npm/dm/react-hover-delay.svg?style=flat-square
[download-url]: https://npmjs.org/package/react-hover-delay
[bundle-size-image]: https://img.shields.io/bundlephobia/minzip/react-hover-delay
[bundle-size-url]: https://bundlephobia.com/package/react-hover-delay

## Install

[![react-hover-delay](https://nodei.co/npm/react-hover-delay.png)](https://npmjs.org/package/react-hover-delay)

## Usage

```ts
import { HoverDelay } from 'react-hover-delay';

export default () => (
  <HoverDelay delay={300} onMouseHover={() => console.log('hello')}>
    Hello
  </HoverDelay>
);
```

## Example

local: http://localhost:8000/examples/

online: https://lmmmmmm-bb.github.io/React-Hover-Delay/

## API

### props

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 200px;">name</th>
        <th style="width: 400px;">type</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>delay</td>
          <td>Number</td>
          <td>Delay in milliseconds before the hover event is triggered</td>
        </tr>
        <tr>
          <td>onMouseHover</td>
          <td>(e: MouseHover) => void</td>
          <td>Callback function to be called when the hover event is triggered</td>
        </tr>
    </tbody>
</table>

## Development

```
pnpm install
pnpm dev
```

## License

react-hover-delay is released under the MIT license.
