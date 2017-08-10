const ts = require('typescript');
const uppercaseTransformer = require('./uppercase-transformer');
const fileName = `./src/module.ts`;

let program = ts.createProgram([fileName], {module: 'commonjs', target: ts.ScriptTarget.ES5});
let sourceFiles = program.getSourceFiles().filter(sf => !sf.isDeclarationFile);

let transformResult = ts.transform( sourceFiles, [uppercaseTransformer]);

const printer = ts.createPrinter();
let result = printer.printNode(ts.EmitHint.SourceFile, transformResult.transformed[0], sourceFiles[0]);

console.log(result);