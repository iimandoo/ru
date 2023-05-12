'use strict';

var React = require('react');

function Button(_a) {
    var children = _a.children;
    return (React.createElement("button", { type: "button" }, children));
}

exports.Button = Button;
