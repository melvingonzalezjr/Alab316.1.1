// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

//PART 1: GETTING STARTED
const mainEl = document.body.querySelector("main")
mainEl.style.backgroundColor = "var(--main-bg)"
mainEl.innerHTML = '<h1>DOM Manipulation</h1>'
mainEl.classList.add("flex-ctr");

//PART 2: CREATING MENU BAR
const topMenuEl = document.getElementById("top-menu")
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"
topMenuEl.classList.add("flex-around");

//PART 3: ADDING MENU BUTTONS

for (link of menuLinks) {
    const anchor = document.createElement("a")
    anchor.setAttribute('href', link['href'])
    anchor.textContent = link['text']
    topMenuEl.appendChild(anchor)
}

