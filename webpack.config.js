'use strict';

const uppercaseTransformer = require('./simple/uppercase-transformer');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: './bundle.js'
    },
    resolve: {
        extensions: ['.ts']
    },
    module: {
        rules: [
            {
                test: /.ts$/,
                use: {
                    loader: 'awesome-typescript-loader',
                    options: {
                        getCustomTransformers() {
                            return {
                                before: [uppercaseTransformer],
                                after: [],
                            };
                        }
                    },
                },
            }
        ]
    }
};