var mobilePage = {
  roundDivs: [],
  title: null,
  flags: [],
  init: function() {
    title = document.getElementById ("title");
    title.style.fontSize = window.innerWidth/8+"px";
    title.style.width = window.innerWidth + "px";

    mobilePage.roundDivs [0] = document.getElementById("name");
    mobilePage.roundDivs [1] = document.getElementById("work");
    mobilePage.roundDivs [2] = document.getElementById("contact");
    mobilePage.roundDivs [3] = document.getElementById("blog");

    var i=0;
    while (i<=3) {
      mobilePage.flags [i] = 0;
      mobilePage.roundDivs [i].style.width = ( window.innerWidth-32) + "px";
      mobilePage.roundDivs [i].style.fontSize = window.innerWidth/11 + "px";
       i+=1;
    }

    mobilePage.roundDivs [0].addEventListener("click",mobilePage.changeName,false);
mobilePage.roundDivs [1].addEventListener("click",mobilePage.changeWork,false);
mobilePage.roundDivs [2].addEventListener("click",mobilePage.changeContact,false);
mobilePage.roundDivs [3].addEventListener("click",mobilePage.changeBlog,false);
  },

  changeName: function () {
    if (mobilePage.flags [0] === 1) {
      mobilePage.roundDivs [0].innerHTML = "About Me";
      mobilePage.flags [0] = 0;
      return;
}
    mobilePage.roundDivs [0].innerHTML = '<br />My name is Partha Veerkar.<br />I am from Pune, India.<br /><br />I am currently studying Computer Engineering<br />at <a href="http://en.wikipedia.org/wiki/Pune_Institute_of_Computer_Technology">PICT</a>, Pune.<br /><br />I like coding html/css, JavaScript and Python<br /><br />I also like drawing, playing video <br />games and listening to music.<br /><br />';
    mobilePage.flags [0] = 1;
  },

  changeWork: function () {
    if (mobilePage.flags [1] === 1) {
      mobilePage.roundDivs [1].innerHTML = "My Work";
      mobilePage.flags [1] = 0;
      return;
}
    mobilePage.roundDivs [1].innerHTML = '<br /><a href="http://twireput.appspot.com/">TwiReput</a>:<br />A rating system for Twitter<br /><br /><a href="http://sandman-js.appspot.com/">Sandman.js</a>:<br />A custom gseture recongition JavaScript library<br /><br /><a href="http://the-ship.appspot.com/">The Ship</a>:<br />A not-so-technical project <br /><br />';
    mobilePage.flags [1] = 1;
  },

  changeContact: function () {
    if (mobilePage.flags [2] === 1) {
      mobilePage.roundDivs [2].innerHTML = "Find Me";
      mobilePage.flags [2] = 0;
      return;
}
    mobilePage.roundDivs [2].innerHTML = '<br />You can contact me via e-mail:<br/><span id="email">partha.veerkar<br/ >@gmail.com</span><br /><br />or follow my project group on <a href="http://www.github.com/project47"<br />                     github.com/project47</a><br /><br />or find me on:<br /><a href="http://www.facebook.com/parth.veerkar">facebook</a><br /><a  href="http://www.linkedin.com/in/parthaveerkar">linkedin</a><br /><br />';
    mobilePage.flags [2] = 1;
  },


  changeBlog: function () {
    if (mobilePage.flags [3] === 1) {
      mobilePage.roundDivs [3].innerHTML = "Blog";
      mobilePage.flags [3] = 0;
      return;
}
    mobilePage.roundDivs [3].innerHTML = "<br />I haven't quite started writing this yet<br /><br />";
    mobilePage.flags [3] = 1;
  },




};
window.onload=mobilePage.init();
document.body.addEventListener ("gesturechange",function () {
alert (window.innerWidth);
}, false);
