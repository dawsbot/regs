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
          <a href="https://ci.appveyor.com/project/dawsonbotsford/regs"><img src="http://www.gravatar.com/avatar/5f66f56cae930eb9ab2cd9e62b8285e6"></a>
        </td>
      </tr>
    </tbody>
  </table>

> descrr

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

regs.yeoman('g').exec('<= var1 =>')
//=> [ '<= var1 =>', 'var1', index: 0, input: '<= var1 =>' ]
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
* yeoman (`regs.yeoman()`)

<br>

## API

### regs.<regexp type>([flags])

Where <regexp type> is one of the supported regex types listed in the [Supported regex types](## Supported-regexp-types) section.

##### flags

*optional*
Type: `string`

#### returns

Type: `RegExp object`

descrr

<br>

## License

MIT © [Dawson Botsford](http://dawsonbotsford.com)

<br>

---
If you like this, star it. If you want to follow me, follow me.
