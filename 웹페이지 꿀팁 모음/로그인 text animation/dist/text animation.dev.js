"use strict";

var inputs = document.querySelectorAll('.form-control input');
var labels = document.querySelectorAll('.form-control label');
labels.forEach(function (label) {
  label.innerHTML = label.innerText.split('').map(function (letter, idx) {
    return "<span style=\"\n\t\t\t\ttransition-delay: ".concat(idx * 50, "ms\n\t\t\t\">").concat(letter, "</span>");
  }).join('');
});