let chiceimg = document.querySelector("img");
document.querySelector("img").onclick = function () {
  if (chiceimg.getAttribute("src") == "./images/test.jpg") {
    chiceimg.setAttribute("src", "./images/test1.bmp");
  } else {
    chiceimg.setAttribute("src", "./images/test.jpg");
  }
};
let mybottom = document.querySelector("bottom");
let myheader = document.querySelector("h1");
function setUserName() {
  let myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.innerHTML = "Mozilla is cool, " + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.innerHTML = "Mozilla is cool, " + storedName;
}

myButton.onclick = function () {
  setUserName();
};
