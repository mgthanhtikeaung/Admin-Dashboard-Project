document.getElementById("btn").onclick = function(){
    console.log("this is click")
    document.getElementById("btn").classList.toggle("fa-times")
}

$(window).on("load",function(){
    $('.loader-container').fadeOut(500,function(){
      $(this).remove();
    });
  });

let header = document.querySelector(".header");
let scrollToTop = document.querySelector(".scroll-to-top")

var waypoint = new Waypoint({
    element: document.getElementById('waypoint'),
    handler: function(direction) {
        header.classList.toggle("shadow");
        header.classList.toggle("animate__slideInDown")

        if(direction == "down"){
            console.log("this is down")
            scrollToTop.style.display = "block";
            scrollToTop.classList.add("animate__slideInUp");

        }else{
            scrollToTop.style.display = "none";
            scrollToTop.classList.add("animate__slideInDown");

            console.log("this is up")
        }
    },
    offset: '75%'
  })

  wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animate__animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();

  let bookmarkBtn = document.getElementById("bookmark");
  let icon = document.getElementById("bookmarkIcon");
  function toggleText(){
    let x = document.getElementById("bookmarkText");
      if(x.innerHTML == "Bookmark"){
        console.log("this is Bookmark")
        icon.classList.add("bg-primary")
        x.innerHTML = "Bookmarked"
      }
      else{
        console.log("this is no")
        icon.classList.remove("bg-primary")
        x.innerHTML = "Bookmark"
      }
    // console.log(x.innerHTML);
  }

  let one = document.getElementById("firstInput");
  let second = document.getElementById("secondInput");
  let third = document.getElementById("thirdInput");
  let fourth = document.getElementById("fourthInput");

  one.addEventListener("click",function(){
    // console.log("this is click")
    if(one.checked){
      console.log("this is one checked")
      document.getElementById("firstBody").style.display = "block"
      document.getElementById("secondBody").style.display = "none"
      document.getElementById("thirdBody").style.display = "none"
      document.getElementById("fourthBody").style.display = "none"
     
    
    }
  })

  second.addEventListener("click",function(){
    if(second.checked){
      console.log("this is second checked")
      document.getElementById("firstBody").style.display = "none"
      document.getElementById("secondBody").style.display = "block"
      document.getElementById("thirdBody").style.display = "none"
      document.getElementById("fourthBody").style.display = "none"


    }
  })

  third.addEventListener("click",function(){
    if(third.checked){
      console.log("this is third checked")
      document.getElementById("firstBody").style.display = "none"
      document.getElementById("secondBody").style.display = "none"
      document.getElementById("fourthBody").style.display = "none"
      document.getElementById("thirdBody").style.display = "block"

    }
  })

  fourth.addEventListener("click",function(){
    if(fourth.checked){
      console.log("this is fourth checked")
      document.getElementById("firstBody").style.display = "none"
      document.getElementById("secondBody").style.display = "none"
      document.getElementById("thirdBody").style.display = "none"
      document.getElementById("fourthBody").style.display = "block"

    }
  })

    // document.getElementById("fcontinue").addEventListener("click",function(){
    //   console.log("this is firtst continue")
    //   alert(``)

    // })

    let modal = document.getElementById("myModal");
    let modal1 = document.getElementById("myModal1");
    let modal2 = document.getElementById("myModal2");
    let modal3 = document.getElementById("myModal3");

// Get the button that opens the modal
let  btn = document.getElementById("fcontinue");
let  btns = document.getElementById("scontinue");
let  btnt= document.getElementById("tcontinue");
let  btnft = document.getElementById("ftcontinue");


// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  console.log("this is f con")
}

btns.onclick = function() {
  modal1.style.display = "block";
  console.log("this is s cont")
}

btnt.onclick = function() {
  modal2.style.display = "block";
  console.log("this is t cont")

}

btnft.onclick = function() {
  modal3.style.display = "block";
  console.log("this is ft cont")

}

// When the user clicks on <span> (x), close the modal
document.getElementById("gotIt").onclick = function() {
  modal.style.display = "none";
  modal.classList.add = "animate__fadeOut"
}

document.getElementById("gotIt1").onclick = function() {
  modal1.style.display = "none";
  modal1.classList.add = "animate__fadeOut"
}

document.getElementById("gotIt2").onclick = function() {
  modal2.style.display = "none";
  modal2.classList.add = "animate__fadeOut"
}

document.getElementById("gotIt3").onclick = function() {
  modal3.style.display = "none";
  modal3.classList.add = "animate__fadeOut"
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
 