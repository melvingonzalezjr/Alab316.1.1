// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

//PART 1: GETTING STARTED
const mainEl = document.body.querySelector("main")      //We already have a "main" tag so just selecting
mainEl.style.backgroundColor = "var(--main-bg)"         //custom property in CSS. makes it easier for reference
mainEl.innerHTML = '<h1>DOM Manipulation</h1>'          //innerHTML allows to put inner tags and the text
mainEl.classList.add("flex-ctr");                       //class 'flex-ctr' which is selected

//PART 2: CREATING MENU BAR
const topMenuEl = document.getElementById("top-menu")   //it's document.getElementById
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"
topMenuEl.classList.add("flex-around");

//PART 3: ADDING MENU BUTTONS
for (link of menuLinks) {
    const anchor = document.createElement("a")          //REMEMBER: document.createElement()
    anchor.setAttribute('href', link['href'])
    anchor.textContent = link['text']
    topMenuEl.appendChild(anchor)                       //Now we can append this anchor to the topMenuEl
}

