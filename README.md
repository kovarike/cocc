# @kovarike/cocc

The system uses a combination of binary, bytes and hexadecimals to generate the sequence that gives the base. using RegEx to define patterns when generating the Id and Token.  


[![NPM](https://img.shields.io/npm/v/@kovarike/cocc.svg?logo=npm)](https://www.npmjs.com/package/@kovarike/cocc)
![Uses TypeScript](https://img.shields.io/badge/Uses-Typescript-294E80.svg)

## Installing

```shell
npm i binary-uuid

# If you're using NPM:
# npm install binary-uuid
```

## Basic Usage

Just call one of the `{Token, Id}` functions after importing them:

```typescript
import {cocc} from '@kovarike/cocc'

console.log(cocc.Token()) // Xpyci2fycXsbfNhVvSY9IwLejSuKqQZpbt1b 
console.log(cocc.Id()) // 008a0326-b64f-427a-a654-82628fc3e033
 
```


```javascript
const {cocc} = require("@kovarike/cocc")

console.log(cocc.Token()) // Xpyci2fycXsbfNhVvSY9IwLejSuKqQZpbt1b
console.log(cocc.Id()) // 008a0326-b64f-427a-a654-82628fc3e033
 
```
## API

### `@kovarike/cocc`

`Token` — With each call, the function returns a Token. which follows the Token standard.

`Id` — With each call, the function returns an ID that follows the uuid pattern.


```typescript
export function Token(){
  const set: Set<string> = new Set();
  const token = IsToken({set}) 
  return token; // Xpyci2fycXsbfNhVvSY9IwLejSuKqQZpbt1b
}

export function Id(): string {
  const set: Set<string> = new Set();
  const id  = IsId({set})
  return id; // 008a0326-b64f-427a-a654-82628fc3e033
}

```

`IsValid` — The IsValid function receives the Id as its first parameter and the Token as its optional second parameter. The function returns a boolean (true or false) to indicate whether it is following the pattern established in the RegEx.

```typescript
export function IsValid(params: string, value?:string): boolean {
  if (value) {
    return (regex.v4.test(params) || regex.v5.test(params)) && regex.token.test(value);
  } else {
    return regex.v4.test(params) || regex.v5.test(params) || regex.token.test(params);
  }
}

```

```typescript
import {cocc} from '@kovarike/cocc'

const uuid = cocc.Id();
cocc.IsValid(uuid);

const token = cocc.Token();
cocc.IsValid(token);

cocc.IsValid(uuid, token); 

```

## Authors and License

[kovarike](https://github.com/kovarike) and [project](https://github.com/kovarike/cocc).

MIT License, see the included [MIT](https://github.com/kovarike/cocc/blob/master/LICENSE) file.