/**
 * Traverse the DOM tree using querySelector() and querySelectorAll()
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll
 */

 import Backpack from "./Backpack.js";

 const everydayPack = new Backpack(
   "Everyday Backpack",
   30,
   "grey",
   15,
   26,
   26,
   false,
   "December 5, 2018 15:00:00 PST",
   "../assets/images/everyday.svg"
 );
 
 const main = document.querySelector(".maincontent");
 
 const content = `
     <figure class="backpack__image">
       <img src=${everydayPack.image} alt="" />
     </figure>
     <h1 class="backpack__name">${everydayPack.name}</h1>
     <ul class="backpack__features">
       <li class="backpack__volume">Volume:<span> ${
         everydayPack.volume
       }l</span></li>
       <li class="packprop backpack__color">Color:<span> ${everydayPack.color}</span></li>
       <li class="packprop backpack__age">Age:<span> ${everydayPack.backpackAge()} days old</span></li>
       <li class="backpack__pockets">Number of pockets:<span> ${
         everydayPack.pocketNum
       }</span></li>
       <li class="packprop backpack__strap">Left strap length:<span> ${
         everydayPack.strapLength.left
       } inches</span></li>
       <li class="packprop backpack__strap">Right strap length:<span> ${
         everydayPack.strapLength.right
       } inches</span></li>
       <li class="packprop backpack__lid">Lid status:<span> ${
         everydayPack.lidOpen
       }</span></li>
     </ul>
 `;
 const newArticle = document.createElement("article");
 newArticle.classList.add("backpack");
 newArticle.setAttribute("id", "everyday");

 newArticle.innerHTML = content;

 main.append(newArticle);
 
//  queryselector
console.log(document.querySelector(".maincontent .backpack > .backpack__features > li:last-child").innerText); // outPut: 'Lid status: false'

// queryselectorAll
console.log(document.querySelectorAll(".maincontent .backpack > .backpack__features > li")) 
// OutPut: NodeList(7) [li.backpack__volume, li.packprop.backpack__color, li.packprop.backpack__age, li.backpack__pockets, li.packprop.backpack__strap, li.packprop.backpack__strap, li.packprop.backpack__lid]

document.querySelectorAll(".maincontent .backpack > .backpack__features > li:nth-child(even)").forEach(item => item.style.backgroundColor = 'red')
document.querySelectorAll(".maincontent .backpack > .backpack__features > li:nth-child(odd)").forEach(item => item.style.backgroundColor = 'yellow');
document.querySelector(".maincontent .backpack > .backpack__features > li:last-child").style.backgroundColor = "green";

// getElelemtsByClassName

console.log(document.getElementsByClassName("packprop"));
// OutCome: HTMLCollection(5) [li.packprop.backpack__color, li.packprop.backpack__age, li.packprop.backpack__strap, li.packprop.backpack__strap, li.packprop.backpack__lid]


// getElemetById

console.log(document.getElementById("everyday"));

// Elelement.className
document.querySelectorAll(".packprop").forEach(item => item.className = 'new-class')

// Element.classList
document.querySelectorAll(".packprop").forEach(item => item.classList.add("new-class"))
document.querySelectorAll(".packprop").forEach(item => item.classList.remove("new-class"))
document.querySelectorAll(".packprop").forEach(item => item.classList.toggle("new-class"))

// get all attributes
console.log(document.querySelector("img").attributes);

//  hasAttribute return Boolean value : 
console.log(document.querySelector("img").hasAttribute("src"));

//  getAttribute return attribute value : 
console.log(document.querySelector("img").getAttribute("src"));

//  setAttribute set attribute value : 

document.querySelector("img").setAttribute("title", "BackPack Image");
document.querySelector("img").setAttribute("alt", "BackPack Image");

// removeAttribute removes attribute from selector:
document.querySelector("img").removeAttribute("title");

// Inline Style

document.querySelector(".site-title").style.color = "purple";
document.querySelector(".site-title").style.backgroundColor = "yellow";