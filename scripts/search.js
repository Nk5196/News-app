// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import {navbar} from "../components/navbar.js";
let nav = document.querySelector("#navbar")
 nav.innerHTML = navbar();

 import {sidebar} from "../components/navbar.js";
 let sideb = document.querySelector("#sidebar")
  sideb.innerHTML = sidebar();