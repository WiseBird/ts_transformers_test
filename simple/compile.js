const ts = require('typescript');
const uppercaseTransformer = require('./uppercase-transformer');
const fileName = `./src/module.ts`;

const program = ts.createProgram([fileName], {module: 'commonjs', target: ts.ScriptTarget.ES5});

const transformers = {before: [uppercaseTransformer], after: []};
const {emitSkipped, diagnostics} = program.emit(undefined, undefined, undefined, false, transformers);

if (emitSkipped) {
    throw new Error(diagnostics.map(diagnostic => diagnostic.messageText).join('\n'));
}