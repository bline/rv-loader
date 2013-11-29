# Ractive template loader for webpack

## Usage

``` javascript
var template = require("rv!handlebars!./file.hb");
// => returns file.hb template content as template function
```

Don't forget to polyfill `require` if you want to use it in node.
See `webpack` documentation.

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
