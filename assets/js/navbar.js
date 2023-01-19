// navbar Functions ///

// mouse Enter in navbar ///

const mainheader = document.querySelector(".mainheader");
const NavAllItems = document.querySelectorAll(".allNavItems");

    mainheader.addEventListener("mouseenter", () => {
      mainheader.classList.add("primary-bg-white");
      for (var k = 0; k < NavAllItems.length; k++) {
        allNavItems[k].style.color = "#000";
      }

  });
// mouse leave in navbar ///

mainheader.addEventListener("mouseleave", ()=> {
  mainheader.classList.remove("primary-bg-white");
  for (var l = 0; l < NavAllItems.length; l++) {
    allNavItems[l].style.color = "#fff";
  }
});


// navbar Functions ///


// On Window Scroll ///

const navbar = document.getElementById("navbar");
const headers = document.getElementById("header");
const navBarlogo = document.getElementById("logo");
const allNavItems = document.querySelectorAll(".allNavItems");


window.onscroll = function ()  {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 20 ) {
        navbar.style.backgroundColor = "#fff";
        for (var i = 0; i < allNavItems.length; i++){
          allNavItems[i].style.color = "#000";
        }
        navbar.style.top = "0";
        navbar.style.color = "#000";
        headers.style.display = "none";
        navBarlogo.style.color = "#000";

        
        

    }
    else {
        navbar.style.backgroundColor = "transparent";
        navbar.style.top = "40px";
        headers.style.display = "flex";
        for(var j = 0; j < allNavItems.length; j++){
          allNavItems[j].style.color = "#fff"
        }
        navBarlogo.style.color = "#fff";
        

    }
};

////// hamburger Menu /////
  function change(bar) {
    bar.classList.toggle("change")
  };

// //// hamburger Menu /////

// /// Start Project Btn ////
const getstarted = document.getElementById("get-started-con");
const topheader = document.getElementById("topheader");

  function startproject () {
    getstarted.style.right = "0px";
    if (getstarted.style.right == "0px") {

    }
  };
  function closestartProject() {
    getstarted.style.right = "-1500px";





  };

// /// Start Project Btn ////
const DropMenu = document.getElementById("dropMenu");
const DropClose = document.getElementById("dropMenu");
const iconRotate = document.getElementById("closeIcon");
const upicon = document.getElementById("openicon");
const downicon = document.getElementById("closeicon");
const OpenDrop = () => {

    DropMenu.style.height = "450px";
    iconRotate.style.transform = "rotate(180deg)";
    downicon.style.display = "none";
    upicon.style.display = "block";



}

const CloseDrop = () => {
  DropMenu.style.height = "450px";
  iconRotate.style.transform = "rotate(180deg)";
  downicon.style.display = "none";
  upicon.style.display = "block";


}

const openDrop = () => {
  DropMenu.style.height = "0px";
  iconRotate.style.transform = "rotate(0deg)";
  upicon.style.display = "none";
  downicon.style.display = "block";



}


console.log(window.screen.width);