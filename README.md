



# @kovarike/cocc
Generation of token's and id's.

The system returns three functions Toke, Id and Uid . 


[![NPM](https://img.shields.io/npm/v/@kovarike/cocc.svg?logo=npm)](https://www.npmjs.com/package/@kovarike/cocc)
![Uses TypeScript](https://img.shields.io/badge/Uses-Typescript-294E80.svg)

## Installing

```shell
npm i @kovarike/cocc

# If you're using NPM:
# npm install @kovarike/cocc
```

## Basic Usage

Just call one of the `{Token, Id, Uid}` functions after importing them:

```typescript
import {Token, Id, Uid} from '@kovarike/cocc'

console.log(Token()) // auth_@/dYm&35secn!jNAoT%Gq$zwF4gB2fçLMXkUpSQ@lO6WJ0Hu?ZaiVDKItv81bP7y*x/#9EhC
console.log(Id()) // auth_#/71$402@#69853 
console.log(Uid()) // auth_$/4159623708 
```


```javascript
const {Id, Token, Uid} = require("@kovarike/cocc")

console.log(Token()) // auth_@/dYm&35secn!jNAoT%Gq$zwF4gB2fçLMXkUpSQ@lO6WJ0Hu?ZaiVDKItv81bP7y*x/#9EhC
console.log(Id()) // auth_#/71$402@#69853 
console.log(Uid()) // auth_$/4159623708 
```
## API

### `@kovarike/cocc`

`Token` — With each call, the function returns a Token with a prefix of `auth_@/`.

`Id` — With each call, the function returns a Id with a prefix of `auth_#/`.

`Uid` — With each call, the function returns a Uid with a prefix of `auth_$/`.

#### Description

```typescript
const token: string = ValidationToken()
function Token(): TypeToken | string {
  const setSequence: Set<string> = new Set();
  const auth: string = Authenticate(token, setSequence)

  return auth; // auth_@/dYm&35secn!jNAoT%Gq$zwF4gB2fçLMXkUpSQ@lO6WJ0Hu?ZaiVDKItv81bP7y*x/#9EhC
}




const id: string  = ValidationID();
function Id():TypeId | string {
  const setSequence: Set<string> = new Set();
  const auth: string = AuthenticateID(id, setSequence)
  return auth; // auth_#/71$402@#69853 
}



const uid: string  = ValidationUID()
function Uid():TypeUid | string {
  const setSequence: Set<string> = new Set();
  const auth: string  = AuthenticateUID(uid, setSequence)
  return auth; // auth_$/4159623708 
}

```

Here we receive the (hash) and add the prefix to authenticate each `Token, Id and Uid` and ensuring that it will be unique

```typescript
import { ValidationToken } from "../setValidation/validationToken"

function AuthenticateToken(sequence: string): string {
    return "auth_@/" + sequence; 
}

export function Authenticate(sequence: string, setSequence: Set<string>): string {
    const token: string = ValidationToken();
    const AuthToken: string = AuthenticateToken(token);

    if (setSequence.has(AuthToken)) {
        return Authenticate(sequence, setSequence);
    } else {
        setSequence.add(AuthToken);
        return  AuthToken;
    }
}


import { ValidationID } from "../setValidation/validationID";

function IsAuthID(sequence: string): string {
    return "auth_#/" + sequence; 
}

export function AuthenticateID(sequence: string, setSequence: Set<string>): string {
    const ID: string = ValidationID();
    const authID: string = IsAuthID(ID);

    if (setSequence.has(authID)) {
        return AuthenticateID(sequence, setSequence);
    } else {
        setSequence.add(authID);
        return  authID;
    }
}


import { ValidationUID } from "../setValidation/validationUID";

function IsAuthUID(sequence: string): string {
    return "auth_$/" + sequence; 
}

export function AuthenticateUID(sequence: string, setSequence: Set<string>): string {
    const UID: string = ValidationUID();
    const authUID: string = IsAuthUID(UID);

    if (setSequence.has(authUID)) {
        return AuthenticateUID(sequence, setSequence);
    } else {
        setSequence.add(authUID);
        return  authUID;
    }
}
```

## Authors and License

[kovarike](https://github.com/kovarike) and [project](https://github.com/kovarike/cocc).

MIT License, see the included [MIT](https://github.com/kovarike/cocc/blob/master/LICENSE) file.