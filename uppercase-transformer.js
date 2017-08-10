"use strict";

const ts = require("typescript");

module.exports = function uppercaseTransformer(context) {
    let visitor = function (node) {
        if (node.kind === ts.SyntaxKind.StringLiteral) {
            let text = node.text;
            // console.log(text);
            if (text[0] !== '.' && text !== text.toUpperCase()) {
                return ts.createLiteral(text.toUpperCase());
            }
        }
        return ts.visitEachChild(node, visitor, context);
    };
    return function (node) { return ts.visitNode(node, visitor); };
};