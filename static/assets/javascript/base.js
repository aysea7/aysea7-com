document.body.insertAdjacentHTML("afterbegin","<div class='static-burst'></div>")

/* stagger link animation */

const links=document.querySelectorAll(".link")

links.forEach((link,i)=>{

link.style.opacity="0"
link.style.transform="translateY(8px)"

setTimeout(()=>{

link.style.transition="opacity .35s ease, transform .35s ease"
link.style.opacity="1"
link.style.transform="translateY(0)"

},120*i)

})

/* logo parallax */

const logo=document.getElementById("logo")

document.addEventListener("mousemove",(e)=>{

const x=(e.clientX/window.innerWidth-.5)*6
const y=(e.clientY/window.innerHeight-.5)*3

logo.style.transform=`translate(${x}px,${y}px)`

})

/* theme toggle */

const toggle=document.getElementById("themeToggle")

if(localStorage.getItem("theme")==="light"){
document.body.classList.add("light")
}

toggle.onclick=()=>{

document.body.classList.toggle("light")

localStorage.setItem(
"theme",
document.body.classList.contains("light")?"light":"dark"
)

}

/* copyright year */

document.getElementById("year").textContent=new Date().getFullYear()

/* cursor spotlight */

const cursor=document.createElement("div")
cursor.className="cursor"

document.body.appendChild(cursor)

document.addEventListener("mousemove",e=>{

cursor.style.left=e.clientX+"px"
cursor.style.top=e.clientY+"px"

})