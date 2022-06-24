"use strict";function t(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(require("react"));function e(t,n){void 0===n&&(n={});var e=n.insertAt;if(t&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===e&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}e(".button {\n\tpadding: 0.5rem;\n\tbackground: #f4f4f4;\n\tborder: 1px solid #323330;\n\tcolor: #323330;\n\ttransition: 0.3s ease-in-out;\n}\n.button:hover,\n.button:active {\n\tbackground: white;\n}\n.button:hover {\n\tbox-shadow: 0px 0px 5px 1px rgb(50, 51, 48, 0.1);\n}\n.button:active {\n\tbox-shadow: inset 0px 0px 5px 1px rgb(50, 51, 48, 0.1);\n}\n/* btnType */\n.button.primary {\n\tbackground: #24a0ed;\n\tborder: 1px solid #24a0ed;\n\tcolor: white;\n}\n.button.secondary {\n\tbackground: white;\n\tborder: 1px solid #24a0ed;\n\tcolor: #24a0ed;\n}\n.button.ghost {\n\tborder: 1px solid #f4f4f4;\n\tcolor: gray;\n}\n/* button size */\n.button.button-lg {\n\twidth: 10rem;\n\tfont-size: 1rem;\n}\n.button.button-md {\n\twidth: 8rem;\n\tfont-size: 0.8rem;\n}\n.button.button-sm {\n\twidth: 6rem;\n\tfont-size: 0.5rem;\n}\n/* rounded button */\n.button.button-soft {\n\tborder-radius: 0.2rem;\n}\n.button.button-hard {\n\tborder-radius: 0.4rem;\n}\n/* active state when isActive === true */\n.button.active {\n\tfont-weight: 600;\n}\n/* disabled state when isDisabled === true */\n.button.disabled {\n\tbackground: white;\n\tborder: solid 0.5px lightgray;\n\tcolor: lightgray;\n\tcursor: not-allowed;\n\tbox-shadow: none;\n}\n");e(".label {\n\tfont-size: calc(1rem + 0.1vmin);\n\tmargin: 0.5rem;\n\tpadding: 0.5rem;\n}\n.message {\n\tcolor: black;\n}\n.error {\n\tcolor: red;\n\tfont-weight: 100;\n}\n");exports.Button=function(t){var e=t.label,o=t.className,r=t.btnType,a=t.onClick,d=t.size,l=t.rounded,s=t.isActive,i=t.styles,c=t.isDisabled;return n.default.createElement("button",{className:"button\n\t\t\t\t\t\t".concat(o||null,"\n\t\t\t\t\t\t").concat(r||null,"\n\t\t\t\t\t\t").concat(d?"button-".concat(d):null,"\n\t\t\t\t\t\t").concat("button-".concat(l),"\n\t\t\t\t\t\t").concat(!0===s?"active":null,"\n\t\t\t\t\t\t").concat(!0===c?"disabled":null,"\n\t\t\t\t\t"),disabled:null!=c&&c,onClick:a,style:i},e)},exports.Label=function(t){var e=t.text,o=t.type,r=void 0===o?"message":o,a=t.className,d=t.styles;return n.default.createElement("label",{className:"label ".concat(r," ").concat(a),style:d},e)};
//# sourceMappingURL=index.js.map
