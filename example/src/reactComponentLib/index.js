/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var Wrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 10px;\n  color: red;\n"], ["\n  padding: 10px;\n  color: red;\n"])));
var Test = function (_a) {
    var text = _a.text;
    return React.createElement(Wrapper, null, text ? text : 'Test Component');
};
var templateObject_1;

var H1 = styled.h1(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  font-size: 1.5em;\n  text-align: center;\n  color: palevioletred;\n"], ["\n  font-size: 1.5em;\n  text-align: center;\n  color: palevioletred;\n"])));
var templateObject_1$1;

var myDefaultTheme = {
    background: 'dodgerblue',
    main: 'palevioletred',
};
function applyDefaultTheme(_a) {
    var _b = _a.theme, theme = _b === void 0 ? {} : _b, props = __rest(_a, ["theme"]);
    // Since styled-components defaults the `theme` prop to an empty object
    // inside of the styled component if a ThemeProvider is not present,
    // we check against the number of keys.
    return __assign(__assign({}, props), { theme: Object.keys(theme).length === 0 ? myDefaultTheme : theme });
}

var Button = styled.button.attrs(applyDefaultTheme)(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border-radius: 3px;\n\n  /* Color the border and text with theme.main */\n  color: ", ";\n  border: 2px solid ", ";\n"], ["\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border-radius: 3px;\n\n  /* Color the border and text with theme.main */\n  color: ", ";\n  border: 2px solid ", ";\n"])), function (props) { return props.theme.main; }, function (props) { return props.theme.main; });
var templateObject_1$2;

export { Button, H1, Test };
