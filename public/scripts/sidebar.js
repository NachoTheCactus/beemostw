    const sidebar = document.getElementById("sidebar");
    const sidebarBg = document.getElementById("sidebar-bg");
    const btn = document.getElementById("btn_brgr");
    const line1 = document.getElementById("brgr1");
    const line2 = document.getElementById("brgr2");
    const line3 = document.getElementById("brgr3");
    const links = document.querySelector("#sidebar>div>div");
    var sidebarOpened = false;
    //Close sidebar when window has more than 768px
    window.onresize = ()=>{
        if(window.innerWidth >= 768){
            closeSidebar();
        }
    }
    //To smoothen the opacity animation
    sidebarBg.addEventListener("webkitTransitionEnd", () => {
        if(sidebarBg.style.opacity == 0){
            sidebarBg.style.display = "none";
        }
    });
    //On hamburger button click
    btn.onclick = () => {
        if(!sidebarOpened){
            openSidebar();
        }
        else{
            closeSidebar();
        }
    }
    sidebarBg.onclick = () => {
        closeSidebar();
    }
    
    function openSidebar(){
        sidebarOpened = true;
        //Button animation to X
        line1.style.transform = "rotate(44deg)";
        line1.style.marginBottom = "-10px";
        line3.style.transform = "rotate(-44deg)";
        line2.style.opacity = "0";
        //Open sidebar
        sidebar.style.width = "210px";
        sidebarBg.style.display = "block";
        setTimeout(() => {
            sidebarBg.style.opacity = "30%";
        }, 20);
        links.style.opacity = "1";
    }
    function closeSidebar(){
        sidebarOpened = false;
        //Button animation to burger
        line1.style.transform = "rotate(0deg)";
        line1.style.marginBottom = "0.375rem";
        line3.style.transform = "rotate(0deg)";
        line2.style.opacity = "1";
        //Close sidebar
        sidebar.style.width = "0";
        sidebarBg.style.opacity = "0";
        links.style.opacity = "0";
    }
