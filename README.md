# quark-package-starter

Simple repository to start a new `quark` package.

___This package is part of `quark` framework but it can be used independently.___

## Installation

```sh
npm install quark-simple --save
```

## Usage

### Basic

Basic example.

```js
import Simple from 'quark-simple'

const simple = new Simple()
simple.test()
```

## API

See [https://fm-ph.github.io/quark-package-starter/](https://fm-ph.github.io/quark-package-starter/)

## Build

To build the sources with `babel` in `./lib` directory :

```sh
npm run build
```

## Documentation

To generate the `JSDoc` :

```sh
npm run docs
```

To generate the documentation and deploy on `gh-pages` branch :

```sh
npm run docs:deploy
```

## Testing

To run the tests, first clone the repository and install its dependencies :

```sh
git clone https://github.com/fm_ph/quark-package-starter.git
cd quark-signal
npm install
```

Then, run the tests :

```sh
npm test
```

To watch (test-driven development) :

```sh
npm run test:watch
```

For coverage :

```sh
npm run test:coverage
```

## License

MIT [License](LICENSE.md) © [Patrick Heng](http://hengpatrick.fr/) [Fabien Motte](http://fabienmotte.com/) 
