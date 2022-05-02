function navbar(){
    return  `
    <h1> <a href="index.html">News App</a></h1>
    <input id="search_input" type="text" placeholder="Search News" onkeydown="search(event)" >
  </div>`
}
export {navbar} ;

function sidebar(){
    return  `
 
   
      <h3 id="">Countries</h3>
      <h3 id="in">India</h3>
      <h3 id="ch">China</h3>
      <h3 id="us">Usa</h3>
      <h3 id="uk">Uk</h3>
      <h3 id="nz">Newzeland</h3>
       `;
}
export {sidebar}