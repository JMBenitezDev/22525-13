// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: 'M7lc1UVf-VE',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}




/**********seccion carrusel animado   ***********/
document.querySelector(".contPrincipal").addEventListener("click", () => {
  let impSlide = document.querySelector('input[name=slider]:checked');
  switch (impSlide.id) {
      case "s1":
          document.querySelector("#slide1 .imgVacia").classList.add("goodClass")
          document.querySelector("#slide2 .imgVacia").classList.remove("goodClass")
          document.querySelector("#slide3 .imgVacia").classList.remove("goodClass")
          document.querySelector("#slide4 .imgVacia").classList.remove("goodClass")
          document.querySelector("#slide5 .imgVacia").classList.remove("goodClass")
          break;
      case "s2":
          document.querySelector("#slide2 .imgVacia").classList.add("goodClass")
          document.querySelector("#slide1 .imgVacia").classList.remove("goodClass")
          document.querySelector("#slide3 .imgVacia").classList.remove("goodClass")
          document.querySelector("#slide4 .imgVacia").classList.remove("goodClass")
          document.querySelector("#slide5 .imgVacia").classList.remove("goodClass")
          break;
      case "s3":
          document.querySelector("#slide3 .imgVacia").classList.add("goodClass")
          document.querySelector("#slide2 .imgVacia").classList.remove("goodClass")
          document.querySelector("#slide1 .imgVacia").classList.remove("goodClass")
          document.querySelector("#slide4 .imgVacia").classList.remove("goodClass")
          document.querySelector("#slide5 .imgVacia").classList.remove("goodClass")
          break;
      case "s4":
          document.querySelector("#slide4 .imgVacia").classList.add("goodClass")
          document.querySelector("#slide2 .imgVacia").classList.remove("goodClass")
          document.querySelector("#slide3 .imgVacia").classList.remove("goodClass")
          document.querySelector("#slide1 .imgVacia").classList.remove("goodClass")
          document.querySelector("#slide5 .imgVacia").classList.remove("goodClass")
          break;

      case "s5":
          document.querySelector("#slide5 .imgVacia").classList.add("goodClass")
          document.querySelector("#slide2 .imgVacia").classList.remove("goodClass")
          document.querySelector("#slide3 .imgVacia").classList.remove("goodClass")
          document.querySelector("#slide4 .imgVacia").classList.remove("goodClass")
          document.querySelector("#slide1 .imgVacia").classList.remove("goodClass")
          break;

      default:
          break;
  }

})
/**********fin seccion carrusel animado   ***********/
