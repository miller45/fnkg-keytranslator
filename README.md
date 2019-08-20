[![npm](https://img.shields.io/npm/v/fnkg-keytranslator.svg)](https://www.npmjs.com/package/fnkg-keytranslator)
[![CI](https://github.com/miller45/fnkg-keytranslator/workflows/Node%20CI/badge.svg)](https://github.com/miller45/fnkg-keytranslator/actions)
[![codecov](https://codecov.io/gh/miller45/fnkg-keytranslator/branch/master/graph/badge.svg)](https://codecov.io/gh/miller45/fnkg-keytranslator)


# fnkg-keytranslator


Translates the KeyboardEvent.key code (which is the "offical" successor of KeyboardEvent.keyCode) to value common on all browsers.

The KeyboardEvent.keyCode is deprecated according to this source: https://developer.mozilla.org/de/docs/Web/API/KeyboardEvent/keyCode.
If you are using typescript and are using the keyCode you are probably seeing the 'keyCode is deprecated' message'.

The problem with using the successor KeyboardEvent.key, is that the codes differ among browsers (see https://caniuse.com/#search=KeyboardEvent.key)
This package provides the function KeyTranslate which will translate any given Event parameter to a uniform 'key' result which
conforms to this standard: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values

The 'key' value can then be used in conjunction with the package ts-key-enum : https://www.npmjs.com/package/ts-key-enum.

# Example

```typescript

import { Key } from 'ts-key-enum';
import { KeyTranslate } from 'fnkg-keytranslator';

...
onKeydown(event: KeyboardEvent) {
  const tkey = KeyTranslate(event);
  switch (tkey) {
    case Key.ArrowUp:
      // do something when user pressed the directional up key.
      console.log('up');
      break;
    case Key.ArrowDown:
      // do something when user pressed the directional down key.
      console.log('down');
      break;
  }
}
```
