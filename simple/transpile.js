const ts = require("typescript");
const uppercaseTransformer = require('./uppercase-transformer');

let output = ts.transpileModule("class Foo { templateString = 'some value'; }", {
    compilerOptions: { target: ts.ScriptTarget.ES5 },
    transformers: {
        before: [uppercaseTransformer]
    }
});

console.log(output.outputText);