window.addEventListener("load", ()=>{
    const curtain = document.querySelector(".curtain");
    const heading = document.querySelector(".heading");
    const loader = document.querySelector(".loader");
    setTimeout(()=>{
        loader.classList.add("hidden");
        curtain.classList.add("open");
        setTimeout(()=>{
            heading.classList.add("show");
        }, 500);
    }, 2000);
});
function closeSidebar() {
    const sidebar = document.body.querySelector(".sideBar");
    sidebar.style.display = "none";
}

//# sourceMappingURL=index.377278e2.js.map
