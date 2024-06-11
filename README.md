



# @kovarike/cocc
Generation of token's and id's.

The system returns functions Token and Uid . 


[![NPM](https://img.shields.io/npm/v/@kovarike/cocc.svg?logo=npm)](https://www.npmjs.com/package/@kovarike/cocc)
![Uses TypeScript](https://img.shields.io/badge/Uses-Typescript-294E80.svg)

## Installing

```shell
npm i @kovarike/cocc

# If you're using NPM:
# npm install @kovarike/cocc
```

## Basic Usage

Just call one of the `{Token, Uid}` functions after importing them:

```typescript
import {Token, Uid} from '@kovarike/cocc'

console.log(Token()) // 47ljai96dgh523k8b6105ef7c 
console.log(Uid()) // 4159623708579524829 
```


```javascript
const {Token, Uid} = require("@kovarike/cocc")

console.log(Token()) // 47ljai96dgh523k8b6105ef7c 
console.log(Uid()) // 4159623708579524829 
```
## API

### `@kovarike/cocc`

`Token` — With each call, the function returns a Token.

`Uid` — With each call, the function returns a Uid.

#### Description

```typescript
const token: string = ValidationToken()
function Token(): TypeToken | string {
  const setSequence: Set<string> = new Set();
  const auth: string = Authenticate(token, setSequence)

  return auth; // 47ljai96dgh523k8b6105ef7c 
}



const uid: string  = ValidationUID()
function Uid():TypeUid | string {
  const setSequence: Set<string> = new Set();
  const auth: string  = AuthenticateUID(uid, setSequence)
  return auth; // 4159623708579524829 
}

```

Here we receive the (hash) each `Token and Uid` and ensuring that it will be unique.

```typescript
import { ValidationToken } from "../setValidation/validationToken"

export function Authenticate(sequence: string, setSequence: Set<string>): string {
    const token: string = ValidationToken();

    if (setSequence.has(token)) {
        return Authenticate(sequence, setSequence);
    } else {
        setSequence.add(token);
        return  token;
    }
}



import { ValidationUID } from "../setValidation/validationUID";

export function AuthenticateUID(sequence: string, setSequence: Set<string>): string {
    const UID: string = ValidationUID();

    if (setSequence.has(UID)) {
        return AuthenticateUID(sequence, setSequence);
    } else {
        setSequence.add(UID);
        return  UID;
    }
}
```

## Authors and License

[kovarike](https://github.com/kovarike) and [project](https://github.com/kovarike/cocc).

MIT License, see the included [MIT](https://github.com/kovarike/cocc/blob/master/LICENSE) file.