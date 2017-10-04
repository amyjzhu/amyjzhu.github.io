"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
var $ = require("jquery");
$(document).ready(function () {
    loadHomeElements();
});
function loadHomeElements() {
    $("#content-box").load(path.join(__dirname, "../assets/home.txt"));
}
