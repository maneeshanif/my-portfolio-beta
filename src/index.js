"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
window.addEventListener("load", () => {
    const curtain = document.querySelector(".curtain");
    const heading = document.querySelector(".heading");
    const loader = document.querySelector(".loader");
    setTimeout(() => {
        loader.classList.add("hidden");
        curtain.classList.add("open");
        setTimeout(() => {
            heading.classList.add("show");
        }, 500);
    }, 2000);
});
