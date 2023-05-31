// ==UserScript==
// @name         bot google
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Krylov Andrey
// @match        https://www.google.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

let keywords = ["Пропорции здорового питания", "Что такое плато и как его преодолеть", "Как меняется личность с годами. Отрывок из книги нейробиолога"];
let keyword = keywords[getRandom(0, keywords.length)];
let links = document.links;
let searchBtn = document.getElementsByName("btnK")[0];

if (searchBtn !== undefined) {
  document.getElementsByName("q")[0].value = keyword;
  searchBtn.click();
} else {
  for(let i = 0; i < links.length; i++) {
    if (links[i].href.indexOf("zozhnik.ru") != -1) {
      let link = links[i];
      link.click();
      break;
    }
  }
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}
