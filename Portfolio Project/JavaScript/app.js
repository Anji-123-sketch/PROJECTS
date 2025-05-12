var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("light-theme")
    if(document.body.classList.contains("light-theme")){
        icon.src = "./Img/moon.png"
    }
    else
    {
        icon.src = "./Img/sun.png"
    }
}
var typed = new Typed(".auto-type", {
    strings:["Anjola Taiwo.", "a Frontend Developer.", "available for Work."],
    typeSpeed: 150,
    backSpeed:150,
    loop:true
})

var infolinks = document.getElementsByClassName("info-link")
var infocontent = document.getElementsByClassName("info-content");

function opentab(infoname){
    for(infolink of infolinks){
        infolink.classList.remove("active-link")
    }
    for(infocontents of infocontent){
        infocontents.classList.remove("active-content")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(infoname).classList.add("active-content")
}

var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}


  const scriptURL = 'https://script.google.com/macros/s/AKfycbzsHGAuwfdF5Li7i-ehUw_vu84BgohrC76LwrZofdaAT0dRAX652Z1u93c4qrQ0K2MXEQ/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
             msg.innerHTML = "Message sent Successfully"
             setTimeout(function(){
                msg.innerHTML = ""
             },3000)
             form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })