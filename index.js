// @flow
'use strict';

const babel = require('@babel/core');

/*::
export type File = {
  ast: Object,
  code: string,
  opts: Object,
  parserOpts: Object,

  path: Object,
  scope: Object,

  metadata: Object,

  addImport(source: string, imported: string, name?: string): Object,
  buildCodeFrameError(node: Object, msg: string, Error?: typeof Error): Error,
  mergeSourceMap(map: Object): Object,
  parse(code: string): Object,
  addAST(ast: Object): void,
  transform(): any,
  wrap<T>(code: string, cb: () => T): T,
  addCode(code: string): void,
  parseCode(code: string): void,
  shouldIgnore(): boolean,
  generate(): Object,
};
*/

function createFile(
  code /*: string */,
  opts /*: Object */
) /*: File */ {
  let ast = babel.parseSync(code, opts);
  return new babel.File(opts, { code, ast });
}

module.exports = createFile;
