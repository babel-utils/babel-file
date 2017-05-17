# babel-file

> Easily create a Babel File object

- Constructs File object
- Adds/parses code with nice errors

```js
import createFile from 'babel-file';
import createBabylonOptions from 'babylon-options';

const file = createFile(code, {
  filename: 'filename.js',
  parserOpts: createBabylonOptions({
    stage: 2,
  }),
});

file.code;
file.ast;
file.path;
```

Accepts [all the same options](https://github.com/babel/babel/blob/e155859b1253ad2665f427455eb236c9a2f6cd76/packages/babel-core/src/config/option-manager.js#L36-L75) as the normal Babel File object.
