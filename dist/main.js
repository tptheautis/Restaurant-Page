(()=>{"use strict";const e=()=>{const e=document.getElementById("content"),t=document.createElement("div");e.append(t),t.classList.add("page-content");const n=document.createElement("h1");n.textContent="Welcome to Sushi Palace!",t.append(n);const c=document.createElement("img");c.src="https://assets3.thrillist.com/v1/image/3059772/750x500/flatten;crop;webp=auto;jpeg_quality=50.jpg",t.append(c);const o=document.createElement("p");o.textContent="We have the best sushi in town. Come see for yourself!",t.append(o)};function t(){const e=document.getElementById("content"),t=document.querySelector(".page-content");t&&e.removeChild(t)}(()=>{const n=document.getElementById("content"),c=document.createElement("div");n.append(c),c.classList.add("button-container");const o=document.createElement("div"),d=document.createElement("div"),a=document.createElement("div");c.append(o),c.append(d),c.append(a),o.textContent="Home",d.textContent="Menu",a.textContent="Contact",o.classList.add("button"),d.classList.add("button"),a.classList.add("button"),o.addEventListener("click",(()=>{t(),e()})),d.addEventListener("click",(()=>{t(),(()=>{const e=document.getElementById("content"),t=document.createElement("div");e.append(t),t.classList.add("page-content");const n=document.createElement("h1");t.append(n),n.textContent="Menu"})()})),a.addEventListener("click",(()=>{t(),(()=>{const e=document.getElementById("content"),t=document.createElement("div");e.append(t),t.classList.add("page-content");const n=document.createElement("h1");t.append(n),n.textContent="Contact"})()}))})(),e()})();