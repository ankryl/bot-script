// ==UserScript==
// @name         bot google v2
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       Krylov Andrey
// @match        https://www.google.com/*
// @match        https://www.zozhnik.ru/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

let keywords = ["метод тарелки", "что такое плато и", "Как меняется личность с годами"];
let keyword = keywords[getRandom(0, keywords.length)];
//let keyword = "Как жидкие калории мешают похудению";
//let keyword = "Расписание электричек";
let links = document.links;
let searchBtn = document.getElementsByName("btnK")[0];
let googleInput = document.getElementsByName("q")[0];

if (searchBtn !== undefined) {
    let i = 0;
    let timerId = setInterval(function(){
        googleInput.value += keyword[i];
        i++;
        if(i == keyword.length){
            clearInterval(timerId);
            searchBtn.click();}
    }, 300)
    }else if (location.hostname == "zozhnik.ru"){
        console.log("Это целевой сайт");
        setInterval(() => {
            let index = getRandom(0, links.length);
            if (getRandom(0, 101) >= 80) {
                location.href = "https://www.google.com/";
            }
            if (links[index].href.indexOf("zozhnik.ru") != -1) links[index].click();
        }, getRandom(2000, 5000))
    } else {
        let nextPage = true;
        for(let i = 0; i < links.length; i++) {
            if (links[i].href.indexOf("zozhnik.ru") != -1) {
                let link = links[i];
                nextPage = false;
                console.log("Нашел строку " + link);
                setTimeout(() => {
                    link.click();
                },getRandom(2500,5000))
                break;
            }
        }
        let elementExist = setInterval(() => {
            let element = document.querySelector(".YyVfkd");
            if (element != null) {
                if (element.innerText == "5") {
                    nextPage = false;
                    location.href = "https://www.google.com/";
                }
                clearInterval(elementExist);
            }
        }, 100)

        if (nextPage) {
            setTimeout(() => {
                pnnext.click();
            }, getRandom(3000, 8000))
        }
    }

function getRandom(min, max) {return Math.floor(Math.random() * (max - min) + min)
}
