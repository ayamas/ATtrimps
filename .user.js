// ==UserScript==
// @name         AutoTrimps-Ayamas
// @version      1.0.0.0
// @namespace    https://ayamas.github.io/ATtrimps
// @downloadURL  https://ayamas.github.io/ATtrimps/.user.js
// @updateURL    https://ayamas.github.io/ATtrimps/.user.js
// @description  Automate all the trimps!
// @author       ayamas
// @include      *trimps.github.io*
// @include      *kongregate.com/games/GreenSatellite/trimps
// @connect      *Zorn192.github.io/AutoTrimps*
// @connect      *trimps.github.io*
// @connect      self
// @grant        GM_xmlhttpRequest
// ==/UserScript==

var script = document.createElement('script');
script.id = 'AutoTrimps-Ayamas';
//This can be edited to point to your own Github Repository URL.
script.src = 'https://ayamas.github.io/ATtrimps/AutoTrimps2.js';
//script.setAttribute('crossorigin',"use-credentials");
script.setAttribute('crossorigin',"anonymous");
document.head.appendChild(script);
