# regs
[![npm version](https://img.shields.io/npm/v/regs.svg)](https://www.npmjs.com/package/regs)
[![npm download count](http://img.shields.io/npm/dm/regs.svg?style=flat)](http://npmjs.org/regs)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

  <table>
    <thead>
      <tr>
        <th>Linux & OSX</th>
        <th>Windows</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td align="center">
          <a href="https://travis-ci.org/dawsonbotsford/regs"><img src="https://api.travis-ci.org/dawsonbotsford/regs.svg?branch=master"></a>
        </td>
        <td align="center">
          <a href="https://ci.appveyor.com/project/dawsonbotsford/regs"><img src="https://ci.appveyor.com/api/projects/status/36mom3aoarhi72jx?svg=true"></a>
        </td>
      </tr>
    </tbody>
  </table>

> Useful regular expressions for JavaScript

<br>

## Install

```
npm install --save regs
```

<br>

## Usage


#### Node


```js
const regs = require('regs');

regs.yeoman()
//=> /<=\s([^=>]*)\s=>/

regs.yeoman('g').exec('<= var1 =>')[1]
//=> 'var1'
```

<br>

#### Web

```html
<script src="https://rawgit.com/dawsonbotsford//master/bundle.js"></script>
<script>
  alert(regs.yeoman()));
  //=> /<=\s([^=>]*)\s=>/
</script>
```

<br>

## Supported regexp types
<a href="#regsyeomanregexpflags">test</a>
* [yeoman](#regsyeomanregexpflags) (`regs.yeoman()`)
* [trim](#regs.trim([REgExpFlags])) (`regs.trim()`)

<br>

## API

* Each function call returns a `RegExp object` which can then operate on/with.

* Each function call supports (*optionally*) the [officially supported RegExp flags](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) which alter behavior of the search. (ex: 'g' for global or 'i' to ignore case)

<br>

### regs.yeoman([RegExpFlags])

Capture text between `<% %>` or `<%= %>`. Example:

```js
regs.yeoman().exec('<= var1 =>')[1]
//=> 'var1'
```

<br>

### regs.trim([RegExpFlags])

Remove surrounding spaces from string. Example:

```js
regs.trim().exec(' var1 ')[1]
//=> 'var1'
```

<br>

## Similar

* [Big list of JavaScript Regular Expressions](https://regex101.com/#javascript)
* [Perl and PHP Regular Expressions](https://gist.github.com/nerdsrescueme/1237767)

<br>

## License

MIT © [Dawson Botsford](http://dawsonbotsford.com)

<br>

---
If you like this, star it. If you want to follow me, follow me.
