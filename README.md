# fnkg-keytranslator


Translates the KeyboardEvent.key code (which is the "offical" successor of KeyboardEvent.keyCode) to value common on all browsers.

The KeyboardEvent.keyCode is deprecated according to this source: https://developer.mozilla.org/de/docs/Web/API/KeyboardEvent/keyCode.
If you are using typescript you and are using the keyCode you are probably seeing the 'keyCode is deprecated' message'.

The problem with using the successor KeyboardEvent.key is that its codes different among browsers (see https://caniuse.com/#search=KeyboardEvent.key)
This package provides the function KeyTranslate which will translation any given Event parameter to a uniform 'key' result which
conforms to this standard: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values

The 'key' value can then be used in conjunction with the package ts-key-enum : https://www.npmjs.com/package/ts-key-enum.

# Example

```typescript

import { Key } from 'ts-key-enum';
import { KeyTranslate } from 'fnkg-keytranslator';

...
onKeydown(ev: KeyboardEvent) {
  const tkey = KeyTranslate(ev);
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
...
```
