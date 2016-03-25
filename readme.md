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

regs.email().test('me@gmail.com');
//=> true

regs.yeoman().exec('<% var1 %>')[1]
//=> 'var1'
```

<br>

#### Web

```html
<script src="https://rawgit.com/dawsonbotsford/regs/master/bundle.js"></script>
<script>
  alert(regs.trim().exec(' var1 ')[1]);
  //=> 'var1'
</script>
```

<br>

## Supported regexp types

* <a href="#regsyeomanregexpflags">yeoman</a> (`regs.yeoman()`)
* <a href="#regstrimregexpflags">trim</a> (`regs.trim()`)
* <a href="#regsemailregexpflags">email</a> (`regs.email()`)
* <a href="#regsghIssueregexpflags">ghIssue</a> (`regs.ghIssue()`)

<br>

## API

* Each function call returns a `RegExp object` which can then operate on/with.

* Each function call supports (*optionally*) the [official RegExp flags](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) which alter behavior of the search. (ex: 'g' for global or 'i' to ignore case)

<br>

### regs.yeoman([RegExpFlags])

Capture text between `<% %>` or `<%= %>`.

`1` capture group - the value between delimeters.

Example:

```js
regs.yeoman().exec('<% capture this %>')[1];
//=> 'capture this'
```

<br>

### regs.trim([RegExpFlags])

Capture text without surrounding spaces.

`1` capture group - the value between starting and ending spaces.

Example:

```js
regs.trim().exec(' var1 ')[1];
//=> 'var1'
```

<br>

### regs.email([RegExpFlags])

Capture all three parts of an email address. Example:

`3` capture groups -

1. Name before `@`
2. First part of the domain (between `@` and `.`)
3. Domain suffix (`.com`, `.io`, etc.)

Example:

```js
// Simple validation
regs.email().test('name@domain.suffix');
//=> true

// Capture all parts
regs.email().exec('hi@me.io');
//=> [ 'hi@me.io', 'hi', 'me', 'io', index: 0, input: 'hi@me.io' ]
```

<br>

### regs.ghIssue([RegExpFlags])

Capture number following a pound (GitHub issue reference)

`1` capture group - The numeric value of the issue

Example:

```js
regs.ghIssue().exec('#98')[1];
//=> '98'
```

<br>

## Similar

* [Big list of JavaScript Regular Expressions](https://regex101.com/#javascript)
* [Perl and PHP Regular Expressions](https://gist.github.com/nerdsrescueme/1237767)

<br>

## License

MIT © [Dawson Botsford](http://dawsonbotsford.com)
