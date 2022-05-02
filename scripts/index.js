// Ude Import export (MANDATORY)

// URL=https://masai-mock-api.herokuapp.com/news/top-headlines?country={country code} 
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import {navbar} from "../components/navbar.js";
let nav = document.querySelector("#navbar")
 nav.innerHTML = navbar();

 import {sidebar} from "../components/navbar.js";
 let sideb = document.querySelector("#sidebar")
  sideb.innerHTML = sidebar();

// let container = document.querySelector(#result);

let getdata = async () => {
    try {
        let res = await fetch (
            `https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`
        )

        let data = await res.json();
        console.log(data)
        appendtoBody(data.articles)
    }
    catch (error) {
        console.log(error)
    }
}
getdata()

let appendtoBody = (data) => {
    data.map(({title,urlToImage}) => {
        let div = document.createElement("div")
        div.setAttribute("class", "news")

        let img = document.createElement("img")
        img.src= urlToImage
        img.setAttribute("id","img")

        let p = document.createElement("p")
        p.innerHTML = title
        p.setAttribute("id","title");

        div.append(img,p)
        news.append(div)
        
    })
    
}