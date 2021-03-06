// ==UserScript==
// @name            BetterTTV
// @namespace       BTTV
// @description     Enhances Twitch with new features, emotes, and more.
// @copyright       NightDev, LLC
// @icon            https://crashmax-dev.github.io/bttv-old/assets/logos/bttv_logo.png
// @grant           none
// @match           https://*.twitch.tv/*
// @version         7.4.2
// ==/UserScript==

(function betterttv() {
  var script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = 'https://crashmax-dev.github.io/bttv-old/betterttv.js'
  var head = document.getElementsByTagName('head')[0]
  if (!head) return
  head.appendChild(script)
})()