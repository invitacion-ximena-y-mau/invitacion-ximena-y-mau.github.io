let nav= document.querySelector('nav');
document.querySelector('.botom').addEventListener('click',
function(){
    nav.classList.toggle('active');
})

/*
function onYouTubeIframeAPIReady()
{
    var ctrlq=document.getElementById("youtube-audio");

    var icon=document.createElement("img");
    icon.setAttribute("id","youtube-icon");
    icon.style.cssText="cursor:pointer;cursor:hand";
    ctrlq.appendChild(icon);

    var div=document.createElement("div");
    div.setAttribute("id", "youtube-player");
    ctrlq.appendChild(div);

    var toggleButton=function(play)
    {
        var img=play? "imagenes/pause.png": "imagenes/play.png";
        icon.setAttribute("src","imagenes/favicon.png");
    }

    ctrlq.onclick=function()
    {
        if(player.getPlayerState()==YT.PlayerState.PLAYING || player.getPlayerState()==YT.PlayerState.BUFFERING)
        {
            player.pauseVideo();
            toggleButton(false);
        }else {
            player.playVideo();
            toggleButton(true);
        }
    };

    var player=new YT.Player('youtube-player', 
    {
        height:'0', width: '0', videoId: "z1FIH4KDp6U",
        playerVars: {
            autoplay: '1',
            loop:'1',
        },
        events: {
            'onReady': function(e)
            {
                player.setPlaybackQuality("small");
                toggleButton(player.getPlayerState()!==YT.PlayerState.CUED);
            },
            'onStateChange': function(e)
            {
                if(e.data===YT.PlayerState.ENDED)
                {
                    toggleButton(false);
                }
            }
        }
    });


    

}
*/

var player = document.getElementById("player");

function playAudio() {
  player.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
}

function pauseAudio() {
  player.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
}

player.addEventListener("load", function() {
  playAudio();
});

